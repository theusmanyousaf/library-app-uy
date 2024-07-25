import Logo from '../../assets/Logo.svg'
import Menu from '../../assets/ic_Menu.svg'
import { BiChevronDown } from "react-icons/bi";
import { useHeader } from './useHeader';
import { Link } from 'react-router-dom';

export default function Header() {
  
  const {menuOpen, handleMenuClick} = useHeader()

  return (
    <header className='lg:mx-[10.417%] md:mx-[4%] mx-6 md:mb-12'>
      <nav className='py-[18px] md:py-[26px] md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
          <span className='cursor-pointer'>
            <a href="/"><img src={Logo} alt='logo' /></a>
          </span>

          <span className='cursor-pointer md:hidden block'>
            <img data-name={menuOpen ? 'close' : 'menu'}
              onClick={handleMenuClick} src={Menu} alt="menu" />
          </span>

        </div>

        <ul className={`md:flex lg:gap-10 md:gap-4 font-semibold md:items-center z-[10] md:z-auto md:static bg-white absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-50 ${menuOpen ? 'top-[80px] opacity-100' : 'top-[-1000px] opacity-0'}`}>
          <li className='my-6 md:my-0'>
            <a href="/" className='text-gray-700 hover:text-blue-500'>Home</a>
          </li>
          <li className='my-6 md:my-0'>
            <button className="flex items-center text-gray-700 hover:text-blue-500">Landings<BiChevronDown /></button>
          </li>
          <li className='my-6 md:my-0'>
            <button className="flex items-center text-gray-700 hover:text-blue-500">Pages<BiChevronDown /></button>
          </li>
          <li className='my-6 md:my-0'>
            <a href="https://developers.google.com/books/docs/overview" className='text-gray-700 hover:text-blue-500'>Docs</a>
          </li>
          <li className='my-6 md:my-0'>
            <button className='text-gray-700 hover:text-blue-500'>Help</button>
          </li>
          <button className="text-blue-600 border-2 border-blue-600 font-bold py-3 px-[38px] max-h-12 rounded-md hover:bg-blue-50">
            <Link to="/search">Search</Link>
          </button>
        </ul>

      </nav>
    </header>
  )
}
