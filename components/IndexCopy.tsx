import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout home>  
      <main className='flex flex-1 flex-row w-full basis-full items-center justify-evenly px-14'>
        <section className='flex flex-col text-left w-4/12'>
          <p className='text-xl text-secondary-white' >Kia ora, I'm</p>
          <p className="text-6xl text-secondary-white">Braden Holgate</p>
          <p className='text-3xl text-secondary-purple leading-relaxed'>{'>'} Software Developer</p>
          <p className="mt-20 leading-loose">
            // a software dev with a background in naval <br></br>// architecture and brewery management.
          </p>
          <p className='leading-loose'>
            // i am passionate about coding, paragliding, climate <br></br>// tech, and economics.
          </p>
          <p className='leading-loose'><span className='text-secondary-purple'>const</span>
           <span className='text-accent-green'>githubLink </span> 
          <span className='text-secondary-white'>=</span>
           <span className='text-accent-rust'>"https://github.com/braden-holgate"</span></p>
        </section>
        <section className='flex flex-col justify-start text-left w-1/3'>
          <p className="text-6xl">Github Gist Code Examples</p>
        </section>
      </main>

    </Layout>
  )

}

export default Home


export default function Layout({ children, home }) {
  const name: string = 'Braden Holgate'
  return (
    <div className='flex min-h-screen min-w-screen flex-col items-start justify-center
     box-border bg-primary-light text-secondary-grey'>
      <Head>
        <title>Braden Holgate - Dev</title>
        <meta
          name='description'
          content='Showcasing and journaling on my projects'
        />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <NavBar />
      <ContactSideBar />
      {children}
      <footer className="sticky bottom-0 flex h-14 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}