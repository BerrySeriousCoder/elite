import { TextField } from "@mui/material";
import ShinyButton from "../ui/shiny-button";
import { motion } from "framer-motion";

export default function Newsletter() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 lg:px-32 py-10 lg:py-20"
        >
            <div className="rounded-2xl lg:h-96 bg-[#87a922] flex flex-col justify-center items-center gap-6 lg:gap-12 p-6 lg:p-0">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="font-GrillMaster text-4xl lg:text-9xl text-center"
                >
                    CONNECT ENGAGE TRANSFORM
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-white text-center text-sm lg:text-base"
                >
                    Join A Vibrant Community For Fuel Motivation, Engagement Drives Progress, And Transformation
                </motion.div>

                {/* Email Input and Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full lg:w-auto"
                >
                    <TextField
                        sx={{ backgroundColor: 'white', width: '100%', lg: 'auto' }}
                        id="outlined-basic"
                        label="Your email"
                        variant="outlined"
                    />
                    <ShinyButton className="bg-black w-full lg:w-auto">
                        <div className="text-white">Join Now</div>
                    </ShinyButton>
                </motion.div>
            </div>
        </motion.div>
    );
}