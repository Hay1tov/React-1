import appleSmart1 from '../images/appleSmart1.png'
import appleSmart2 from '../images/appleSmart2.png'
import appleSmart3 from '../images/appleSmart3.png'
import appleSmart4 from '../images/appleSmart4.png'
import sumsungWatchPro from '../images/sumsungWatchPro.png'
import fitBitMax1 from '../images/fitBitMax1.png'

function Products() {
  return <section className='pt-[65px] pb-[135px]'>
    <div className='flex flex-wrap justify-between'>
      <div className='text-center w-[335px] h-[440px] space-y-3 mb-[64px]'>
        <div className='w-[334px] h-[337px] bg-[#F6F6F6] flex justify-center items-center'>
          <img src={appleSmart1} alt="404" className='w-[250px] h-[280px]' />
        </div>
        <div className='space-x-1 space-y-3'>
          <h4 className='text-[24px] font-semibold text-[#1E1D1D] '>Apple Smart I</h4>
          <p className='text-black text-2xl font-semibold'><span className='line-through text-[20px] text-[#8B8E99] font-medium'>$300.00</span> $255.00</p>
        </div>
      </div>
      <div className='text-center w-[335px] h-[440px] space-y-3 mb-[64px]'>
        <div className='w-[334px] h-[337px] bg-[#F6F6F6] flex justify-center items-center'>
          <img src={appleSmart2} alt="404" className='w-[250px] h-[280px]' />
        </div>
        <div className='space-x-1 space-y-3'>
          <h4 className='text-[24px] font-semibold text-[#1E1D1D] '>Apple Smart II</h4>
          <p className='text-black text-2xl font-semibold'><span className='line-through text-[20px] text-[#8B8E99] font-medium'>$300.00</span> $255.00</p>
        </div>
      </div>
      <div className='text-center w-[335px] h-[440px] space-y-3 mb-[64px]'>
        <div className='w-[334px] h-[337px] bg-[#F6F6F6] flex justify-center items-center'>
          <img src={appleSmart3} alt="404" className='w-[250px] h-[280px]' />
        </div>
        <div className='space-x-1 space-y-3'>
          <h4 className='text-[24px] font-semibold text-[#1E1D1D] '>Apple Smart III</h4>
          <p className='text-black text-2xl font-semibold'><span className='line-through text-[20px] text-[#8B8E99] font-medium'>$300.00</span> $255.00</p>
        </div>
      </div>
      <div className='text-center w-[335px] h-[440px] space-y-3 mb-[64px]'>
        <div className='w-[334px] h-[337px] bg-[#F6F6F6] flex justify-center items-center'>
          <img src={appleSmart4} alt="404" className='w-[250px] h-[280px]' />
        </div>
        <div className='space-x-1 space-y-3'>
          <h4 className='text-[24px] font-semibold text-[#1E1D1D] '>Apple Smart IV</h4>
          <p className='text-black text-2xl font-semibold'><span className='line-through text-[20px] text-[#8B8E99] font-medium'>$450.00</span> $399.00</p>
        </div>
      </div>
      <div className='text-center w-[335px] h-[440px] space-y-3 mb-[64px]'>
        <div className='w-[334px] h-[337px] bg-[#F6F6F6] flex justify-center items-center'>
          <img src={sumsungWatchPro} alt="404" className='w-[250px] h-[280px]' />
        </div>
        <div className='space-x-1 space-y-3'>
          <h4 className='text-[24px] font-semibold text-[#1E1D1D] '>Sumsung Watch Pro</h4>
          <p className='text-black text-2xl font-semibold'><span className='line-through text-[20px] text-[#8B8E99] font-medium'>$300.00</span> $255.00</p>
        </div>
      </div>
      <div className='text-center w-[335px] h-[440px] space-y-3 mb-[64px]'>
        <div className='w-[334px] h-[337px] bg-[#F6F6F6] flex justify-center items-center'>
          <img src={fitBitMax1} alt="404" className='w-[250px] h-[280px]' />
        </div>
        <div className='space-x-1 space-y-3'>
          <h4 className='text-[24px] font-semibold text-[#1E1D1D] '>FitBit Max I</h4>
          <p className='text-black text-2xl font-semibold'> $155.00</p>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <button className='w-[196px] h-[46px] rounded-[15px] font-semibold text-[18px] text-white bg-[#3858D6]'>View More</button>
    </div>
  </section>
}

export default Products