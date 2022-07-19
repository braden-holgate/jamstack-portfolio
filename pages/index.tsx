import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>Braden Holgate - Dev</title>
      </Head>
      
        <h1 className="text-6xl font-bold">
          Kia ora, I'm Braden Holgate
        </h1>

        <p className="mt-3 text-2xl">
          A Software Dev with a background in Naval 
          Architecture and brewing. I am passionate about coding, paragliding, financial education
          and economics.
        </p>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </Layout>
  )
}

export default Home
