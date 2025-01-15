import Tagline from "../taglinecom/tagline"
import ElevateCards from "./elevatecards"


export default function ElevateSection() { 

    const elevateTagline  = {
        main : 'Train Yourself',
        maintwo : 'Unleash Your Potential' ,
        semitagline : 'Unlock Your full Potential With Our Expertly Designed Course, Tailered To Help You Maximize The Result'
    }
    return (
        <div>
              
               <Tagline data={elevateTagline}></Tagline> 

               <div className="p-2 lg:px-36 flex justify-center w-full items-center " >
                <ElevateCards></ElevateCards>
               </div>
                     
        </div>
    )
}