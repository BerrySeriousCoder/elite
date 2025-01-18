import { motion } from "framer-motion";

interface TaglineProp {
    data: {
        main: string;
        maintwo: string;
        semitagline: string;
    };
}

export default function Tagline({ data }: TaglineProp) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center py-16 lg:py-32 px-1 lg:px-0"
        >
            {/* Main Tagline */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white text-3xl sm:text-5xl lg:text-8xl text-center"
            >
                {data.main} <br />{" "}
                <span className="text-[#6a7a38]">{data.maintwo}</span>
            </motion.div>

            {/* Semi Tagline */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm sm:text-base lg:text-lg py-2 lg:py-4 text-center"
            >
                {data.semitagline}
            </motion.div>
        </motion.div>
    );
}