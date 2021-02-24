import React, { useState } from 'react'
import Head from 'next/head'
import Confetti from 'react-dom-confetti';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 w-screen p-10 flex flex-col items-center justify-center">
            <Card
                title="Andrew Jones"
                id="intro"
                picAlt="My Profile Picture"
                picSrc="prof_pic_sanfran.jpg"
                content={
                    <div className="flex flex-wrap">
                        <Technology linkId="">ReactJS</Technology>
                        <Technology linkId="">NextJS</Technology>
                        <Technology linkId="">React Native</Technology>
                        <Technology linkId="">Static-Site Generation</Technology>
                        <Technology linkId="">TailwindCSS</Technology>
                        <Technology linkId="">Unreal Engine 4</Technology>
                        <Technology linkId="">Swift</Technology>
                        <Technology linkId="">SpriteKit</Technology>
                        <Technology linkId="">Agile</Technology>
                        <Technology linkId="">Documentation</Technology>
                        <Technology linkId="">CSS</Technology>
                        <Technology linkId="">LESS</Technology>
                        <Technology linkId="">API-driven Apps</Technology>
                    </div>
                }
            />
            <br/>
            <Card
                title="Weatherer"
                id="weatherer"
                picAlt="Weatherer - NextJS"
                picSrc="weatherer.png"
                content={
                    <>
                        <Technology disableConfetti>ReactJS</Technology>
                        <Technology disableConfetti>NextJS</Technology>
                        <Technology disableConfetti>Static-Site Generation</Technology>
                        <Technology disableConfetti>CSS</Technology>
                        <p>
                            Weatherer is a NextJS site featuring static site generation, with page revalidation.
                            This means that even if <b>1000 people request</b> the weather for the same zip code in a
                            small period of time,
                            the server will <b>only render the page once</b>, and a super fast edge-cache will send
                            static HTML to the other 99 users.
                        </p>
                        <a href="https://weatherer.now.sh">Try it out here!</a>
                    </>
                }
            />
            <br/>
            <Card
                title="ShareSheets"
                id="sharesheets"
                picAlt="ShareSheets - React Native with Expo"
                picSrc="sharesheets.PNG"
                content={
                    <>
                        <p>
                            ShareSheets allows users to share their contact information and social media accounts by creating and scanning QR codes.
                            It is cross-platform (iPhone, iPad, and Android), and completely written in React Native using an Expo-managed workflow.
                            Check it out on the Apple App Store or Google Play Store.
                        </p>
                        <a href="https://apps.apple.com/tt/app/sharesheets/id1493143639">ShareSheets on the App Store</a>
                    </>
                }
            />
            <br/>
            <Card
                title="Space Station: Run"
                id="spacestationrun"
                picAlt="Space Station: Run - Unreal Engine 4 iOS App"
                picSrc="spacestationrun.PNG"
                content={
                    <>
                        <p>
                            Space Station: Run is an endless-runner iOS game, with a unique anti-gravity mechanic.
                            This project was created using Blueprints. While the assets came from an asset pack, I created
                            all of the logic for map generation, door movement, coin creation, powerups, etc. I also created
                            the particles using Cascade.
                        </p>
                        <a href="https://apps.apple.com/us/app/space-station-run/id1425634808">Space Station: Run on the App Store</a>
                    </>
                }
            />
        </div>
      </main>
    </div>
  )
}

const Card = ({title, content, picSrc, picAlt, id}) => (
    <div className="w-11/12 md:w-3/5 items-center flex" id={id}>
        <div className="bg-gray-200 rounded-lg flex flex-col md:flex-row w-full">
            <div className="m-6 md:w-3/5 xl:w-4/5">
                <h1 className="border-b-2 mb-4 border-gray-800 p-4 pl-0 pt-0 m-1">{title}</h1>
                {content}
            </div>
            <picture className="md:h-full md:w-2/5">
                <img src={picSrc} alt={picAlt} className="md:object-scale-down w-full md:w-100 md:rounded-r-md" style={{maxWidth: 'unset'}}/>
            </picture>
        </div>

    </div>
)

const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 1000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const Technology = ({children, linkId, disableConfetti}) => {

    const [randomColor, setRandomColor] = useState(getRandomColor())
    const [confettiActive, setConfettiActive] = useState(false)

    const resetColor = () => {
        setConfettiActive(true)
        setInterval(() => setConfettiActive(false), 1000)
        setRandomColor(getRandomColor())
    }

    return (
        <a onMouseOver={resetColor}
           className={`border-r-2 border-gray-400 transition-all ease-in-out duration-200 no-underline my-1 px-2 text-xl text-gray-800 font-semibold tracking-wide hover:text-${randomColor}-600`}
           href={"#" + linkId}>
            { !disableConfetti && <Confetti active={confettiActive} config={config}/> }
            {children}
        </a>
    )
}

const getRandomColor = () => {
    const tailwindColors = ['red','blue','green','purple','yellow','orange']

    return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
}