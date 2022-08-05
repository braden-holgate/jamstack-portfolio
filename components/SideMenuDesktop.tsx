import React from 'react'

type Props = {}

function SideMenuDesktop({}: Props) {
  return (
    <div className='flex flex-col h-full items-start flex-none basis-60 border-r border-lines '>
      <header  className='text-secondary-white mb-6 px-4'>_about</header>
      <button className='w-full py-1 text-secondary-white bg-lines flex flex-row items-center'>
        <img className='-rotate-90' src='/arrow-down-s-fill.svg' height={20} width={20}></img>
        <span className='ml-3'>who-am-i</span>
      </button>
    </div>
  )
}

export default SideMenuDesktop