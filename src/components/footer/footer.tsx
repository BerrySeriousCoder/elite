import Logo from '../../assets/elite-primary-logo.png';

export default function Footer() {
    return (
        <div className="bg-[#87a922]/10 flex flex-col lg:flex-row justify-between items-center h-auto lg:h-72 px-8 lg:px-32 py-10 lg:py-0">
            <div className="flex flex-col gap-6 lg:gap-10 items-center lg:items-start">
                <div>
                    <img className="h-12 lg:h-16" src={Logo} alt="logo" />
                </div>
                <div className='text-white font-Oddiline text-center lg:text-left'>
                    Your Go-To Personalized<br />Workouts, Meal Plans, And <br />Expert Fitness Advice
                </div>
            </div>
            <div className='flex flex-col gap-6 lg:gap-3 mt-10 lg:mt-0 items-center lg:items-start'>
                <div className='text-[#87a922] font-GrillMaster text-4xl lg:text-5xl'>
                    Contact 
                </div>
                <div className='flex flex-col gap-2 text-white text-center lg:text-left'>
                    <div>
                        Monday-Sunday
                    </div>
                    <div>
                        8:00 AM-5:00 PM 
                    </div>
                    <div>
                        E-mail
                    </div>
                    <div>
                        Elite@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}