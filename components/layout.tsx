import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Braden Holgate'
export const siteTitle = 'Developer Portfolio'

export default function Layout({ children, home }) {
  return (
    <div >
      <Head>
        <meta
          name="description"
          content="Showcasing and journaling on my projects"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header >
        
      </header>
      <main>{children}</main>
    </div>
  )
}
