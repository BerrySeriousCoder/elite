import { easeOut, motion } from "motion/react"


interface HorizontalWordsProp {
    words : string
  }
  
  export const HorizontalWords:React.FC<HorizontalWordsProp> = ({words}) => {
    const phrase = words.split("")
    return (
      <div className="flex flex-col lg:gap-8 gap-4 text-lg lg:text-2xl  font-thin text-white" >
      {phrase.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  
    )
  }