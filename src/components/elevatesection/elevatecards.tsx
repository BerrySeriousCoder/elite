import barbell from '../../assets/elevate/Barbell.jpg'
import kettlebell from '../../assets/elevate/kettlebell.jpg'
import cardio from '../../assets/elevate/cardio.jpg'
import hypertrophy from '../../assets/elevate/hypertrophy.jpg'
import ropeclimbing from '../../assets/elevate/ropeclimbing.jpg'
import trxsuspension from '../../assets/elevate/trxsuspension.jpg'
import {motion} from 'framer-motion'

const carddata = [
    {
        image : barbell ,
        text : 'Barbell Basics'
    },
    {
        image :  kettlebell ,
        text : 'Kettlebell Masterclass'
    },
    {
        image :  cardio,
        text : 'Cardio Power Boost'
    },
    {
        image :  hypertrophy,
        text : 'Hypertrophy'
    },
    {
        image :  ropeclimbing,
        text : 'Rope Climbing'
    },
    {
        image : trxsuspension ,
        text : 'TRX Suspension'
    }
]


export default function ElevateCards() {
    return (
        <div className='flex flex-wrap justify-between lg:gap-36' >   



            {carddata.map((data,index) => (
                <ElevateCard  key={index} data={data} ></ElevateCard>
            ))}
              
        </div>
    )
}

interface ElevateCardProp { 
    data : {
        image : string ,
        text : string
    }
   
}


const ElevateCard = ({ data }: ElevateCardProp) => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col w-[160px] sm:w-[200px] md:w-[300px] lg:w-[400px] mb-8">
            {/* Image Container */}
            <div className="w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] paper-cut-10 bg-[#87a922] rounded-tl-2xl rounded-br-2xl rounded-tr-3xl rounded-bl-lg overflow-hidden">
                <div className="w-full h-full paper-cut-20 overflow-hidden">
                    <img
                        className="w-full grayscale-img h-full object-cover rounded-tl-3xl hover:scale-105 grayscale hover:grayscale-0 hover:opacity-90 transition-all rounded-br-2xl rounded-tr-3xl rounded-bl-lg"
                        src={data.image}
                        alt="cardImage"
                    />
                </div>
            </div>
            {/* Text Container */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl p-2 lg:p-3 font-GrillMaster flex justify-center text-center text-[#87a922]">
                {data.text}
            </div>
        </motion.div>
    );
}