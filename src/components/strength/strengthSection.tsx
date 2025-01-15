import Tagline from "../taglinecom/tagline";
import StrengthCard from "./strengthcard";

export default function StrengthSection() {

    const strengthTaglines = {
        main : 'Discover' ,
        maintwo : 'What Sets Us Apart' ,
        semitagline : "We Deliver A Fitness Experience That's Truly-One-Of-A-Kind.Explore How We Help You Achieve Your Goals Faster And Smarter"
    }
    return (
        <div>
            <Tagline data={strengthTaglines} ></Tagline>
              <div className="lg:px-40"  >

            <StrengthCard></StrengthCard>
              </div>
        </div>
    )
}