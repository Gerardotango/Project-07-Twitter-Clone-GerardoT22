 import Home from "./pages/home.jsx";
// import Page_profil from "./pageprofil.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./sidebar.jsx";
import Trend from "./trends.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
     
     <Sidebar/>
     {/* <Page_profil/> */}
     <Home/>
     <Trend/>
     
     
     
     
       
      
      
      

      

    </Layout>
  );
}
