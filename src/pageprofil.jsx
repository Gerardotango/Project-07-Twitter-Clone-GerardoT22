// import { Tweet_Avatar } from "./components/herosection2";

import { Tweet_Avatar } from "./components/herosection2"
import { BigImage } from "./components/herosection2"


export default function Page_profil() {
    return (
            <main className="timeline">
             
            <Hederoo/>
            <Tweetoo/>
    
     

    </main>
    )
}
 

function Hederoo() {
    return (
        <div className="headeroo">
            <h1>uuuu</h1>
        </div>
    )

}

function Tweetoo() {
    return (
        <div className="tweetoo">
            <div className="tweetard">
                   <BigImage img="src/images/tweet-image.png"/>
            </div>
            <div className="tweetar">
                <Tweet_Avatar/>
            </div>
        </div>
    )

}
