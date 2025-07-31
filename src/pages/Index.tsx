
import { useEffect, useState } from 'react';
import { Shield, Clock, Users, Zap, Github, Twitter, MessageCircle, ArrowRight, Wallet, AlertTriangle } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GlowingButton } from '@/components/GlowingButton';
import { FeatureCard } from '@/components/FeatureCard';
import { DemoPanel } from '@/components/DemoPanel';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/80 backdrop-blur-md border-b border-cyber-purple/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-blue flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Cache Wallet</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-300 hover:text-cyber-cyan transition-colors">About</a>
              <a href="#problem" className="text-gray-300 hover:text-cyber-cyan transition-colors">Problem</a>
              <a href="#demo" className="text-gray-300 hover:text-cyber-cyan transition-colors">Demo</a>
              <a href="#community" className="text-gray-300 hover:text-cyber-cyan transition-colors">Community</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center relative ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text text-gradient" data-text="Cache Wallet">
              Cache Wallet
            </h1>
            <p className="text-3xl md:text-4xl text-gray-300 mb-4">
              Your On-Chain Safety Net for Lost Crypto
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Preventing billions in crypto losses through decentralized inheritance, 
              proof-of-timelock, and automated recovery systems.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="holographic p-8 rounded-xl">
              <div className="text-5xl font-bold text-gradient mb-2">
                $<AnimatedCounter end={450} suffix="B" trigger={isLoaded} />
              </div>
              <div className="text-gray-300">Lost in Crypto</div>
            </div>
            <div className="holographic p-8 rounded-xl">
              <div className="text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter end={1200000} suffix="+" trigger={isLoaded} />
              </div>
              <div className="text-gray-300">Transactions Protected</div>
            </div>
            <div className="holographic p-8 rounded-xl">
              <div className="text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter end={8500} suffix="+" trigger={isLoaded} />
              </div>
              <div className="text-gray-300">Timelocks Executed</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowingButton href="https://www.cachewallet.com/">
              Start Protecting Your Crypto <ArrowRight className="w-5 h-5" />
            </GlowingButton>
            <GlowingButton variant="secondary">
              Learn More <Shield className="w-5 h-5" />
            </GlowingButton>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Wallet className="w-12 h-12 text-cyber-purple opacity-30" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <Shield className="w-10 h-10 text-cyber-blue opacity-30" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <Clock className="w-8 h-8 text-cyber-cyan opacity-30" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gradient mb-6">About Cache Wallet</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionary crypto recovery solutions built on blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-white" />}
              title="Decentralized Will"
              description="Automatically pass your crypto assets to designated beneficiaries through smart contracts. No central authority needed - everything runs on-chain."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-white" />}
              title="Proof Of Timelock (POTL)"
              description="Set predetermined dates for asset transfers. Your funds move automatically when the timelock expires, ensuring your crypto reaches its destination."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-white" />}
              title="Deadman's Switch"
              description="Automated transfers triggered by inactivity. If you don't check in within a set timeframe, your assets are automatically distributed to your chosen recipients."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-white" />}
              title="Escrow System"
              description="Secure conditional transfers with built-in arbitration. Hold funds safely until specific conditions are met, with dispute resolution mechanisms."
            />
          </div>
        </div>
      </section>

      {/* Problem Visualization */}
      <section id="problem" data-section className="py-32 bg-gradient-to-r from-cyber-dark to-cyber-gray relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gradient mb-6">The $450B Problem</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Every year, billions in cryptocurrency becomes permanently inaccessible due to forgotten passwords, 
              lost seed phrases, and inactive wallets. Cache Wallet solves this.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-red-900/20 border border-red-500/30 rounded-xl">
                <AlertTriangle className="w-12 h-12 text-red-400" />
                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-2">Lost Forever</h3>
                  <p className="text-gray-300">20% of all Bitcoin is estimated to be permanently lost</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-yellow-900/20 border border-yellow-500/30 rounded-xl">
                <Clock className="w-12 h-12 text-yellow-400" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Forgotten Access</h3>
                  <p className="text-gray-300">Millions forget passwords and seed phrases annually</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                <Users className="w-12 h-12 text-purple-400" />
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">No Inheritance Plan</h3>
                  <p className="text-gray-300">Crypto assets vanish when owners pass away</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Animated visualization */}
              <div className="holographic p-12 rounded-2xl text-center">
                <div className="mb-8">
                  <div className="text-6xl font-bold text-gradient animate-pulse">
                    $450B+
                  </div>
                  <p className="text-xl text-gray-300 mt-2">Lost Cryptocurrency</p>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 bg-gradient-to-r from-red-500 to-transparent rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                      <div className="flex-1 h-2 bg-gray-700 rounded">
                        <div 
                          className="h-full bg-gradient-to-r from-red-500 to-transparent rounded animate-pulse"
                          style={{ 
                            width: `${Math.random() * 80 + 20}%`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
                  <p className="text-cyber-cyan font-semibold">
                    Cache Wallet Recovery Rate: 99.7%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" data-section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gradient mb-6">Interactive Demo</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience Cache Wallet's features in action
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <DemoPanel
              title="Timelock Transfer"
              icon={<Clock className="w-8 h-8 text-white" />}
              demoType="timelock"
              steps={[
                "Set transfer date and recipient",
                "Lock funds in smart contract",
                "Wait for timelock to expire",
                "Automatic transfer executed",
                "Recipient receives funds"
              ]}
            />
            
            <DemoPanel
              title="Deadman's Switch"
              icon={<Zap className="w-8 h-8 text-white" />}
              demoType="deadman"
              steps={[
                "Configure inactivity period",
                "Set emergency contacts",
                "Monitor for check-ins",
                "Trigger after inactivity",
                "Assets transferred safely"
              ]}
            />
            
            <DemoPanel
              title="Escrow Release"
              icon={<Shield className="w-8 h-8 text-white" />}
              demoType="escrow"
              steps={[
                "Deposit funds in escrow",
                "Set release conditions",
                "Wait for approval",
                "Conditions verified",
                "Automatic fund release"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" data-section className="py-32 bg-gradient-to-t from-cyber-dark to-cyber-darker relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gradient mb-6">Join the Community</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Connect with developers and users building the future of crypto security
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GlowingButton href="https://www.cachewallet.com/">
                <Wallet className="w-5 h-5" />
                Visit Website
              </GlowingButton>
              <GlowingButton href="https://twitter.com/CacheWallet_HQ" variant="secondary">
                <Twitter className="w-5 h-5" />
                Follow on X
              </GlowingButton>
              <GlowingButton href="https://t.me/cachewallet_hq" variant="secondary">
                <MessageCircle className="w-5 h-5" />
                Join Telegram
              </GlowingButton>
            </div>
          </div>

          {/* Final CTA */}
          <div className="holographic p-12 rounded-2xl text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-gradient mb-6">
              Start Protecting Your Crypto Today
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't let your digital assets become part of the $450B lost forever. 
              Set up your safety net in minutes with Cache Wallet's decentralized recovery solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GlowingButton href="https://www.cachewallet.com/">
                Get Started Now <ArrowRight className="w-5 h-5" />
              </GlowingButton>
              <GlowingButton variant="secondary">
                Watch Demo <Shield className="w-5 h-5" />
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyber-purple/30 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-blue flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Cache Wallet</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://www.cachewallet.com/" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                Website
              </a>
              <a href="https://twitter.com/CacheWallet_HQ" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                Twitter
              </a>
              <a href="https://t.me/cachewallet_hq" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                Telegram
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cyber-purple/20 text-center">
            <p className="text-gray-400">
              © 2024 Cache Wallet. Securing the future of cryptocurrency.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
