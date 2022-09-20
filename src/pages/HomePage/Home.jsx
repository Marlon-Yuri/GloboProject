import React from 'react'
import Header from '../../services/Header'
import Main from './Main/index'
import Footer from './Footer/index'
import BrazilSection from '../HomePage/BrazilSection_Main/index'
import WorldSection from '../HomePage/WorldSection_Main/index'
export default function Home() {
  return (
    <div>
       <Header />
       <Main/> 
       <BrazilSection/>
       <WorldSection/>
       <Footer/>
    </div>
  )
}
