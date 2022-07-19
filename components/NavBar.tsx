import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='sticky top-0 h-14 flex w-full border border-solid border-lines text-center items-center' >
      <Link href=''>
        <a className= 'basis-2/12 py-4 pl-6 border-r border-lines text-left'>braden-holgate</a>
      </Link>
      <Link href=''>
        <a className='basis-1/12 py-4 border-r border-lines'>_home</a>
      </Link>
      <Link href=''>
        <a className='basis-1/12 py-4 border-r border-lines'>_projects</a>
      </Link>
      <Link href=''>
        <a className='basis-1/12 py-4 border-r border-lines'>_about</a>
      </Link>
      <Link href=''>
        <a className='basis-6/12 py-4 border-r border-lines h-14'></a>
      </Link>
      <Link href=''>
        <a className='basis-1/12 py-4 border-r border-lines'>_contact</a>
      </Link>
    </nav>
  )
}
