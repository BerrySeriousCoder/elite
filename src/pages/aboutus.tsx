import  { useState, useEffect, FC, ReactNode } from 'react';
import { 
  ArrowRight, Users, Calendar, Award, Clock, Zap, Dumbbell ,LucideIcon 
} from 'lucide-react';

import gymone from '../assets/gymimage/gymone.jpg'
import gymtwo from '../assets/gymimage/gymtwo.jpg'
import gymthree from '../assets/gymimage/gymthree.jpg'
import gymfour from '../assets/gymimage/gymfour.jpg'
import AnimatedBackground from '@/components/animatedbg/animatedbg';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

interface Feature {
  icon:  LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
    >
      {children}
    </div>
  );
};

const AboutUs: FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features: Feature[] = [
    { 
      icon: Users, 
      title: "Community First", 
      description: "Join a passionate community of fitness enthusiasts" 
    },
    { 
      icon: Award, 
      title: "Expert Training", 
      description: "Learn from certified professional trainers" 
    },
    { 
      icon: Calendar, 
      title: "Flexible Schedule", 
      description: "Multiple class times to fit your busy lifestyle" 
    },
    { 
      icon: Clock, 
      title: "24/7 Access", 
      description: "Train any time, day or night" 
    },
    { 
      icon: Zap, 
      title: "Modern Equipment", 
      description: "State-of-the-art machines and free weights" 
    },
    { 
      icon: Dumbbell, 
      title: "Custom Programs", 
      description: "Personalized workout plans for your goals" 
    }
  ];

  const stats: Stat[] = [
    { number: '5000+', label: 'Active Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '100+', label: 'Weekly Classes' }
  ];

  type ImageGridItemProps = {
    height: string;
    imagePath: string;
    alt: string;
  };

  const ImageGridItem: FC<ImageGridItemProps> = ({ height, imagePath, alt }) => (
    <div className={`${height} rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500`}>
      <img src={imagePath} alt={alt} className="w-full h-full object-cover" />
    </div>
  );

  return (
    <div className="bg-black min-h-screen py-16 overflow-hidden">
      <AnimatedBackground colors={['#87a922']} ></AnimatedBackground>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-6xl font-Oddiline font-bold mb-6 bg-gradient-to-r from-[#87a922] to-[#e5f2bf] bg-clip-text text-transparent">
              TRANSFORM YOUR LIFE
            </h1>
            <p className="text-[#e5f2bf] font-Oddiline text-xl max-w-2xl mx-auto">
              Where passion meets performance. Your journey to greatness starts here.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Grid */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageGridItem 
                  height="h-64"
                  imagePath={gymone}
                  alt="Gym 1"
                />
                <ImageGridItem 
                  height="h-40"
                  imagePath={gymtwo}
                  alt="Gym 2"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageGridItem 
                  height="h-40"
                  imagePath={gymthree}
                  alt="Gym 3"
                />
                <ImageGridItem 
                  height="h-64"
                  imagePath={gymfour}
                  alt="Gym 4"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="text-4xl font-Oddiline font-bold" style={{ color: '#87a922' }}>
                More Than Just A Gym
              </h2>
              <div className="space-y-4 text-[#e5f2bf]">
                <p className="font-Oddiline text-lg">
                  Since 2010, we've been redefining fitness excellence. Our mission is to help you achieve your peak performance through expert guidance, cutting-edge equipment, and unwavering support.
                </p>
                <p className=" font-Oddiline text-lg">
                  Whether you're a beginner or an athlete, we provide the perfect environment for your fitness journey.
                </p>
              </div>
              <button
                className="group flex items-center space-x-2 bg-[#87a922] text-black px-8 py-4 rounded-lg font-semibold 
                           transform hover:translate-x-2 transition-all duration-300 hover:shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className="p-6 rounded-xl transition-all duration-300 cursor-pointer"
                style={{ 
                  backgroundColor: hoveredCard === index ? '#87a922' : 'rgba(135, 169, 34, 0.1)',
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <feature.icon 
                  className="w-12 h-12 mb-4"
                  style={{ color: hoveredCard === index ? 'black' : '#87a922' }}
                />
                <h3 
                  className="text-xl font-Oddiline font-bold mb-2"
                  style={{ color: hoveredCard === index ? 'black' : '#87a922' }}
                >
                  {feature.title}
                </h3>
                <p className='font-Oddiline' style={{ color: hoveredCard === index ? 'black' : '#e5f2bf' }}>
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-gradient-to-b from-[rgba(135,169,34,0.2)] to-transparent"
              >
                <h3 className="text-5xl font-bold mb-2" style={{ color: '#87a922' }}>
                  {stat.number}
                </h3>
                <p className="text-lg font-Oddiline" style={{ color: '#e5f2bf' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default AboutUs;