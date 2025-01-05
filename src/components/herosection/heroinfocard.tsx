import { animate, easeInOut,   } from 'motion';
import { easeOut, motion } from "motion/react"
import React from 'react';

interface BoxComponentProps {
  icon: React.ReactNode;
  text: string;
  number: number;
  className?: string;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ icon, text, number , className }) => {

  const variants = {
    initial: {
      opacity: 0, 
    },
    animate: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        opacity: {
          delay: 2, 
          duration: 0.5, 
          ease: easeOut
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: easeInOut,
        },
      },
    },
  };
  return ( 
    
       <motion.div variants={variants} initial="initial" animate="animate"  className={`text-white relative lg:w-28 bg-gradient-to-b from-green-100 to-transparent p-3 rounded-3xl shadow-md flex flex-col items-center ${className}`}>
     
      <div className="absolute inset-0 rounded-3xl  bg-gradient-to-b from-green-100 to-transparent -z-10" />

    
      <div className="w-full max-w-[150px] lg:mb-4 flex justify-center">
        {icon}
      </div>

      <div className="text-center lg:mb-4">
        <p className="font-medium ">{text}</p>
      </div> 

    
      <div className="flex flex-col text-xl font-bold  items-center">
        {number}
      </div>
    </motion.div>
  );
};

export default BoxComponent;

