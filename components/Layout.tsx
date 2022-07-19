import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './NavBar'
const name = 'Braden Holgate'
export const siteTitle = 'Developer Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center
     py- box-border bg-primary-light text-secondary-grey'>
      <Head>
        <meta
          name='description'
          content='Showcasing and journaling on my projects'
        />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <NavBar />
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        {children}
      </main>
    </div>
  )
}
