import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout home>
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Kia ora, I'm Braden Holgate
        </h1>

        <p className="mt-3 text-2xl">
          A Software Dev with a background in Naval 
          Architecture and brewing. I am passionate about coding, paragliding, financial education
          and economics.
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </div>
    </Layout>
  )
}

export default Home
