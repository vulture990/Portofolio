import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (

    <div>
     <Header
       title="Salbi Mohamed -Software Engineer, Creator"
       />
     <Logo/>
    </div>


  )
}

export default Home
