import Logo from '../../assets/Logo.svg'
import Heart from '../../assets/Heart.svg'

const Footer = () => {
  return (
    <footer className="md:py-8">
      <div className='flex md:flex-row flex-col-reverse'>
        <div className='md:w-[263px] pr-10 flex md:flex-none md:justify-normal md:items-start flex-col justify-center items-center'>
          <a href="/"><img className='mb-6' src={Logo} alt='logo' /></a>
          <p className='text-center md:text-left'>Build a modern and creative website with crealand</p>
          <div className="flex space-x-4 mt-4">
            <div className="bg-red-500 h-8 w-8 rounded-full"></div>
            <div className="bg-red-500 h-8 w-8 rounded-full"></div>
            <div className="bg-red-500 h-8 w-8 rounded-full"></div>
            <div className="bg-red-500 h-8 w-8 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 justify-around gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-8">Product</h4>
            <ul>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Landingpage</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Features</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Documentation</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Referral Program</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Pricing</p></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-8">Services</h4>
            <ul>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Documentation</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Design</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Themes</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Illustrations</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">UI Kit</p></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-8">Company</h4>
            <ul>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">About</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Terms</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Privacy Policy</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Careers</p></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-8">More</h4>
            <ul>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Documentation</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">License</p></li>
              <li className="mb-6"><p className="text-gray-600 hover:text-gray-900">Changelog</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:grid md:justify-center md:text-center md:mt-8 hidden">
        <div className='flex mb-4 justify-center rounded'>
          <img src={Heart} alt='Heart' />
        </div>
        <div className="mb-4">Copyright © 2024. Crafted with love.</div>
      </div>
    </footer>
  );
};

export default Footer;

