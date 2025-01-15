import AnimatedBackground from "@/components/animatedbg/animatedbg";
import LogoStrip from "@/components/collabsection/collabstrip";
import ElevateSection from "@/components/elevatesection/elevateSection";
import FeatureSection from "@/components/feature/featuresSection";
import HeroSection from "@/components/herosection/herosection";
import Newsletter from "@/components/newsletter/newsletter";
import StrengthSection from "@/components/strength/strengthSection";

export default function Home() {
    const colors = ['#e5f2bf' , '#6a7a38' , '#87a922']
    return (
        <div> 
                 <AnimatedBackground colors={colors} ></AnimatedBackground>
            <div  >

             <HeroSection></HeroSection>  
            </div>
            <div>

             <LogoStrip></LogoStrip>
            </div> 

            <div>
                <FeatureSection></FeatureSection>
            </div> 

            <div>
                <StrengthSection></StrengthSection>
            </div>

            <div>
                <ElevateSection></ElevateSection>
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    )
}