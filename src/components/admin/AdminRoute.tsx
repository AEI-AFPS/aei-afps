import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader2 } from 'lucide-react';

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data }) => {
      setStatus(data.session ? 'authenticated' : 'unauthenticated');
    });

    // Listen for auth state changes (logout, token refresh, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setStatus(session ? 'authenticated' : 'unauthenticated');
    });

    return () => subscription.unsubscribe();
  }, []);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-flame-orange" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
