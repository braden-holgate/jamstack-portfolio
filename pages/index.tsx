import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout home>
            <Head>
        <title>{siteTitle}</title>
      </Head>
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Kia ora, I'm Braden Holgate
        </h1>

        <p className="mt-3 text-2xl">
          A Software Dev with a background in Naval 
          Architecture and brewing. I am passionate about coding, paragliding, financial education
          and economics.
        </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </div>
    </Layout>
  )
}

export default Home
