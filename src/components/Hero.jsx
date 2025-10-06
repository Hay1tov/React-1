import heroImage from '../images/hero-Image.png'

function Hero() {
  return <main className='bg-[#0B0B0B]'>
    <section className='container max-w-[1100px] mx-auto py-25 flex flex-row justify-between'>
      <div className='w-[457px] space-y-[47px]'>
        <div className=''>
          <h2 className='font-bold text-[64px] text-white'>Discover <br /> Most Suitable Watches</h2>
          <p className='text-[#8B8E99] font-[500] font-[cursive]'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
        </div>
        <div className='flex flex-row'>
          <input type="text" placeholder='Find the best brands' className='placeholder:text-[#8B8E99B2] bg-white outline-none rounded-l-[15px] w-full h-15 pl-4 font-[cursive] text-[18px]'/>
          <button className='w-30 h-15 text-white bg-[#3858D6] rounded-r-[15px] text-[18px] font-[cursive]'>Search</button>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="heroImage" className='w-[461px] h-[563px]' />
      </div>
    </section>
  </main>
}

export default Hero