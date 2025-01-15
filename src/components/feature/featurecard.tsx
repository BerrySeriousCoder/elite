import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import featureImage from '../../assets/featuregym.png';

const featureData = [
    {
        icon: <EnergySavingsLeafIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922' }} />,
        text: 'Nutrition Guidance',
    },
    {
        icon: <SportsGymnasticsIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922' }} />,
        text: 'Expert Trainers',
    },
    {
        icon: <AutoModeIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922' }} />,
        text: 'Progress Tracking',
    },
    {
        icon: <WorkspacePremiumIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922' }} />,
        text: 'Premium Membership',
    },
    {
        icon: <PeopleIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922' }} />,
        text: 'Community Support',
    },
    {
        icon: <FitnessCenterIcon sx={{ borderRadius: '100%', color: '#87a922', borderColor: '#87a922' }} />,
        text: 'Next Level Fitness Spaces',
    },
];

export default function FeatureCard() {
    return (
        <div className="rounded-xl mx-4 lg:mx-72 my-10 lg:my-0 lg:h-80 bg-[#87a922]/10 flex flex-col lg:flex-row items-center justify-between  lg:p-24">
            {/* Feature List */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-2 lg:p-0 lg:gap-8 w-full lg:w-auto">
                {featureData.map((data, index) => (
                    <div key={index} className="flex gap-3 items-center">
                        <div className="rounded-full border-[#87a922] border-2 p-1">
                            {data.icon}
                        </div>
                        <div className="text-white font-GrillMaster text-xl lg:text-3xl">
                            {data.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Feature Image */}
            <div className=" lg:mt-0 lg:ml-8">
                <img className="h-72 lg:h-80 w-auto" src={featureImage} alt="Feature Gym" />
            </div>
        </div>
    );
}