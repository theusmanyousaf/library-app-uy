import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex xl:flex-row flex-col md:justify-between gap-8 md:items-center bg-gradient-to-l from-blue-500 to-blue-800 pl-6 pr-4 pb-7 pt-[26px] md:px-[60px] md:pt-[60px] md:pb-20 mt-24 md:rounded-lg lg:mx-[10.417%] md:mx-[4%]">
            <div className='md:flex-none'>
                <h2 className="text-4xl italic font-bold text-white hidden md:block">
                    Be the First to know <br />Our Promo before others!
                </h2>
                <h2 className="italic text-3xl font-bold text-white block md:hidden">
                    Be the First to know Our Promo before others!
                </h2>
            </div>
            <div className="flex flex-col justify-between md:flex-row md:w-[447px] md:mr-[3px] md:h-14 bg-white md:p-1 p-3 rounded-lg">
                <div className="flex items-center md:rounded-l-md pl-2 md:h-auto h-[46px]">
                    <FaEnvelope className="text-slate-700 w-5 h-4 " />
                    <input
                        name='email'
                        type="email"
                        placeholder="Your Email"
                        autoComplete='off'
                        className="ml-2 md:w-full focus:outline-none overflow-hidden"
                    />
                </div>
                <button className="bg-yellow-500 text-white md:right-0 font-bold text-base items-center md:px-[30.38px] md:py-3 py-2.5 md:rounded-r-md rounded-md hover:bg-yellow-600">Register Now</button>
            </div>
        </div>
    );
};

export default Contact;
