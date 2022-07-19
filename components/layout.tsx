import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Braden Holgate'
export const siteTitle = 'Developer Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <meta
          name="description"
          content="Showcasing and journaling on my projects"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="fixed left-16 top-16 h-14 flex w-full" >
        <div>_home</div>
        <div>_projects</div>
        <div>_about-me</div>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
    </div>
  )
}
