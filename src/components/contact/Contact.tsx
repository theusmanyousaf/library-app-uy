import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gradient-to-l from-blue-600 to-blue-900 px-12 py-12 my-20 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-3xl font-semibold text-white mb-6 lg:mb-0 lg:mr-6">
                        Be the First to know <br /> Our Promo before others!
                    </h2>
                    <div className="flex w-full lg:w-auto bg-white p-1 rounded-lg">
                        <div className="flex items-center  rounded-l-md pl-4">
                            <FaEnvelope className="text-gray-500" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="ml-2 w-full lg:w-auto focus:outline-none"
                            />
                        </div>
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600 transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
