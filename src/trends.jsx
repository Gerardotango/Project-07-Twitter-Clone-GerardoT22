export default function Trend() {
   return (
        <div className="right-sidebar">
                <div className="trend">
                  <div className="cont1">
                     <Ekity img="src/images/search.svg"/>
                  </div>
                  <div className="cont2">
                     <Ekity2  img="src/images/settings.svg"/>
                     <Gauche1 img="src/images/More-2.svg"/>
                     <Gauche1 img="src/images/More-2.svg"/>
                     <Gauche1 img="src/images/More-2.svg"/>
                     <Gauche1 img="src/images/More-2.svg"/>
                     <Cont_down/>
                  </div>
                  <div className="cont3">
                        <Conttitle/>
                        
                         <Eki_bed img="src/images/time.svg" texte1="The New York Times " text2="@nytimes" img2="src/images/Group.svg"/>
                        <Eki_bed img="src/images/cnn.svg" texte1="CNN" text2="@CNN" img2="src/images/Group.svg"/>
                        <Eki_bed img="src/images/twitter.svg" texte1="Twitter" text2="@Twitter" img2="src/images/Group.svg"/>
                         
                        <Showmore/>
                  </div>
                </div>
        </div>
   )
}
function Ekity({img}) {
   return (
      <div className="ekity">
         <img src={img} alt="" />
         <input className="input-search" type="text" placeholder="search" />
      </div>
   )
}
function Ekity2({img}) {
   return (
      <div className="ekity2">
         <h4>Trends for you</h4>
         <img src={img} alt="" />
      </div>
   )
}

function Gauche1({img}) {
   return (
      <div className="ekity2">
         
         <div className="Gauche1">
         
        <h5 className="tweet-title-details">Trending in Turkey</h5>
        <h5>#SQUID</h5>
        <h5 className="tweet-title-details">2,066 Tweets</h5>
        
        </div>
        <img src={img} alt="" />
        
      </div>
   )
}
function Cont_down({text}) {
   return (
      <div className="ekity">
         <h4>Show more</h4>
      </div>
   )
}
function Conttitle() {
   return (
      <div className="cont-title">
         <h3>Who to follow</h3>
      </div>
   )
}

function Eki_bed({img,img2,texte1,text2}) {
   return (
      <div className="eki-bd">
         <div className="ekity3">
         
            <div className="Gauche1">
               <img src={img} alt="" />
            </div>
           <div className="mol">
             <div className="in-cont-2">
                <h5> {texte1} </h5>
                <h5> {text2} </h5>
             </div>
             <div className="Gauche1">
                <img src={img2} alt="" srcset="" />
             </div>
             
           </div>
           <div className="b-droite">
              <button className="follow">follow</button>
       </div>
          </div>
         
       </div>
      
      
   )
}

function Showmore() {
   return (
      <div className="cont-title-down">
         <h4>Show more</h4>
      </div>
   )
}

// function Ekity3({}) {
//    return (

//    )
// }