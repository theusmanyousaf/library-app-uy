import Logo from '../../assets/logo.svg';
import Heart from '../../assets/heart.svg';
import { footerData } from '../../constants/footerData';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="lg:mx-[10.417%] md:mx-[6%] md:pb-20 md:-mt-5 md:pt-32 pt-12 pb-16">
      <div className='flex md:flex-row flex-col-reverse lg:gap-[30px]'>
        <div className='lg:w-[263px] md:w-52 gap-y-4 md:gap-y-7 flex md:flex-none flex-col justify-center md:justify-start md:items-start items-center pl-6 md:pl-0 pr-[33px] md:pr-0'>
          <Link to="/"><img className='h-6 md:h-auto w-auto' src={Logo} alt='logo' /></Link>
          <p className='text-center text-sm md:text-base md:text-left text-gray-500 px-1 md:mr-8 pt-1 pb-2.5'>Build a modern and creative website with crealand</p>
          {
            <div className="flex space-x-4 md:space-x-1.5">
              {Object.entries(footerData).map((name,i)=>
                <div key={i} className="bg-red-500 h-10 w-10 rounded-full"></div>
              )}
            </div>
          }
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:gap-[30px] md:gap-4 gap-y-[39px] justify-around pl-6 md:pl-0 mb-[47px] md:mb-0">
          {Object.entries(footerData).map(([sectionName, items]) => (
            <div className='lg:w-[165px]' key={sectionName}>
              <h4 className="md:text-lg text-base font-bold mb-5 md:mb-[31px] md:h-[25px]">{sectionName}</h4>
              <ul className='flex flex-col gap-[15px] md:gap-6 text-sm lg:text-base'>
                {items.map((item, index) => (
                  <li key={index}>
                    <p className="text-gray-600 hover:text-gray-900">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="md:grid md:justify-center md:text-center md:mt-24 gap-6 hidden">
        <div className='flex justify-center rounded'>
          <img src={Heart} alt='Heart' />
        </div>
        <div className='text-base text-gray-500 font-semibold'>Copyright © 2024. Crafted with love.</div>
      </div>
    </footer>
  );
};

export default Footer;
