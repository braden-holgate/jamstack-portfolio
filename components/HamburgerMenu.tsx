import React, { Dispatch, SetStateAction, FC } from 'react'
import Link from 'next/link'

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  home: boolean;
}

const HamburgerMenu: FC<Props> = ({ isOpen, setIsOpen, home }: Props) => {
  console.log(home)
  return (
    <>
    <div className={isOpen ? 'flex flex-col w-full min-h-screen pl-5 pr-5 xl:hidden' : ''}>
      <header className='flex justify-between w-full py-5 border-b border-lines'>
        <div className={isOpen || !home ? '' : 'hidden'}>braden-holgate</div>
        <button onClick={() => setIsOpen(!isOpen)} className=''>
          <img className={!isOpen ? 'fixed top-5 right-5 xl:hidden': 'hidden'} src='/menu-line.svg' height={24} width={24} />
          <img className={isOpen ? '': 'hidden'} src='/close-line.svg' height={24} width={24} />
        </button>
      </header>

      <nav className={isOpen ? 'flex flex-col text-secondary-white xl:hidden' : 'hidden'}>
        <Link href='/'>
          <a className=' py-5 border-b border-lines' aria-current='true'>_home</a>
        </Link>
        <Link href='/projects'>
          <a className=' py-5 border-b border-lines'>_projects</a>
        </Link>
        <Link href='/about'>
          <a className=' py-5 border-b border-lines'>_about</a>
        </Link>
        <Link href=''>
          <a className=' py-5 border-b border-lines'>_contact</a>
        </Link>
      </nav>
    </div>
    </>
  )
}

export default HamburgerMenu