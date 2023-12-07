import Button from "./components/ButtonBlue";

function Sidebar() {
    return (
        <div className="left-sidebar">
        <div className="Bard">
            <div className="tweet-body">
        <Icone1 img="src/images/Oiseaux.svg"/>
        <Twittitle  ima="src/images/Home-Fill.svg" text="Home"/>
        <Twittitle ima="src/images/Explore.svg" text="Explore"/>
        <Twittitle ima="src/images/Notifications.svg" text="Notifications"/>
        <Twittitle ima="src/images/Messages.svg" text="Messages"/>
        <Twittitle ima="src/images/Bookmarks.svg" text="Bookmarks"/>
        <Twittitle ima="src/images/Lists.svg" text="Lists"/>
        <Twittitle ima="src/images/Deqsprofil.svg" text="Profile"/>
        <Twittitle ima="src/images/More.svg" text="More"/>
        <Button style="buttonyu"/>

        
        </div>
        
        
        </div>
        </div>
    )
}
export default Sidebar;

function Twittitle({ style,ima , text}) {
    return (
        <div className="tweet-title">
            
            <img className="tweet-title svg"src={ima} alt="" />
            <h2 className="tweet-title-author"> {text} </h2>
            
        </div>
    )
}

function Icone1({img}) {
    return (
        <div className="tweet-title">
        <img src={img} alt="" />
        </div>
    )
}

