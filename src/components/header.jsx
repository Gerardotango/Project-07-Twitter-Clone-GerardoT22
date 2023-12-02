import React from "react";



function Pagetitle({text}) {
   
   return (
    
         <h1 className="page-title">{text}</h1>  
    
   )
   
}

function Toptweets({icone}) {
    return (

        <div className="top-tweets">
         <img src= {icone} alt=""/>
    </div>
    )
}

function Header() {
    
    return (
        <div className="header">
          <Pagetitle text="Home"/>
          <Toptweets  icone="src/images/etoile.svg"/>
        </div>
    )

    
}
export default Header 



 