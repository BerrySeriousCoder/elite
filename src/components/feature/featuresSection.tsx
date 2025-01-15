import Tagline from "../taglinecom/tagline";
import FeatureCard from "./featurecard";


export default function FeatureSection() {

  const featureTaglines = {
    main : 'Inspired to' ,
    maintwo : 'Inspire Your Best Self' ,
    semitagline : 'We Are Your Partner In Achieving A Heathier, Stronger And More Confident You'
  } 
    return (
        <div>
                  <div>
                    <Tagline data={featureTaglines} ></Tagline>
                    <FeatureCard></FeatureCard>
                  </div>
        </div>
    )
}