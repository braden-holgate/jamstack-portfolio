import React, {useState, Dispatch, SetStateAction, FC} from 'react'
import Layout from '../components/Layout'

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Projects: FC<Props> = ({isOpen, setIsOpen}: Props) => {
  return (
    <Layout>
      <main className={isOpen ? 'hidden' : 'flex flex-1 flex-col w-full basis-full items-center fixed top-32 xl:justify-evenly xl:static xl:px-14 xl:flex-row'}>

      </main>
    </Layout>
  )
}
export default Projects