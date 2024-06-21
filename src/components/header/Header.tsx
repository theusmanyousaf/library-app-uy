import { useState } from 'react';
import Logo from '../../assets/Logo.svg'
import Menu from '../../assets/ic_Menu.svg'
import { BiChevronDown } from "react-icons/bi";

export default function Header() {
  const [landingsOpen, setLandingsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='md:max-w-[1140px]'>
      <nav className='py-8 md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
          <span className='cursor-pointer'>
            <a href="/"><img src={Logo} alt='logo' /></a>
          </span>

          <span className='cursor-pointer md:hidden block'>
            <img data-name={menuOpen ? 'close' : 'menu'}
              onClick={handleMenuClick} src={Menu} alt="menu" />
          </span>

        </div>

        <ul className={`md:flex md:items-center z-[10] md:z-auto md:static bg-white absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-500 ${menuOpen ? 'top-[80px] opacity-100' : 'top-[-1000px] opacity-0'}`}>
          <li className='mx-4 my-6 md:my-0'>
            <a href="/" className='text-gray-700 hover:text-blue-500'>Home</a>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <button onClick={() => setLandingsOpen(!landingsOpen)} className="flex items-center text-gray-700 hover:text-blue-500">Landings<BiChevronDown /></button>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <button onClick={() => setPagesOpen(!pagesOpen)} className="flex items-center text-gray-700 hover:text-blue-500">Pages<BiChevronDown /></button>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <a href="/" className='text-gray-700 hover:text-blue-500'>Docs</a>
          </li>
          <li className='mx-4 my-6 md:my-0'>
            <a href="/" className='text-gray-700 hover:text-blue-500'>Help</a>
          </li>
          <button className="text-blue-600 border-2 border-blue-600 ml-4 px-4 py-1 rounded-md hover:bg-blue-50">
            <a href="/search">Search</a>
          </button>
        </ul>

      </nav>
    </header>
  )
}
