
import { useState } from 'react';
import { Clock, Shield, Users, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DemoPanelProps {
  title: string;
  icon: React.ReactNode;
  steps: string[];
  demoType: 'timelock' | 'deadman' | 'escrow';
}

export const DemoPanel = ({ title, icon, steps, demoType }: DemoPanelProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runDemo = async () => {
    setIsRunning(true);
    setCurrentStep(0);

    for (let i = 0; i <= steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCurrentStep(i);
    }

    setTimeout(() => {
      setIsRunning(false);
      setCurrentStep(0);
    }, 2000);
  };

  const getStepIcon = (index: number) => {
    if (currentStep > index) return <CheckCircle className="w-5 h-5 text-cyber-cyan" />;
    if (currentStep === index) return <div className="w-5 h-5 border-2 border-cyber-cyan rounded-full animate-pulse" />;
    return <div className="w-5 h-5 border-2 border-gray-600 rounded-full" />;
  };

  return (
    <div className="holographic rounded-xl p-8 hover:shadow-xl hover:shadow-cyber-purple/20 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-blue">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-cyber-cyan">{title}</h3>
      </div>

      <div className="space-y-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            {getStepIcon(index)}
            <span className={cn(
              "text-sm transition-colors duration-300",
              currentStep > index ? "text-cyber-cyan" : 
              currentStep === index ? "text-white" : "text-gray-400"
            )}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={runDemo}
        disabled={isRunning}
        className={cn(
          "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300",
          "bg-gradient-to-r from-cyber-purple to-cyber-blue",
          "hover:from-cyber-blue hover:to-cyber-cyan",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transform hover:scale-105"
        )}
      >
        {isRunning ? "Running Demo..." : "Run Demo"}
      </button>

      {/* Progress bar */}
      {isRunning && (
        <div className="mt-4 w-full bg-cyber-gray rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};
