import { navItems } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className='justify-between items-center w-full py-5 sm:px-10 px-5 flex'>
      <img src={appleImg} alt="Apple Logo" width={14} height={18} />
      <nav className='flex w-full screen-max-width'>
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navItems.map((item) => (
            <div key={item} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>{item}</div>
          ))}
        </div>
      </nav>
      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm: flex-1'>
        <img src={searchImg} alt="Search Images" width={18} height={18} />
        <img src={bagImg} alt="Bag Images" width={18} height={18} />
      </div>
    </header>
  );
};

export default Navbar;