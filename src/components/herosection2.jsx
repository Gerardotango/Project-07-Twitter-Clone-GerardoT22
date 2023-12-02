import React from "react";

function Herosection2() {
    return (
        <div className="tweets">
         <Tweet_one/>
         <Tweet_two/>
         <Tweet_Three/>
         <Tweet_Four/>
         <Tweet_Five/>
        
        </div>
    )
}
export default Herosection2;

// le premier container 9
function Tweet_one() {
    return (
       <div className="tweet">
        <div className="tweet-avatar">
        <Logo logo="src/images/cnn.svg" />
         
       </div>

       <div className="tweet-content">
            <div className="tweet-body">
         <Tweet_title titre="The New York Times" icone="src/images/Group.svg" details="@Twitter . Oct 29" />
         
           <Ecrit write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio rem explicabo! Praesentium itaque cum at animi asperiores , ad deleniti consectetur quas. " />
           
           </div>
           {/* <div className="tweet-actions">
           <Tweet_Actions/>
           </div> */}
         </div>
        
       </div>
    )
}

// le deuxième  container 9
function Tweet_two() {
    return (
       <div className="tweet">
         <Tweet_Avatar/>
         <Tweet_Content/>
       </div>
    )
}

// troisième container 9
function Tweet_Three() {
    return (
        <div className="tweet">

<div className="tweet-avatar">
        <Logo logo="src/images/twitter.svg" />
         
       </div>

       <div className="tweet-content">
            <div className="tweet-body">
         <Tweet_title titre="The New York Times" icone="src/images/Group.svg" details="@Twitter . Oct 29" />
         
           <Ecrit write="BIG NEWS lol jk still Twitter " />
           
           </div>
           <div className="tweet-actions">
           <Tweet_Actions/>
           </div>
         </div>

        </div>
    )
}

// Quatrième container 9
function Tweet_Four() {
    return (
        <div className="tweet">

<div className="tweet-avatar">
        <Logo logo="src/images/twitter.svg" />
         
       </div>

       <div className="tweet-content">
            <div className="tweet-body">
         <Tweet_title titre="The New York Times" icone="src/images/Group.svg" details="@Twitter . Oct 29" />
         
           <Ecrit write="BIG NEWS lol jk still Twitter " />
           
           </div>
           <div className="tweet-actions">
           <Tweet_Actions/>
           </div>
         </div>

        </div>
    )
}

// cinquième  container 9
function Tweet_Five() {
    return (
        <div className="tweet">

<div className="tweet-avatar">
        <Logo logo="src/images/twitter.svg" />
         
       </div>
              <div className="tweet-content">
            <div className="tweet-body">
         <Tweet_title titre="The New York Times" icone="src/images/Group.svg" details="@Twitter . Oct 29" />
         
           <Ecrit write="BIG NEWS lol jk still Twitter " />
           
           </div>
           <div className="tweet-actions">
           <Tweet_Actions/>
           </div>
         </div>
         
        </div>
    )
}



// container 10 in 9
function Tweet_Avatar() {
    return (
       <div className="tweet-avatar">
        <Logo logo="src/images/twetIcone.png" />
         
       </div>
    )
}
// container 11 in 9
function Tweet_Content() {
    return (
       <div className="tweet-content">
         <Tweet_body/>
         <Tweet_Actions/>
         
         
       </div>
    )
}
// container 12 in 11
function Tweet_body() {
    return (
        <div className="tweet-body">
        <Tweet_title titre="The New York Times" icone="src/images/Group.svg" details="@kajibwami . 2h" />
        <Tweet_title text="" />
        <Ecrit write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio rem explicabo! Praesentium itaque cum at animi asperiores , ad deleniti consectetur quas." />
         <Tweet_Image/>             
        </div>
    )
}
// container 13 in 11
function Tweet_Actions() {
    return (
        <div className="tweet-actions">
            <Action picone="src/images/Reply.svg" written="19" />
            <Action picone="src/images/Retweet.svg" written="48" />
            <Action picone="src/images/like.svg" written="482" />
            <Action picone="src/images/Downlord.svg" />
        </div>
    )
}


// container 14 in 12
function Tweet_title({ titre , icone , details , text}) {
    return (
        <div className="tweet-title">
     <h4 className="tweet-title-author"> {titre} </h4>
      
      
      <img className="tweet-title svg" src={icone} alt="" />
      <p className="tweet-title-details"> {details} </p>
      {/* <p className="tweet-text"> {text} </p> */}
        </div>
    )
}




// container 16
function Tweet_Image() {
    return (
        <div className="tweet-image">
           <BigImage img="src/images/tweet-image.png" />
        </div>
    )
}

// les contenues

function Logo({logo}) {
    return (
        <img className="tweet-avatar img" src={logo} alt="" />
    )
}

function Ecrit({write}) {
    return (
        <p className="tweet-text"> {write} </p>
    )
}


function Action({picone , written}) {
    return (
        <div className="tweet-action">
            <img className="tweet-action svg" src={picone} alt="" />
            <p> {written} </p>
        </div>
    )
}

function BigImage({img}) {
    return (
        <img className="tweet-image img" src={img} alt=""  />
    )
}
