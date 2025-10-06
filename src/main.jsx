import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'

const rootFromHtml = document.getElementById('root')

createRoot(rootFromHtml).render(
  <div>
    <Header/>
    <Hero/>
    <main className='container max-w-[1100px] mx-auto pt-[73px] pb-[135px]'>
      <Brands/>
    </main>
    <Footer/>
  </div>
)
