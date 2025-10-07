import logo from '../images/logo.png'

function Header() {
  return <header className=" bg-[#0B0B0B]">
    <nav className="container max-w-[1100px] mx-auto py-[23px] flex flex-row justify-between">
      <div className="flex flexx-row items-center">
        <img src={logo} alt="Logo" className="w-[27px] h-[27px]" />
        <p className="font-[500] font-[cursive] text-white">Mohid</p>
      </div>
      <div className="space-x-[27px]">
        <a href="#" className="font-[500] font-[cursive] text-[#8B8E99]" >Home</a>
        <a href="#" className="font-[500] font-[cursive] text-[#8B8E99]" >Brands</a>
        <a href="#" className="font-[500] font-[cursive] text-[#8B8E99]" >Recent Products</a>
        <a href="#" className="font-[500] font-[cursive] text-[#8B8E99]" >Contact</a>
        <a href="#" className="font-[500] font-[cursive] text-[#8B8E99]" >About</a>
      </div>  
      <div className="space-x-4">
        <a href="#" className="text-white text-[20px]" ><i className='bx  bx-search-alt'  ></i> </a>
        <a href="#" className="text-white text-[20px]" ><i className='bx  bx-user-circle'  ></i> </a>
        <a href="#" className="text-white text-[20px]" ><i className='bx  bx-cart'  ></i> </a>
      </div>
    </nav>
  </header>
}

export default Header