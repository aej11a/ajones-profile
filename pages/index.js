import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Card } from "../components/Card";
import { Technology } from "../components/Technology";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andrew Jones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 md:w-screen md:p-10 flex flex-col md:items-center md:justify-center">
          <Card
            title="Andrew Jones"
            subtitle={
              <span>
                Frontend developer with a specialty in research & development
                and project management.
              </span>
            }
            sidebar={
              <div>
                <br />
                <p>Stevens Institute of Technology</p>
                <p>B.E. Software Engineering</p>
                <p>(expected) May 2022</p>
                <br />
                <p>
                  <img
                    src={"mail.svg"}
                    alt={"Email Address"}
                    width="20px"
                    style={{ display: "inline-block", marginRight: 8 }}
                  />{" "}
                  <a href="mailto:aej11@outlook.com">aej11@outlook.com</a>
                </p>
                <p>
                  <img
                    src={"phone.svg"}
                    alt={"Phone Number"}
                    width="20px"
                    style={{ display: "inline-block", marginRight: 8 }}
                  />{" "}
                  <a href="tel:9738300931">973-830-0931</a>
                </p>
              </div>
            }
            id="intro"
            picAlt="My Profile Picture"
            picSrc="avatar.png"
            content={
              <>
                <h2>Skills: </h2>
                <div className="flex flex-wrap">
                  <Technology linkId="">ReactJS</Technology>
                  <Technology linkId="">NextJS</Technology>
                  <Technology linkId="">React Native</Technology>
                  <Technology linkId="">Node.js</Technology>
                  <Technology linkId="">REST APIs</Technology>
                  <Technology linkId="">GraphQL</Technology>
                  <Technology linkId="">TailwindCSS</Technology>
                  <Technology linkId="">Unreal Engine 4</Technology>
                  <Technology linkId="">Swift</Technology>
                  <Technology linkId="">Java</Technology>
                  <Technology linkId="">Python</Technology>
                  <Technology linkId="">Agile</Technology>
                  <Technology linkId="">Documentation</Technology>
                  <Technology linkId="">CSS</Technology>
                  <Technology linkId="">Data Analysis</Technology>
                </div>
                <br />
                <h2>Interests: </h2>
                <div className="flex flex-wrap">
                  <Technology linkId="">Baking</Technology>
                  <Technology linkId="">Cooking</Technology>
                  <Technology linkId="">Photography</Technology>
                  <Technology linkId="">Movies</Technology>
                  <Technology linkId="">Running</Technology>
                  <Technology linkId="">History</Technology>
                  <Technology linkId="">3D-Printing</Technology>
                  <Technology linkId="">Programming</Technology>
                </div>
              </>
            }
          />
          <br />
          <Card
            title="Software Engineer @ Corra"
            subtitle="Front-end Development internship where I took a leadership role."
            id="corra"
            picAlt="A sample e-commerce PWA developed at Corra"
            picSrc="elemis.PNG"
            content={
              <>
                <p>
                  Despite starting as "only" an intern, I took the Progressive
                  Web Application concept all the way from an idea to a major
                  movement within our company and clientele. I developed
                  prototypes, trained developers, advocated for the project
                  across our org, and more. I am currently working on a new
                  platform-agnostic Next.js e-commerce accelerator using
                  TypeScript.
                  <br />
                  <br />
                  Download <a href="Andrew Jones Resume.pdf">my resume</a> for
                  more info!
                </p>
                <br />
                <p>
                  <a href="https://corra.com/fwrd-headless-pwa/">FWRD</a>, the
                  accelerator I led development of.
                </p>
                <p>
                  <a hred="https://corra.com/ourwork/elemis">Case study</a> on
                  one of our clients.
                </p>
              </>
            }
          />
          <br />
          <Card
            title="Talk to Anyone - AI Chat App"
            id="covid"
            picAlt="Screenshots of the artificial intelligence-powered chat app I created"
            picSrc="ai-chat.png"
            content={
              <>
                <Technology disableConfetti>JavaScript</Technology>
                <Technology disableConfetti>React Native</Technology>
                <Technology disableConfetti>AI</Technology>
                <Technology disableConfetti>GPT-3</Technology>
                <Technology disableConfetti>APIs</Technology>
                <br />
                <br />
                <p>
                  I created a chat app using React Native, powered by the OpenAI
                  GPT-3 API. I studied and experimented with the API to find the
                  right settings for the app. <br />
                  Check out more details and two video demos{" "}
                  <Link href="/projects/ai-chat">here</Link>.
                </p>
              </>
            }
          />
          <br />
          <Card
            title="COVID-19 Research"
            id="covid"
            picAlt="Data analysis dashboard I created to study COVID-19 spread"
            picSrc="covid_dashboard.PNG"
            content={
              <>
                <Technology disableConfetti>JavaScript</Technology>
                <Technology disableConfetti>React</Technology>
                <Technology disableConfetti>Data Analysis</Technology>
                <br />
                <br />
                <p>
                  I led a research project on the system dynamics of the global
                  spread of COVID-19, which culminated in a research paper that
                  was published in an Elsevier journal. I developed a data
                  analysis dashboard in JavaScript which the project centered
                  around.
                </p>
                <p>
                  <a href="https://chaotic-covid19.now.sh/">
                    The Dashboard I created
                  </a>{" "}
                  to analyze the data
                </p>
                <p>
                  <a href="https://doi.org/10.1016/j.chaos.2020.110376">
                    The published paper.
                  </a>
                </p>
              </>
            }
          />
          <br />
          <Card
            title="ShareSheets"
            id="sharesheets"
            picAlt="ShareSheets - React Native with Expo"
            picSrc="sharesheets.PNG"
            content={
              <>
                <Technology disableConfetti>React Native</Technology>
                <Technology disableConfetti>App Development</Technology>
                <br />
                <br />
                <p>
                  ShareSheets allows users to share their contact information
                  and social media accounts by creating and scanning QR codes.
                  It is cross-platform (iPhone, iPad, and Android), and
                  completely written in React Native using an Expo-managed
                  workflow. Check it out on the Apple App Store or Google Play
                  Store.
                </p>
                <a href="https://apps.apple.com/tt/app/sharesheets/id1493143639">
                  ShareSheets on the App Store
                </a>
              </>
            }
          />
          <br />
          <Card
            title="Mars Weather Widgets"
            id="mars"
            picAlt="Screenshots of my widget app"
            picSrc="mars.PNG"
            content={
              <>
                <Technology disableConfetti>SwiftUI</Technology>
                <Technology disableConfetti>REST API</Technology>
                <Technology disableConfetti>App Development</Technology>
                <br />
                <br />
                <p>
                  I developed this app to learn about SwiftUI and iOS Widgets.
                  It allows users to view the weather on Mars on their iOS
                  homescreen, and also has widgets which just display Mars
                  photography. The app can only function when NASA has data
                  available.
                </p>
                <a href="https://apps.apple.com/tt/app/mars-weather-with-widgets/id1533580523#?platform=iphone">
                  Mars Weather on the App Store
                </a>
              </>
            }
          />
          <br />
          <Card
            title="Weatherer"
            id="weatherer"
            picAlt="Weatherer - NextJS"
            picSrc="weatherer.PNG"
            content={
              <>
                <Technology disableConfetti>ReactJS</Technology>
                <Technology disableConfetti>NextJS</Technology>
                <Technology disableConfetti>Static-Site Generation</Technology>
                <Technology disableConfetti>CSS</Technology>
                <br />
                <br />
                <p>
                  Weatherer is a NextJS site featuring static site generation,
                  with page revalidation. This means that even if{" "}
                  <b>1000 people request</b> the weather for the same zip code
                  in a small period of time, the server will{" "}
                  <b>only render the page once</b>, and a super fast edge-cache
                  will send static HTML to the other 99 users.
                </p>
                <a href="https://weatherer.now.sh">Try it out here!</a>
              </>
            }
          />
          <br />
          <Card
            title="Space Station: Run"
            id="spacestationrun"
            picAlt="Space Station: Run - Unreal Engine 4 iOS App"
            picSrc="spacestationrun.PNG"
            content={
              <>
                <Technology disableConfetti>Unreal Engine 4</Technology>
                <Technology disableConfetti>App Development</Technology>
                <br />
                <br />
                <p>
                  Space Station: Run is an endless-runner iOS game, with a
                  unique anti-gravity mechanic. This project was created using
                  Blueprints. While the assets came from an asset pack, I
                  created all of the logic for map generation, door movement,
                  coin creation, powerups, etc. I also created the particles
                  using Cascade. The game now has over <b>4000 downloads</b>.
                </p>
                <a href="https://apps.apple.com/us/app/space-station-run/id1425634808">
                  Space Station: Run on the App Store
                </a>
              </>
            }
          />
        </div>
      </main>
    </div>
  );
}
