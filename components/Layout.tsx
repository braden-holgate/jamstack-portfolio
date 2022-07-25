import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ContactSideBar from './ContactSideBar'
import NavBar from './NavBar'

export const siteTitle = 'Developer Portfolio'

export default function Layout({ children, home }) {
  const name: string = 'Braden Holgate'
  return (
    <div className='flex min-h-screen min-w-full flex-col items-start justify-center
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
      <footer className="hidden xl:flex sticky bottom-0  h-14 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}
