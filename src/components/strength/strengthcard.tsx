import React, { useState, useEffect } from 'react';
import { MagicCard } from '../ui/magic-card';
import ShinyButton from '../ui/shiny-button';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'; // Import icons for navigation

const cardData = [
    {
        icon: <FitnessCenterIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922', fontSize: '40px' }} />,
        title: 'Strength Training',
        description: 'Build muscle and increase strength with our expert-led weightlifting and resistance training programs.'
    },
    {
        icon: <PoolIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922', fontSize: '40px' }} />,
        title: 'Swimming Sessions',
        description: 'Improve your flexibility and cardiovascular health with our guided swimming workouts in our state-of-the-art pool.'
    },
    {
        icon: <DirectionsRunIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922', fontSize: '40px' }} />,
        title: 'Running Club',
        description: 'Join our community of runners and enhance your stamina and speed with tailored running programs.'
    },
    {
        icon: <SelfImprovementIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922', fontSize: '40px' }} />,
        title: 'Yoga Classes',
        description: 'Find your inner peace and improve your flexibility with our relaxing and rejuvenating yoga sessions.'
    },
    {
        icon: <LocalDiningIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922', fontSize: '40px' }} />,
        title: 'Nutrition Planning',
        description: 'Optimize your diet with personalized nutrition plans designed to complement your fitness goals.'
    }
];

export default function StrengthCard() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-change cards every 5 seconds (mobile only)
    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Check if mobile view
        if (isMobile) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
            }, 5000); // Change card every 5 seconds

            return () => clearInterval(interval); // Cleanup interval on unmount
        }
    }, []);

    // Manual navigation functions
    const goToNextCard = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    };

    const goToPreviousCard = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    };

    return (
        <div>
            {/* Desktop View - Render all cards */}
            <div className='hidden md:flex overflow-x-scroll no-scrollbar gap-16 p-4'>
            {cardData.map((data,index) => (
                <div key={index} >

                  <MagicCard  gradientColor={"#262626"} className='text-white bg-[#87a922]/10 ' ><InsideElements carddata={data} ></InsideElements></MagicCard> 
                </div>
              ))}
            </div>

            {/* Mobile View - Render one card at a time */}
            <div className='md:hidden relative flex items-center justify-center'>
                {/* Left Navigation Button */}
                <button
                    onClick={goToPreviousCard}
                    className='absolute left-0 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70'
                >
                    <ChevronLeft fontSize='large' />
                </button>

                {/* Active Card */}
                <div className='w-full flex justify-center'>
                    <div className='w-[300px] transition-transform duration-500 ease-in-out'>
                        <MagicCard gradientColor={"#262626"} className='text-white bg-[#87a922]/10'>
                            <InsideElements carddata={cardData[activeIndex]} />
                        </MagicCard>
                    </div>
                </div>

                {/* Right Navigation Button */}
                <button
                    onClick={goToNextCard}
                    className='absolute right-0 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70'
                >
                    <ChevronRight fontSize='large' />
                </button>
            </div>
        </div>
    );
}

interface CardData {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface InsideElementsProps {
    carddata: CardData;
}

const InsideElements: React.FC<InsideElementsProps> = ({ carddata }) => {
    return (
        <div className='p-6 flex flex-col justify-between h-full'>
            <div className='flex items-center gap-4'>
                <div className='rounded-full bg-black'>{carddata.icon}</div>
                <div className='text-2xl font-GrillMaster'>{carddata.title}</div>
            </div>
            <div className='p-2 text-sm lg:text-base'>{carddata.description}</div>
            <div className='flex justify-end'>
                <ShinyButton className='bg-[#87a922]'>
                    <div className='text-white'>See Plan</div>
                </ShinyButton>
            </div>
        </div>
    );
};