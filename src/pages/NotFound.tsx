import { Link } from 'react-router-dom';
import { Home, Flame } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(6 85% 42% / 0.12), transparent 65%)' }}
      />

      <div className="relative z-10 text-center px-4">
        {/* Icon */}
        <div className="w-20 h-20 bg-flame-crimson/15 border border-flame-crimson/25 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
          <Flame className="h-10 w-10 text-flame-orange" />
        </div>

        {/* Error code */}
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-gradient-flame mb-4 animate-fade-up">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl text-white mb-3 animate-fade-up delay-100">
          Page Not Found
        </h2>
        <p className="text-white/50 mb-8 max-w-sm mx-auto animate-fade-up delay-200">
          The page you're looking for doesn't exist. It may have been moved or the URL is incorrect.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-flame text-white font-semibold rounded-xl shadow-flame hover:shadow-glow hover:scale-105 transition-all duration-200 animate-fade-up delay-300"
        >
          <Home className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
