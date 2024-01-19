import React from "react";
import Button from "./ButtonBlue";
import { ImageAvat } from "./imageAvatar";
import { Link } from "react-router-dom";
function HeroSection() {
    return (
       
        <div className="tweet-editor">
            <Link to='/avatar'>
            <Avatar/>
            </Link>
            <TweetEditForm/>
        </div>
    )


}

export default HeroSection;

 export function Avatar() {
    
    return (
        <div className="avatar">
            <ImageAvat img="./src/images/profile-photo.png"/>
            
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

export function TweetEditActions({img}) {
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




