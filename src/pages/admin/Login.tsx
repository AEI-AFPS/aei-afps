import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Lock, ShieldAlert, AlertCircle, Timer } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import { supabase } from '../../lib/supabase';

const MAX_ATTEMPTS = 3;
const LOCKOUT_SECONDS = 30;

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate('/admin');
    });
  }, [navigate]);

  // Countdown timer for lockout
  useEffect(() => {
    if (!lockoutUntil) return;
    const interval = setInterval(() => {
      const remaining = Math.ceil((lockoutUntil - Date.now()) / 1000);
      if (remaining <= 0) {
        setLockoutUntil(null);
        setAttempts(0);
        setCountdown(0);
        clearInterval(interval);
      } else {
        setCountdown(remaining);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [lockoutUntil]);

  const isLockedOut = lockoutUntil !== null && Date.now() < lockoutUntil;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLockedOut) return;

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) {
        const next = attempts + 1;
        setAttempts(next);
        if (next >= MAX_ATTEMPTS) {
          setLockoutUntil(Date.now() + LOCKOUT_SECONDS * 1000);
          toast({ title: 'Too many attempts', description: `Locked out for ${LOCKOUT_SECONDS}s.`, variant: 'destructive' });
        } else {
          toast({
            title: 'Authentication failed',
            description: `Invalid credentials. ${MAX_ATTEMPTS - next} attempt(s) remaining.`,
            variant: 'destructive',
          });
        }
      } else {
        toast({ title: 'Login successful', description: 'Welcome to the admin dashboard.' });
        navigate('/admin');
      }
    } catch {
      toast({ title: 'Network error', description: 'Could not connect. Please try again.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="relative z-10 w-full max-w-md bg-card border border-border/50 rounded-2xl p-8 shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-flame rounded-t-2xl" />

          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-14 h-14 bg-flame-crimson/10 border border-flame-crimson/20 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-flame-orange" />
            </div>
            <h1 className="font-heading text-2xl text-foreground mb-2">Admin Portal</h1>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              <ShieldAlert className="h-4 w-4" />
              Restricted Access Area
            </p>
          </div>

          {isLockedOut && (
            <div className="mb-5 flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 text-sm">
              <Timer className="h-4 w-4 shrink-0" />
              <span>Too many failed attempts. Locked out for <strong>{countdown}s</strong>.</span>
            </div>
          )}

          {attempts > 0 && !isLockedOut && (
            <div className="mb-5 flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-xl px-4 py-3 text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span><strong>{MAX_ATTEMPTS - attempts}</strong> attempt(s) remaining before lockout.</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLockedOut || isLoading}
                autoComplete="email"
                className="bg-background"
                placeholder="aei_admin@aei-fireguard.in"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLockedOut || isLoading}
                autoComplete="current-password"
                className="bg-background"
              />
            </div>
            <Button
              type="submit"
              disabled={isLockedOut || isLoading}
              className="w-full bg-gradient-flame text-white font-semibold py-2.5 rounded-xl shadow-flame hover:shadow-glow hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? 'Verifying...' : isLockedOut ? `Locked (${countdown}s)` : 'Secure Login'}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Credentials can only be changed via the database.
          </p>
        </div>
      </div>
    </Layout>
  );
}
