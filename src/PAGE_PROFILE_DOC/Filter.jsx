import { useContext } from "react";
import { useSearchParams } from "react-router-dom"
import { Mycontexte } from "../components/Mycontexte";

function Filter_data() {
    const [seachParams] = useSearchParams();
    const Bigdata = useContext(Mycontexte)
    const dataparams = Object.fromEntries(...seachParams);
const tweetUser = Bigdata.filter((twitts) => twitts.profile === dataparams.profile)
    return (
        <div className="container_profil_edit">
        <div className="profil">
            <img src={dataparams.profile} alt="profile" />
        </div>
        <div className="edit">
             <h4>Edit profil</h4>
        </div>
   </div>
    )
}

export default Filter_data;