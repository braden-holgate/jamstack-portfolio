import React, {useState, FC, Dispatch, SetStateAction} from 'react'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'

const NavBar: FC = () => {

  return (
    <>
      <nav className='hidden xl:flex xl:sticky top-0 h-14  w-full border border-solid border-lines text-center items-center' >
        <Link href='/'>
          <a className= 'basis-72 flex-none py-4 pl-6 border-r border-lines text-left'>braden-holgate</a>
        </Link>
        <Link href='/'>
          <a className='basis-1/12 py-4 border-r border-lines' aria-current='true'>_home</a>
        </Link>
        <Link href='/projects'>
          <a className='basis-1/12 py-4 border-r border-lines'>_projects</a>
        </Link>
        <Link href='about'>
          <a className='basis-1/12 py-4 border-r border-lines'>_about</a>
        </Link>
        <Link href=''>
          <a className='basis-6/12 py-4 border-r border-lines h-14'></a>
        </Link>
        <Link href=''>
          <a className='basis-1/12 py-4 border-r border-lines'>_contact</a>
        </Link>
      </nav>

    </>
  )
}

export default NavBar