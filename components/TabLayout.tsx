import React from 'react'

type Props = {
  children?: React.ReactNode;
}

function TabLayout({children}: Props) {
  return (
    <>
      <div className='flex flex-col w-full'>
        <div className='w-full h-10 border-b border-lines'>

        </div>
        <div className='flex flex-row ml-8 mt-5'>
          {children}
        </div>
      </div>
      
    </>
  )
}

export default TabLayout