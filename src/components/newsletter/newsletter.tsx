import { TextField } from "@mui/material";
import ShinyButton from "../ui/shiny-button";

export default function Newsletter() {
    return (
        <div className="px-4 lg:px-32 py-10 lg:py-20">
            <div className="rounded-2xl lg:h-96 bg-[#87a922] flex flex-col justify-center items-center gap-6 lg:gap-12 p-6 lg:p-0">
                {/* Heading */}
                <div className="font-GrillMaster text-4xl lg:text-9xl text-center">
                    CONNECT ENGAGE TRANSFORM
                </div>

                {/* Description */}
                <div className="text-white text-center text-sm lg:text-base">
                    Join A Vibrant Community For Fuel Motivation, Engagement Drives Progress, And Transformation
                </div>

                {/* Email Input and Button */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full lg:w-auto">
                    <TextField
                        sx={{ backgroundColor: 'white', width: '100%', lg: 'auto' }}
                        id="outlined-basic"
                        label="Your email"
                        variant="outlined"
                    />
                    <ShinyButton className="bg-black w-full lg:w-auto">
                        <div className="text-white">Join Now</div>
                    </ShinyButton>
                </div>
            </div>
        </div>
    );
}