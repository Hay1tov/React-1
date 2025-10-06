import Hamza from '../images/HamzaFaizi.jpg'
import Hafiz from '../images/HafizHuzaifa.jpg'

function Rewievs() {
  return <section className='pt-[55px] flex justify-between gap-1'>
    <div className='w-[524px] h-[239px] rounded-[22px] bg-[#F6F6F6] flex justify-center items-center gap-[28px]'>
      <div>
        <img src={Hamza} alt="" className='w-[162px] h-[179px] rounded-[15px]'/>
      </div>
      <div>
        <h4 className='text-[24px] font-bold text-[#1E1D1D]'>Hamza Faizi</h4>
        <p className='text-[#8B8E99] font-medium w-[255px]'>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
      </div>
    </div>
    <div  className='w-[524px] h-[239px] rounded-[22px] bg-[#F6F6F6] flex justify-center items-center gap-[28px]'>
    <div>
        <img src={Hafiz} alt="" className='w-[162px] h-[179px] rounded-[15px]'/>
      </div>
      <div>
        <h4 className='text-[24px] font-bold text-[#1E1D1D]'>Hafiz Fuzaifa</h4>
        <p className='text-[#8B8E99] font-medium w-[255px]'>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
      </div>
    </div>
  </section>
}

export default Rewievs