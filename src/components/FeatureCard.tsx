
import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative p-8 rounded-xl transition-all duration-700 transform",
        "bg-gradient-to-br from-cyber-gray/50 to-cyber-dark/50",
        "border border-cyber-purple/30 backdrop-blur-sm",
        "hover:border-cyber-cyan/60 hover:shadow-2xl hover:shadow-cyber-cyan/20",
        "hover:-translate-y-2",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/10 via-cyber-blue/10 to-cyber-cyan/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-blue">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-cyber-cyan">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Data flow animation */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden rounded-t-xl">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
};
