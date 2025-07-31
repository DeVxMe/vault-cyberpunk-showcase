
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const GlowingButton = ({ 
  children, 
  href, 
  onClick, 
  className,
  variant = 'primary' 
}: GlowingButtonProps) => {
  const baseClasses = cn(
    "relative inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg",
    "transition-all duration-300 transform hover:scale-105",
    "before:absolute before:inset-0 before:rounded-lg before:p-[2px]",
    "before:bg-gradient-to-r before:from-cyber-purple before:via-cyber-blue before:to-cyber-cyan",
    "before:-z-10 before:blur-sm before:opacity-75",
    "after:absolute after:inset-[2px] after:rounded-lg after:bg-cyber-darker after:-z-10",
    "hover:before:opacity-100 hover:before:blur-md",
    variant === 'primary' 
      ? "text-white bg-gradient-to-r from-cyber-purple to-cyber-blue" 
      : "text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-darker",
    className
  );

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
