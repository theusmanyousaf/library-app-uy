import Logo from '../../assets/logo.svg';
import Menu from '../../assets/icMenu.svg';
import { BiChevronDown } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useHeader } from './useHeader';
import { Link } from 'react-router-dom';

export default function Header() {

  const { menuOpen, handleMenuClick } = useHeader();

  const menuItems = [
    { label: 'Home', to: '/', className: 'text-gray-700 hover:text-blue-500', icon: null },
    { label: 'Landings', to: '#', className: 'flex items-center text-gray-700 hover:text-blue-500', icon: <BiChevronDown /> },
    { label: 'Pages', to: '#', className: 'flex items-center text-gray-700 hover:text-blue-500', icon: <BiChevronDown /> },
    { label: 'Docs', to: 'https://developers.google.com/books/docs/overview', className: 'text-gray-700 hover:text-blue-500', icon: null, external: true },
    { label: 'Help', to: '#', className: 'text-gray-700 hover:text-blue-500', icon: null },
    { label: 'Search', to: '/search', className: 'text-blue-600 border-2 border-blue-600 font-bold lg:py-3 py-2 lg:px-[38px] px-6 max-h-12 md:w-auto max-w-28 rounded-md hover:bg-blue-50', icon: null }
  ];

  return (
    <header className='lg:mx-[10.417%] md:mx-[4%] mx-6 md:mb-12'>
      <nav className='py-[18px] md:py-[26px] md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
          <span className='cursor-pointer'>
            <Link to="/"><img src={Logo} alt='logo' /></Link>
          </span>

          <span className='cursor-pointer md:hidden block'>
            {menuOpen
              ? <GrClose onClick={handleMenuClick} size={24} />
              : <img data-name={menuOpen ? 'close' : 'menu'}
                onClick={handleMenuClick} src={Menu} alt="menu" />}
          </span>
        </div>

        <ul className={`flex md:flex-row flex-col lg:gap-10 gap-4 font-semibold md:items-center z-[10] md:z-auto md:static bg-white absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-50 ${menuOpen ? 'top-[80px] opacity-100' : 'top-[-1000px] opacity-0'}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className={item.className}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noreferrer' : ''}
              >
                {item.label}{item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
