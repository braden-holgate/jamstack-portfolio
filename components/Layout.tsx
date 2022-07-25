import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ContactSideBar from './ContactSideBar'
import NavBar from './NavBar'
import HamburgerMenu from './HamburgerMenu'

type Props = {
  children?: React.ReactNode;
  home: boolean;
}


export default function Layout({ children, home}: Props)  {

  const name: string = 'Braden Holgate'
  const [isOpen, setIsOpen] = useState(false)
  console.log(home)
  return (
    <div className='flex min-h-screen min-w-full flex-col items-start justify-center
     box-border bg-primary-light text-secondary-grey'>
      <Head>
        <title>Braden Holgate - Dev</title>
        <meta
          name='description'
          content='Showcasing and journaling on my projects'
        />
        <meta name='og:title' content='Developer Portfolio' />
      </Head>
      <NavBar />
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} home={home}/>
      <ContactSideBar />
      {isOpen ? null : children}
      <footer className="hidden xl:flex sticky bottom-0 h-14 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}
