import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function ContactSideBar ({}: Props) {
  return (
    <div className='fixed flex items-center bottom-0 w-screen border border-solid border-lines xl:top-14 xl:left-0 xl:w-14 xl:h-full xl:flex-col '>
      <a href='https://www.linkedin.com/in/braden-holgate-59a2068a/' target='_blank' className= 'w-14 h-12 flex flex-col items-center justify-center border-b border-lines'>
        <Image src='/linkedin-box-fill.svg' height={24} width={24} /></a>
      <a href='https://github.com/braden-holgate' target='_blank' className= 'w-14 h-12 flex flex-col items-center justify-center border-b border-lines'>
        <Image src='/github-fill.svg' height={24} width={24} /></a>
    </div>
  )
}

export default ContactSideBar
