import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="md:flex md:justify-between md:items-center bg-gradient-to-l from-blue-600 to-blue-900 pl-6 pr-4 md:px-[60px] py-[70px] mt-20 md:rounded-lg md:max-w-[1140px] w-[270px] md:w-auto">
            <div className='md:flex-none'>
                <h2 className="md:text-4xl text-2xl font-semibold text-white pt-1 md:mb-5 mb-3">
                    Be the First to know <br />Our Promo before others!
                </h2>
            </div>
            <div className="flex flex-col justify-between md:flex-row md:w-[447px] md:mr-[3px] md:h-14 bg-white p-1 rounded-lg">
                <div className="flex items-center md:rounded-l-md pl-2 md:h-auto h-12">
                    <FaEnvelope size={20} className="text-black min-w-5" />
                    <input
                        name='email'
                        type="email"
                        placeholder="Your Email"
                        className="ml-2 md:w-full focus:outline-none overflow-hidden"
                    />
                </div>
                <button className="bg-yellow-500 text-white md:right-0 md:px-4 py-2 md:rounded-r-md rounded-md hover:bg-yellow-600 transition-colors">Register Now</button>
            </div>
        </div>
    );
};

export default Contact;
