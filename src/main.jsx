import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import Products from './components/Products.jsx'
import Rewievs from './components/Rewievs.jsx'
import Newsletter from './components/Newsletter.jsx'

const rootFromHtml = document.getElementById('root')

createRoot(rootFromHtml).render(
  <div>
    <Header />
    <Hero />
    <main className='container max-w-[1100px] mx-auto'>
      <Brands />
      <div className='text-center'>
        <p className='font-medium text-[#3858D6]'>Find your favourite smart watch.</p>
        <h3 className='font-bold text-[#1E1D1D] text-[36px]'>Our Latest Products</h3>
      </div>
      <Products />
      <div className='text-center'>
        <p className='font-medium text-[#3858D6]'>Here are our some of the best clients.</p>
        <h3 className='font-bold text-[#1E1D1D] text-[36px]'>What People Say About Us</h3>
      </div>
      <Rewievs />
      <Newsletter />
    </main>
    <Footer />
  </div>
)
