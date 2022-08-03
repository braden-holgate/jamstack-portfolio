import React, {useState, Dispatch, SetStateAction, FC} from 'react'
import Layout from '../components/Layout'

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const About: FC<Props> = ({isOpen, setIsOpen}: Props) => {
  return (
    <Layout>
      <main className={isOpen ? 'hidden' : 'flex flex-1 flex-col w-full h-full my-6 overflow-y-auto items-center xl:justify-evenly xl:static xl:px-14 xl:flex-row'}>
        <div className='w-5/6'>
          <header className='text-secondary-white mb-6'>_about</header>
          <p className="leading-loose">
            I enjoy people, coding, paragliding, tech, sustainability, economics.
            <br></br>I am driven by learning and challenge. There is no beating getting really deep into a problem.
            <br></br>My aspiration is to be a part of a team that is purpose driven and using tech to move the needle.
            <br></br>Always up to learn and share! Connect with me however you like. 
            I enjoy people, coding, paragliding, tech, sustainability, economics.
            <br></br>I am driven by learning and challenge. There is no beating getting really deep into a problem.
            <br></br>My aspiration is to be a part of a team that is purpose driven and using tech to move the needle.
            <br></br>Always up to learn and share! Connect with me however you like. 
          </p>
        </div>
      </main>
    </Layout>
  )
}
export default About