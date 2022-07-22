import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function ContactSideBar ({}: Props) {
  return (
    <div className='fixed top-14 left-0 w-14 h-full border border-solid border-lines flex flex-col items-center'>
      <a href='https://www.linkedin.com/in/braden-holgate-59a2068a/' className= 'w-14 h-12 flex flex-col items-center justify-center border-b border-lines'>
        <Image src='/linkedin-box-fill.svg' height={24} width={24} /></a>
      <a href='https://github.com/braden-holgate' className= 'w-14 h-12 flex flex-col items-center justify-center border-b border-lines'>
        <Image src='/github-fill.svg' height={24} width={24} /></a>
    </div>
  )
}

export default ContactSideBar
