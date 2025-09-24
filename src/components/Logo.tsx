import React from 'react';
import { Building2, Zap, Leaf } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'dark', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  const subtextSizeClasses = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const subtextColor = variant === 'light' ? 'text-blue-100' : 'text-gray-600';

  return (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-800 to-emerald-600 p-2 rounded-xl shadow-lg">
          <Building2 className={`${sizeClasses[size]} text-white`} />
        </div>
        {/* AI/Tech indicator */}
        <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
          <Zap className="h-3 w-3 text-blue-900" />
        </div>
        {/* Sustainability indicator */}
        <div className="absolute -bottom-1 -left-1 bg-emerald-400 rounded-full p-1">
          <Leaf className="h-3 w-3 text-emerald-900" />
        </div>
      </div>

      {/* Company Name */}
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold ${textColor} leading-tight`}>
            VRC InfraMax
          </h1>
          <p className={`${subtextSizeClasses[size]} ${subtextColor} leading-tight`}>
            Private Limited
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;