import BoxComponent from "./heroinfocard";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {motion} from 'motion/react'
import { HorizontalWords } from "./horizontalword";
import InteractiveHoverButton from "../ui/interactive-hover-button";
export default function HeroSection() {
    return (

        <div className="relative w-full h-full" >
               
                <motion.div initial={{y:100,opacity:0}} animate={{ y: 0 , opacity : 1 }} transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }} className="relative z-0 flex justify-center items-center">
                          <span className="font-Oddiline  text-[#e5f2bf] text-2xl mt-8 lg:mt-0 lg:text-[150px] text-center leading-[1.1] tracking-wide font-bold">
                            Sculpt <span className="text-[#6a7a38]">Your</span>  Body,<br className="leading-[0]" />Elevate <span className="text-[#6a7a38]">Your</span>  Spirit
                          </span>
                </motion.div>

       
        <motion.div
      className="bg-[url('/src/assets/herobg.png')] bg-cover bg-center h-screen w-full absolute z-20 -top-16 lg:top-0 left-0"
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.9, ease: 'easeOut' }} 
    >
    </motion.div>  
    <div className="absolute  left-5 lg:left-10" >
          <HorizontalWords words="GRIT" ></HorizontalWords>
    </div>
    <div className="absolute right-5 lg:right-10" >
          <HorizontalWords words="GAIN" ></HorizontalWords>
    </div>
        <div className="rotate-[25deg] absolute  right-0 top-[470px] z-20 lg:z-0 lg:right-36 lg:top-10  scale-75 lg:scale-100" >

           <BoxComponent  icon={<AccessTimeFilledIcon sx={{ color: '#87a922', fontSize: '3rem' }} ></AccessTimeFilledIcon>} text={"Hours"} number={1.5}></BoxComponent>
        </div>
        <div className="-rotate-[25deg] absolute left-0 top-[470px] z-20 lg:z-0 lg:left-40 lg:top-10 scale-75 lg:scale-100" >

           <BoxComponent  icon={<LocalFireDepartmentIcon sx={{ color: '#87a922', fontSize: '3rem' }} ></LocalFireDepartmentIcon>} text={"Kcal"} number={550}></BoxComponent>
        </div>
        <div className="rotate-[10deg] absolute right-5 lg:right-96 -bottom-52 lg:-bottom-96 scale-50 lg:scale-100 " >

           <BoxComponent  icon={<FitnessCenterIcon sx={{ color: '#87a922', fontSize: '3rem' }} ></FitnessCenterIcon>} text={"Hours"} number={1.5}></BoxComponent>
        </div>
        <div className="-rotate-[10deg] absolute left-5 lg:left-96 -bottom-52 lg:-bottom-96 scale-50 lg:scale-100 " >

           <BoxComponent  icon={<FitnessCenterIcon sx={{ color: '#87a922', fontSize: '3rem' }} ></FitnessCenterIcon>} text={"Hours"} number={1.5}></BoxComponent>
        </div >
        <motion.div initial={{y:100, opacity:0}} animate={{y:0 , opacity:1}}  transition={{ duration: 0.9, delay: 1.5, ease: "easeOut" }} className="absolute z-30 right-16 -bottom-96 hidden lg:block " >

        <InteractiveHoverButton className="w-44 h-14 " text="Let's Start" ></InteractiveHoverButton>
        </motion.div>
        </div> 

        
    )
}