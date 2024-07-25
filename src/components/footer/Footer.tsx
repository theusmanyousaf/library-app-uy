import Logo from '../../assets/Logo.svg'
import Heart from '../../assets/Heart.svg'

const Footer = () => {
  return (
    <footer className="lg:mx-[10.417%] md:mx-[6%] md:pb-20 md:-mt-5 md:pt-32 pt-12 pb-16">
      <div className='flex md:flex-row flex-col-reverse lg:gap-[30px]'>
        <div className='lg:w-[263px] md:w-52 gap-y-4 md:gap-y-7 flex md:flex-none flex-col justify-center md:justify-start md:items-start items-center pl-6 md:pl-0 pr-[33px] md:pr-0'>
          <a href="/"><img className='h-6 md:h-auto w-auto' src={Logo} alt='logo' /></a>
          <p className='text-center text-sm md:text-base md:text-left text-gray-500 px-1 md:mr-8 pt-1 pb-2.5'>Build a modern and creative website with crealand</p>
          <div className="flex space-x-4 md:space-x-1.5">
            <div className="bg-red-500 h-10 w-10 rounded-full"></div>
            <div className="bg-red-500 h-10 w-10 rounded-full"></div>
            <div className="bg-red-500 h-10 w-10 rounded-full"></div>
            <div className="bg-red-500 h-10 w-10 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-[30px] justify-around pl-6 md:pl-0">
          <div className="mb-[39px] md:mb-0">
            <h4 className="md:text-lg text-base font-bold mb-5 md:mb-[31px] md:h-[25px]">Product</h4>
            <ul className='text-sm lg:text-base'>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Landingpage</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Features</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Documentation</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Referral Program</p></li>
              <li><p className="text-gray-600 hover:text-gray-900">Pricing</p></li>
            </ul>
          </div>
          <div className='mb-[39px] md:mb-0'>
            <h4 className="md:text-lg text-base font-bold mb-5 md:mb-[31px] md:h-[25px]">Services</h4>
            <ul className='text-sm lg:text-base'>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Documentation</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Design</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Themes</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Illustrations</p></li>
              <li><p className="text-gray-600 hover:text-gray-900">UI Kit</p></li>
            </ul>
          </div>
          <div className="mb-[47px] md:mb-0">
            <h4 className="md:text-lg text-base font-bold mb-5 md:mb-[31px] md:h-[25px]">Company</h4>
            <ul className='text-sm lg:text-base'>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">About</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Terms</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Privacy Policy</p></li>
              <li><p className="text-gray-600 hover:text-gray-900">Careers</p></li>
            </ul>
          </div>
          <div className="mb-[47px] md:mb-0">
            <h4 className="md:text-lg text-base font-bold mb-5 md:mb-[31px] md:h-[25px]">More</h4>
            <ul className='text-sm lg:text-base'>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">Documentation</p></li>
              <li className="mb-[15px] md:mb-6"><p className="text-gray-600 hover:text-gray-900">License</p></li>
              <li><p className="text-gray-600 hover:text-gray-900">Changelog</p></li>
            </ul>
          </div>
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

