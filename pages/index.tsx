import type { NextPage } from 'next'
import { loadComponents } from 'next/dist/server/load-components'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="border-2 border-yellow-200">mnau</div>
      <div className="border-2 border-pink-200">tady bara</div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
           {/* <img className="ml-10" src="/vercel.svg" alt="Vercel Logo" width={999} height={16} /> */}
        </a>
      </footer>
    </div>
  )
}

export default Home
