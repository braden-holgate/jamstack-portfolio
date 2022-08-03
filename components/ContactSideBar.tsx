import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function ContactSideBar ({}: Props) {
  return (
    <div className='mt-auto flex items-center px-5 w-screen border border-solid border-lines xl:fixed xl:px-0 xl:top-14 xl:left-0 xl:w-14 xl:h-full xl:flex-col'>
      <p className='basis-3/6 xl:hidden'>find me on: </p>
      <a href='https://www.linkedin.com/in/braden-holgate-59a2068a/' target='_blank' className= 'w-14 h-12 flex flex-col items-center justify-center border-l border-lines xl:border-b'>
        <Image src='/linkedin-box-fill.svg' height={24} width={24} />
      </a>
      <a href='https://github.com/braden-holgate' target='_blank' className= 'w-14 h-12 flex flex-col items-center justify-center border-l border-lines xl:border-b'>
        <Image src='/github-fill.svg' height={24} width={24} />
      </a>
      <a href='mailto:braden-dev@outlook.com' className= 'w-14 h-12 flex flex-col items-center justify-center border-l border-lines xl:border-b'>
        <Image src='/mail-fill.svg' height={24} width={24} />
      </a>
    </div>
  )
}

export default ContactSideBar
