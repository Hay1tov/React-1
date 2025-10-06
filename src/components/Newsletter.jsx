import NewsletterImage from '../images/newsletter-Image.png'

function Newsletter() {
  return <section className="pt-[135px] pb-[91px]">
    <div className='w-full h-[377px] bg-[#F6F6F6] rounded-[22px] flex justify-center items-center gap-[178px]'>
      <div className='w-[547px] space-y-3'>
        <h2 className='text-[#1E1D1D] font-bold text-[36px] font-[cursive]'>Subscribe To Newsletter</h2>
        <p className='text-[#8B8E99] font-medium font-[cursive]'>Get free guide about smart watches daily. </p>
        <div className='flex flex-row'>
          <input type="text" placeholder='Enter Email Adress' className='placeholder:text-[#8B8E99B2] bg-white outline-none rounded-l-[15px] w-full h-15 pl-4 font-[cursive] text-[18px]' />
          <button className='w-30 h-15 text-white bg-[#3858D6] rounded-r-[15px] text-[18px] font-[cursive]'>Search</button>
        </div>
      </div>
      <div>
        <img src={NewsletterImage} alt="NewsletterImage" className='w-[272px] h-[301px]'/>
      </div>
    </div>
  </section>
}

export default Newsletter