import React, {useState, Dispatch, SetStateAction, FC} from 'react'
import Layout from '../components/Layout'
import LineNumbers from '../components/LineNumbers';
import PersonalBlurb from '../components/PersonalBlurb';
import SideMenuDesktop from '../components/SideMenuDesktop';
import SubMenuBar from '../components/SideMenuDesktop';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const About: FC<Props> = ({isOpen, setIsOpen}: Props) => {

  const [personalInfoOpen, setPersonalInfoOpen] = useState(true)
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <Layout>
      {/* mobile */}
      <main className={isOpen ? 'hidden' : 'flex flex-1 flex-col w-full h-full overflow-y-auto items-center xl:hidden'}>
        <div className='flex flex-col items-start w-5/6'>
          <header  className='text-secondary-white my-6 px-4'>_about</header>
          <button onClick={() => setPersonalInfoOpen(!personalInfoOpen)} className='w-full py-1 text-secondary-white bg-lines flex flex-row items-center'>
            <img className={personalInfoOpen ? '' : '-rotate-90'} src='/arrow-down-s-fill.svg' height={20} width={20}></img>
            <span className='ml-3'>who-am-i</span>
          </button>
        </div>
        <div className={personalInfoOpen ? 'w-5/6' : 'hidden'}>
          <PersonalBlurb />
        </div>
      </main>

      {/* desktop */}
      <main className='hidden xl:flex w-full h-full overflow-y-auto items-center xl:justify-start xl:static xl:px-14 xl:flex-row xl:items-start'>
        <SideMenuDesktop />
        <LineNumbers />
        <PersonalBlurb />
      </main>
    </Layout>
  )
}
export default About