interface TaglineProp {
    data: {
        main: string;
        maintwo: string;
        semitagline: string;
    };
}

export default function Tagline({ data }: TaglineProp) {
    return (
        <div className="flex flex-col justify-center items-center py-16 lg:py-32 px-1 lg:px-0">
            {/* Main Tagline */}
            <div className="text-white text-3xl sm:text-5xl lg:text-8xl text-center">
                {data.main} <br />{" "}
                <span className="text-[#6a7a38]">{data.maintwo}</span>
            </div>

            {/* Semi Tagline */}
            <div className="text-gray-400 text-sm sm:text-base lg:text-lg py-2 lg:py-4 text-center">
                {data.semitagline}
            </div>
        </div>
    );
}