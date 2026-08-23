import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Lock, ShieldAlert } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validUser = import.meta.env.VITE_ADMIN_USERNAME;
    const validPass = import.meta.env.VITE_ADMIN_PASSWORD;

    if (username === validUser && password === validPass) {
      sessionStorage.setItem('admin_auth', 'true');
      toast({
        title: 'Login successful',
        description: 'Welcome to the admin dashboard.',
      });
      navigate('/admin');
    } else {
      toast({
        title: 'Authentication failed',
        description: 'Invalid username or password.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center section-padding relative overflow-hidden">
        {/* Background */}
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

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-background"
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
                className="bg-background"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-flame text-white font-semibold py-2.5 rounded-xl shadow-flame hover:shadow-glow hover:scale-[1.02] transition-all"
            >
              Secure Login
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
