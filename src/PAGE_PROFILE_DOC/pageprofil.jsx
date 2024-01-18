//  import { Tweet_Avatar } from "./components/herosection2";

//  import { Ecrit, Tweet_Avatar, Tweet_title } from "../components/herosection2"
//  import { Eki_bed } from "../trends"
import Info_date from "./Info_date"
import Name_profil from "./Name_profil"
import Navigate from "./Navigate"
import Section_two from "./Page_profile_three"
import Section from "./Page_profile_two"
import Profileheader from "./Profile_header"
import Cont_abonnement from "./cont_abonnement"
import Section_three from "./cont_profile_edit"





export default function Page_profil() {
    return (
            <div className="timeline">
              <Profileheader/>
              <Section/>
              <Section_two/>
              <Section_three/>
              <Name_profil/>
              <Info_date/>
              <Cont_abonnement/>
              <Navigate/>
            </div>
    )
}
 

