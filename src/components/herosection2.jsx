import React from "react";
import { useState } from "react";

function Herosection2() {


  return (
    <div className="tweets">
      {data.map(tweets =>
        <Tweet_one
          img={tweets.profile}
          titre={tweets.tweetTitle}
          icone={tweets.iconeTitle}
          details={tweets.pseudo}
          write={tweets.texte}
          imagepost={tweets.postimage}
          // picone1={tweets.Reply}
          written1={tweets.comment}
          // picone2={tweets.Retweet}
          written2={tweets.retweet}
          // picone3={tweets.Like}
          written3={tweets.like}
          picone4={tweets.Downlord}
        />)}

    </div>
  )
}


// le premier container 9
function Tweet_one({ img, titre, icone, details, write, imagepost, picone1, picone2, picone3, picone4, written1, written2, written3 }) {
  
  const [icon, setIcon] = useState(false)
  const [count, setCount] = useState(written3);
  

  const handlClick = () => {
    if (!icon ) {
      setCount(count + 1)
      
    } else {
      setCount(count - 1)
      
    }
    return (
      setIcon(!icon)
    )

  }


  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img className="tweet-avatar img" src={img} alt="" />
      </div>

      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <h4 className="tweet-title-author"> {titre} </h4>
            <img className="tweet-title svg" src={icone} alt="" />
            <p className="tweet-title-details"> {details} </p>
          </div>
          <p className="tweet-text"> {write} </p>
          <div className="tweet-image">
            <img className="" src={imagepost} alt="" />
          </div>
        </div>
        <div className="tweet-actions">
          <div className="tweet-action">

            <div className="controle1">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M11.705 1.86835L8.24834 1.86002H8.24667C4.60167 1.86002 1.74667 4.71585 1.74667 8.36168C1.74667 11.7767 4.40167 14.3667 7.96751 14.5033V17.6933C7.96751 17.7833 8.00417 17.9317 8.06751 18.0292C8.18584 18.2167 8.38751 18.3183 8.59417 18.3183C8.70917 18.3183 8.82501 18.2867 8.92917 18.22C9.14917 18.08 14.3233 14.77 15.6692 13.6317C17.2542 12.29 18.2025 10.3233 18.205 8.37168V8.35752C18.2 4.71835 15.3467 1.86835 11.705 1.86752V1.86835ZM14.8608 12.6783C13.9158 13.4783 10.8092 15.5159 9.21751 16.5475V13.8917C9.21751 13.5467 8.93834 13.2667 8.59251 13.2667H8.26251C5.21251 13.2667 2.99751 11.2034 2.99751 8.36168C2.99751 5.41668 5.30417 3.11002 8.24751 3.11002L11.7033 3.11835H11.705C14.6483 3.11835 16.955 5.42335 16.9567 8.36502C16.9542 9.95668 16.1717 11.5683 14.8617 12.6783H14.8608Z" fill="#6E767D"/>
          </svg>
          </div>

            <p className="value"> {written1} </p>
            </div>
            <div className="tweet-action">
              <div className="controle2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.37499C17.075 4.65166 15.6725 3.24999 13.95 3.24999H9.07501C8.73001 3.24999 8.45001 3.52999 8.45001 3.87499C8.45001 4.21999 8.73001 4.49999 9.07501 4.49999H13.95C14.9833 4.49999 15.825 5.34166 15.825 6.37499V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583ZM10.925 15.7917H6.05001C5.01667 15.7917 4.17501 14.95 4.17501 13.9167V5.38332L6.02501 7.23332C6.14834 7.35582 6.30834 7.41666 6.46834 7.41666C6.62834 7.41666 6.78834 7.35582 6.91001 7.23332C7.15417 6.98916 7.15417 6.59332 6.91001 6.34999L3.99334 3.43332C3.74917 3.18832 3.35334 3.18832 3.11001 3.43332L0.19334 6.34999C-0.0516599 6.59332 -0.0516599 6.98916 0.19334 7.23332C0.43834 7.47749 0.832507 7.47749 1.07667 7.23332L2.92667 5.38332V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z" fill="#6E767D"/>
            </svg>
            </div>

            <p className="paragh"> {written2} </p>
            </div>
           <div className="tweet-action">
            <div className="controle3"> 
            <svg onClick={()=> handlClick()} xmlns="http://www.w3.org/2000/svg" fill={icon ? 'red' : 'none'}  width="30" height="20" viewBox="0 0 24 24" stroke={icon ? 'red' : 'gray'} stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
          </div>
            <p className="paragraph"> {count} </p>
            </div>
            <img className="tweet-actions svg" src={picone4} alt="" />
          </div>
        </div>
      </div>
    
  )
}
// Tableau d'objet
export const data = [
  {
    id: 1,
    author: "gerardo",
    profile: "src/images/cnn.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //  postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 10,
    like: 22,
    retweet: 19,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
    // Like: "src/images/Like.svg",
    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 2,
    author: "gerardo",
    profile: "src/images/time.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    postimage: "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 25,
    like: 23,
    retweet: 45,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
   
    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 3,
    author: "gerardo",
    profile: "src/images/twitter.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    // postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 63,
    like: 220,
    retweet: 6,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",

    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 4,
    author: "gerardo",
    profile: "src/images/twitter.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    // postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 99,
    like: 106,
    retweet: 3,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
    Like: "src/images/Like.svg",
    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 5,
    author: "gerardo",
    profile: "src/images/twitter.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    // postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 205,
    like: 22,
    retweet: 40,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
    
    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 6,
    author: "gerardo",
    profile: "src/images/twitter.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    // postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 0,
    like: 150,
    retweet: 20,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
    
    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 7,
    author: "gerardo",
    profile: "src/images/twitter.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    // postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 65,
    like: 0,
    retweet: 1,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
    
    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 8,
    author: "gerardo",
    profile: "src/images/twitter.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    // postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 50,
    like: 6,
    retweet: 539,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
    
    Downlord: "src/images/Downlord.svg"

  },
  {
    id: 9,
    author: "gerardo",
    profile: "src/images/twitter.svg",
    profileTweet: "src/images/cnn.svg",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    // postimage : "src/images/tweet-image.png",
    tweetTitle: "The New York Times",
    iconeTitle: "src/images/Group.svg",
    pseudo: "@Twitter . Oct 29",
    comment: 10,
    like: 22,
    retweet: 1,
    Reply: "src/images/Reply.svg",
    Retweet: "src/images/Retweet.svg",
    
    Downlord: "src/images/Downlord.svg"
  },
  
]
export default Herosection2;

































































































































































































































