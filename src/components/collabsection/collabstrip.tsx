import dymatize from '../../assets/companyLogo/Dymatize.svg';
import gnc from '../../assets/companyLogo/gnc.svg';
import myprotien from '../../assets/companyLogo/myprotien.svg';
import livestamin from '../../assets/companyLogo/livestamin.png';
import inlife from '../../assets/companyLogo/inlife.png';
import muscleblaze from '../../assets/companyLogo/MuscleBlaze.svg';

const LogoStrip = () => {
    const logos = [
        {
            url: dymatize,
            name: 'dymatizeLogo',
        },
        {
            url: gnc,
            name: 'gncLogo',
        },
        {
            url: myprotien,
            name: 'myprotienLogo',
        },
        {
            url: livestamin,
            name: 'livestaminLogo',
        },
        {
            url: inlife,
            name: 'inlifeLogo',
        },
        {
            url: muscleblaze,
            name: 'muscleblazelogo',
        },
    ];

    return (
        <div className="w-full bg-black py-8 lg:py-12">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-16"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoStrip;