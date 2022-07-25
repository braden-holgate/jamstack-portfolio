import React, {useState, Dispatch, SetStateAction} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Home: NextPage<Props> = ({isOpen, setIsOpen}: Props) => {

  return (
    <Layout>  
      <main className={isOpen ? 'hidden' : 'flex flex-1 flex-col w-full basis-full items-center fixed top-32 xl:justify-evenly xl:static xl:px-14 xl:flex-row'}>
        <section className='flex flex-col text-left w-4/5 xl:w-4/12'>
          <p className='text-lg xl:text-xl text-secondary-white' >Kia ora, I'm</p>
          <p className="text-6xl xl:text-6xl text-secondary-white">Braden Holgate</p>
          <p className='text-xl mb-20 xl:text-3xl xl:mb-20 text-secondary-purple leading-relaxed'>{'>'} Software Developer</p>
          <p className="hidden md:block leading-loose">
            // a software dev with a background in naval <br></br>// architecture and brewery management.
          </p>
          <p className='hidden md:block leading-loose'>
            // i am think about coding, paragliding, climate <br></br>// tech, and economics.
          </p>
          <p className='text-sm md:text-base leading-loose'><span className='text-secondary-purple'>const </span>
           <span className='text-accent-green'>githubLink </span> 
          <span className='text-secondary-white'>=</span>
           <span className='text-accent-rust'>"https://github.com/braden-holgate"</span></p>
        </section>
        <section className='hidden text-left justify-start xl:flex xl:flex-col xl:w-1/3'>
          <p className="text-6xl">Github Gist Code Examples</p>
        </section>
      </main>

    </Layout>
  )

}

export default Home
