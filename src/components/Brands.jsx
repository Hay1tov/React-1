import apple from '../images/Apple.png'
import xiaomi from '../images/Xiaomi.png'
import bitfit from '../images/BitFit.png'

function Brands() {
  return <div className='flex flex-row justify-between'>
    {/* Apple */}
    <div className='w-[354px] h-[239px] rounded-[22px] bg-[#F6F6F6] flex justify-center items-center'>
      <div className='flex flex-row gap-[26px] '>
        <div>
          <img src={apple} alt="" className='w-[85px] h-[148px] object-cover' />
        </div>
        <div className='flex flex-col gap-[9px] w-[173px]'>
          <h3 className='text-[36px] text-[#1E1D1D] font-bold'>Apple</h3>
          <p className='text-[#8B8E99] font-[500] font-[cursive] '>Apple is one of the most famous smart watches providing company.</p>
        </div>
      </div>
    </div>

    {/* Xiaomi */}
    <div className='w-[354px] h-[239px] rounded-[22px] bg-[#F6F6F6] flex justify-center items-center'>
      <div className='flex flex-row gap-[26px] '>
        <div>
          <img src={xiaomi} alt="" className='w-[86px] h-[148px] object-cover' />
        </div>
        <div className='flex flex-col gap-[9px] w-[173px]'>
          <h3 className='text-[36px] text-[#1E1D1D] font-bold'>Xiaomi</h3>
          <p className='text-[#8B8E99] font-[500] font-[cursive] '>Xiaomi smart watches are produced by MI company.</p>
        </div>
      </div>
    </div>

    {/* BitFit */}
    <div className='w-[354px] h-[239px] rounded-[22px] bg-[#F6F6F6] flex justify-center items-center'>
      <div className='flex flex-row gap-[26px] '>
        <div>
          <img src={bitfit} alt="" className='w-[91px] h-[148px] object-cover' />
        </div>
        <div className='flex flex-col gap-[9px] w-[173px]'>
          <h3 className='text-[36px] text-[#1E1D1D] font-bold'>BitFit</h3>
          <p className='text-[#8B8E99] font-[500] font-[cursive] '>FitBit smart watches are best for there health and fitness features.</p>
        </div>
      </div>
    </div>
  </div>
}

export default Brands
