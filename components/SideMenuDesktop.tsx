import React from 'react'

type Props = {}

function SideMenuDesktop({}: Props) {
  return (
    <div className='flex flex-col h-full items-start flex-none basis-[265px] border-r border-lines '>
      <header  className='text-secondary-white h-10 w-full pl-11 py-2 border-lines border-b'>_about</header>
      <div className='mt-5 w-full pl-3'>
        <button className='w-full text-secondary-white py-1 flex flex-row items-center'>
          <img className='-rotate-90' src='/arrow-down-s-fill.svg' height={20} width={20}></img>
          <span className='ml-3'>who-am-i</span>
        </button>
        <button className='w-full text-secondary-white py-1 flex flex-row items-center'>
          <img className='-rotate-90' src='/arrow-down-s-fill.svg' height={20} width={20}></img>
          <span className='ml-3'>my-work-life</span>
        </button>
      </div>
    </div>
  )
}

export default SideMenuDesktop