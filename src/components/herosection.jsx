import React from "react";
import Button from "./ButtonBlue";

function HeroSection() {
    return (

        <div className="tweet-editor">
            <Avatar img="src/images/profile.png" />
            <TweetEditForm/>
        </div>
    )


}

export default HeroSection;

function Avatar({img}) {
    
    return (
        <div className="avatar">
            <img src= {img} alt="" />
        </div>
    )
}
// containeur 8
 function TweetEditForm() {

    return (
        <div className="tweet-editor-form">
            <TweetEditImput/>
            <TweetEditbuttons/>
        </div>
    )
}
// first content of containeur 8

 function TweetEditImput() {

    return (
        <input className="tweet-editor-input" type="text" placeholder="What's happening?" />
    )
}
// second content 21 of containeur 8 

function TweetEditbuttons() {
    return (
        <div className="tweet-editor-buttons">
             <ActionTweet/>
             <Button style="button"/>
        </div>

    )
}
// contents 22
function ActionTweet() {
    return (
        <div className="tweet-editor-actions">
          <TweetEditActions img="src/images/media.svg"  />
             <TweetEditActions img="src/images/Gif.svg"  />
             <TweetEditActions img="src/images/Poll.svg"  />
             <TweetEditActions img="src/images/Emoji.svg"  />
             <TweetEditActions img="src/images/Schedule.svg"  />
        </div>
    )
}
// create component icones of contents 22

function TweetEditActions({img}) {
    return (
        
          <img src= {img} alt="" />
    
    )
}

// create button element for containeur 21

// function Button({childreen}) {
//     return (
//         <button className="button">
//             twitter
//         </button>
    
//     )
// }


