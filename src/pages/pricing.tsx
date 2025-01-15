import React, { useState } from 'react';


interface Plan {
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  features: string[];
  accent: string;
}


interface PricingCardProps {
  plan: Plan;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isHovered, onHover, onLeave }) => {
  return (
    <div 
      className="relative transform transition-all duration-300 hover:scale-105"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${plan.accent}33 0%, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
          transform: 'scale(1.1)',
        }}
      />

      <div 
        className="relative h-full p-6 rounded-3xl border-0"
        style={{
          background: 'linear-gradient(145deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 100%)',
          boxShadow: isHovered 
            ? `0 0 30px ${plan.accent}33`
            : '0 0 0 1px rgba(106, 122, 56, 0.2)',
        }}
      >
        <div className="flex flex-col h-full">
          {/* Icon and Title */}
          <div className="mb-8 text-center">
            <div 
              className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${plan.accent}33, transparent)`,
              }}
            >
              {plan.icon}
            </div>
            <h3 
              className="text-3xl font-Oddiline font-bold mb-2"
              style={{ color: plan.accent }}
            >
              {plan.name}
            </h3>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center">
              <span 
                className="text-5xl font-Oddiline  font-bold"
                style={{ color: '#e5f2bf' }}
              >
                {plan.price}
              </span>
              <span 
                className="ml-2 font-Oddiline  text-lg"
                style={{ color: '#6a7a38' }}
              >
                {plan.period}
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="flex-grow">
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li 
                  key={feature}
                  className="flex items-center"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 mr-3"
                    style={{ color: plan.accent }}
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span 
                    className="text-lg"
                    style={{ color: '#e5f2bf' }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button 
            className="w-full font-Oddiline  mt-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 relative overflow-hidden"
            style={{
              background: isHovered 
                ? `linear-gradient(135deg, ${plan.accent}, ${plan.accent}aa)`
                : 'transparent',
              border: `2px solid ${plan.accent}`,
              color: isHovered ? 'black' : plan.accent,
            }}
          >
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const plans: Plan[] = [
    {
      name: 'WARRIOR',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#87a922" strokeWidth="2">
          <path d="M20 16V8l-8-4L4 8v8l8 4l8-4z" />
        </svg>
      ),
      price: '$29',
      period: 'per month',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access'
      ],
      accent: '#87a922'
    },
    {
      name: 'CHAMPION',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#6a7a38" strokeWidth="2">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
        </svg>
      ),
      price: '$49',
      period: 'per month',
      features: [
        'All Warrior features',
        'Group fitness classes',
        'Personal trainer (2x/month)',
        'Nutrition consultation',
        'Access to all locations'
      ],
      accent: '#6a7a38'
    },
    {
      name: 'LEGEND',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#e5f2bf" strokeWidth="2">
          <path d="M12 2l2.5 6.5L21 10l-4.5 5.5.5 7.5-5-3-5 3 .5-7.5L3 10l6.5-1.5L12 2z" />
        </svg>
      ),
      price: '$89',
      period: 'per month',
      features: [
        'All Champion features',
        'Unlimited personal training',
        'Premium spa access',
        'Recovery zone access',
        'Private locker',
        'Guest passes (2/month)'
      ],
      accent: '#e5f2bf'
    }
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Animated background pattern */}
      <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute transform rotate-45"
            style={{
              width: '100px',
              height: '100px',
              border: `2px solid ${plans[i % 3].accent}`,
              opacity: 0.1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite linear`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className=" text-4xl lg:text-6xl font-bold mb-6">
            <span 
              className="relative   inline-block font-Oddiline"
              style={{ 
                color: '#e5f2bf',
                textShadow: '0 0 20px rgba(135, 169, 34, 0.5)'
              }}
            >
              ELEVATE YOUR FITNESS
            </span>
          </h1>
          <p 
            className=" font-Oddiline  text-xl lg:text-2xl"
            style={{ color: '#6a7a38' }}
          >
            Choose your path to greatness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>

      <style {...{ jsx: "true", global: "true" } as any}>{`
        @keyframes float {
          0% { transform: rotate(0deg) translate(0, 0); }
          100% { transform: rotate(360deg) translate(20px, 20px); }
        }
      `}</style>
    </div>
  );
};

export default PricingPage;