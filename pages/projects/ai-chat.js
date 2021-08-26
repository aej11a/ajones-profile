import Head from 'next/head'
import { Card } from "../../components/Card";
import { Technology } from "../../components/Technology";

export default function AiChatInfo() {
  return (
    <div className="container">
      <Head>
        <title>OpenAI Chat App - Andrew Jones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="bg-gray-800 md:w-screen md:p-10 flex flex-col md:items-center md:justify-center">
          <Card
            title="Talk to Anyone - AI Chat App"
            id="aichat"
            picAlt="Screenshots of the artificial intelligence-powered chat app I created"
            picSrc="/ai-chat.png"
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
                  right settings for a friendly chat. 
                  <br/>
                  One UX detail I implemented is displaying "typing..." while the API request is running to
                  make the loading-time more user-friendly, and make the app seem like a real chat
                  with a real person!
                  <br/>
                  This app is not live, but please see the videos below for two very different examples!
                </p>
                <br/>
                <h4 className="font-bold">AI Chat with George Washington</h4>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bSpu2Xz6a-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <h4 className="font-bold">AI Chat with Taylor Swift</h4>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oZ3KzsyNBTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </>
            }
          />
        </div>
      </main>
    </div>
  );
}
