import { Navigate } from 'react-router-dom';

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const isAuth = sessionStorage.getItem('admin_auth') === 'true';
  
  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return <>{children}</>;
}
