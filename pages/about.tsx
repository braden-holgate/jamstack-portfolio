import React, {useState, Dispatch, SetStateAction, FC} from 'react'
import Layout from '../components/Layout'
import LineNumbers from '../components/LineNumbers';
import SubMenuBar from '../components/SubMenuBar';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const About: FC<Props> = ({isOpen, setIsOpen}: Props) => {

  const [personalInfoOpen, setPersonalInfoOpen] = useState(true)
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <Layout>
      {/* responsive */}
      <main className={isOpen ? 'hidden' : 'flex flex-1 flex-col w-full h-full my-6 overflow-y-auto items-center xl:hidden'}>
        <div className='flex flex-col items-start w-5/6'>
          <header  className='text-secondary-white mb-6 px-4'>_about</header>
          <button onClick={() => setPersonalInfoOpen(!personalInfoOpen)} className='w-full py-1 text-secondary-white bg-lines flex flex-row items-center'>
            <img className={personalInfoOpen ? '' : '-rotate-90'} src='/arrow-down-s-fill.svg' height={20} width={20}></img>
            <span className='ml-3'>who-am-i</span>
          </button>
        </div>
        <LineNumbers />
        <div className={personalInfoOpen ? 'w-5/6' : 'hidden'}>
          <p className="leading-loose ">
            I enjoy people, coding, paragliding, tech, sustainability, economics.
            <br></br>I am driven by learning and challenge. There is no beating getting really deep into a problem.
            <br></br>My aspiration is to be a part of a team that is purpose driven and using tech to move the needle.
            <br></br>Always up to learn and share! Connect with me however you like. 

          </p>
        </div>
      </main>

      {/* desktop */}
      <main className={isOpen ? 'hidden' : 'hidden xl:flex flex-1 flex-col w-full h-full my-6 overflow-y-auto items-center xl:justify-evenly xl:static xl:px-14 xl:flex-row xl:items-start'}>
        <div className='flex flex-col items-start'>
          <header  className='text-secondary-white mb-6 px-4'>_about</header>
          <button className='w-full py-1 text-secondary-white bg-lines flex flex-row items-center'>
            <img className={personalInfoOpen ? '' : '-rotate-90'} src='/arrow-down-s-fill.svg' height={20} width={20}></img>
            <span className='ml-3'>who-am-i</span>
          </button>
        </div>
        <LineNumbers />
        <div className=''>
          <p className="leading-loose ">
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