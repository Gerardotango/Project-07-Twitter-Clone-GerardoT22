//  import Home from "./pages/home.jsx";
//  import Page_profil from "./pageprofil.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./SIDEBAR_DOC/sidebar.jsx";
import Trend from "./trends.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
     
     <Sidebar/>
     
     <Trend/>

    </Layout>
  );
}
