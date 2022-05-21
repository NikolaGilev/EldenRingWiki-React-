import React, {Component} from 'react';
import Card from "./Card";

const Home = () => {
    return (

        <div className="container p-5 pt-5" style={{baclground: '#1d1d1b'}}>
            <div className="row">
            </div>

            <img
                src={process.env.PUBLIC_URL+"logo.png"}
                alt="https://preview.redd.it/p0sodeszt0l61.jpg?auto=webp&s=3e88a78a78bf3e415014b9a09c5cdd04f58a0f0b"
                className=""
                style={{width: '50%', height: '50%', marginLeft: '25%'}}/>

            <div className="row mb-5 ">
                    <Card btnName='Select Character' btnRedirectLink='ChooseCharacterList'
                          cardName='Building your character'
                          imgSrc='https://gamingintel.com/wp-content/uploads/2022/02/All-Elden-Ring-Classes.jpg'/>
                    <Card btnName='B-)' btnRedirectLink='https://www.youtube.com/watch?v=9fWxCIi5PIw'
                          cardName='Shine Transparency'
                          imgSrc='https://www.gamergirlsradio.com/wp-content/uploads/2022/03/elden-ring-dr-disrespect.jpg'/>
                <Card btnName='Find a Quest' btnRedirectLink='quests'
                      cardName='Quest Lines'
                      imgSrc='https://deluxe.news/wp-content/uploads/2022/03/Latest-Elden-Ring-patch-fixes-NPC-questlines-multiplayer-bugs-and-780x470.jpg'/>
                    </div>
           <div className="row mb-5">
                <Card btnName='God Gamer Guides' btnRedirectLink='https://www.twitch.tv/forsen'
                      cardName='Meet The God Gamer'
                      imgSrc='https://i.ytimg.com/vi/xwzzrCeegcQ/maxresdefault.jpg'/>
                <Card btnName='Visit the Lands Between' btnRedirectLink='mapLocations'
                      cardName=''
                      imgSrc='https://preview.redd.it/ifzu3m97dhk81.jpg?auto=webp&s=113655f78d931181db30e07ea70d6cf4ccfe5fc1'/>
                <Card btnName='Take a seat... Rest a while' btnRedirectLink='RestAtGrace'
                      cardName='Rest At Grace'
                      imgSrc='https://assets.reedpopcdn.com/elden-ring-what-to-do-first-beginners-guide-8042-1645708800568.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/elden-ring-what-to-do-first-beginners-guide-8042-1645708800568.jpg'/>
               <Card btnName='Find Out More' btnRedirectLink='GameLore'
                     cardName='Game Lore'
                     imgSrc='https://freequizgames.com/wp-content/uploads/2022/03/what-kind-of-elden-ring-character-are-you.jpg'/>
           </div>

        </div>
    );
}

export default Home;
