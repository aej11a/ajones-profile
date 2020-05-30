import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 w-screen h-screen flex items-center justify-center">
            <div className="intro bg-gray-200 w-4/5 rounded-t-lg md:rounded-l-md md:rounded-t-none">
                <h1 className="m-1">Andrew Jones</h1>
                {/* Show this one on mobile (hide at md+)*/}
                <picture className="block md:hidden">
                    <img src="prof_pic_sanfran.jpg" alt="My Profile Picture" className="object-scale-down"/>
                </picture>
            </div>
            {/* Show this one on desktop (show at md+)*/}
            <picture className="hidden md:block">
                <img src="prof_pic_sanfran.jpg" alt="My Profile Picture" className="object-scale-down"/>
            </picture>
        </div>
      </main>
    </div>
  )
}
