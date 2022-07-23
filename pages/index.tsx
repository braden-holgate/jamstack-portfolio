import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout home>  
      <main className='flex flex-1 flex-row w-full basis-full items-center justify-end px-14'>
        <section className='flex flex-col text-left w-1/2'>
          <p className='text-2xl' >Kia ora, I'm</p>
          <p className="text-6xl">Braden Holgate</p>
          <p className='text-3xl'>Software Developer</p>
          <p className="mt-3">
            // a software dev with a background in naval architecture and brewery management.
          </p>
          <p>
            // i am passionate about coding, paragliding, climate tech, and economics.
          </p>
          <p className=''>const githubLink="https://github.com/braden-holgate"</p>
        </section>
        <section className='flex flex-col justify-start text-left w-1/2'>
          <p className="text-6xl">Github Gist Code Examples</p>
        </section>
      </main>
    </Layout>
  )
}

export default Home
