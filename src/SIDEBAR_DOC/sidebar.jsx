import { Link } from "react-router-dom";
import Button from "../components/ButtonBlue";
import { Bird } from "./bird";
import { Containereight } from "./containereight";
import { Containerfive } from "./containerfive";
import { Containerfour } from "./containerfour";
import { Containernine } from "./containernine";
import { Containerseven } from "./containerseven";
import { Containersix } from "./containersix";
import { Containertree } from "./containertree";
import { Containertwo } from "./containertwo";
import { Profone } from "./profone";
import Proftree from "./proftree";
import Proftwo from "./proftwo";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Page_profil from "../PAGE_PROFILE_DOC/pageprofil";
import Home from "../pages/home";


function Sidebar() {
    return (
      <BrowserRouter>
       <div className="Sidebar">
        <div className="Allnav">
          <Link to='/boug'> <Bird/> </Link>
          <Link style={{textDecorationLine:'none', color:'white'}} to='/'> <Containertwo/> </Link>
          
          <Containertree/>
          <Containerfour/>
          <Containerfive/>
          <Containersix/>
          <Containerseven/>
          <Link style={{textDecorationLine:'none', color:'white'}} to='/profile'> <Containereight/> </Link>
          
          <Containernine/>
          <Button style="button" />
        </div>
        <div className="Profil">
            <Profone/>
            <Proftwo/>
            <Proftree/>
        </div>
       </div>
       <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/profile" Component={Page_profil}/>
        <Route path="/avatar" Component={Page_profil}/>
       </Routes>

       </BrowserRouter>
    )
}
export default Sidebar;



