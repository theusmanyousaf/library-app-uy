import { FaArrowRight } from "react-icons/fa";
import { categories } from "../../constants/category";

const Category = () => {
  return (
    <div className="md:pt-[60px] border-t border-gray-300 md:mx-1.5 flex flex-col items-center gap-9 justify-center relative">
      <div className="grid grid-cols-2 md:grid-cols-4 mt-[55px] md:mt-0 md:gap-6 gap-2.5">
        {categories.map((category, index) => (
          <div key={index} className="md:p-5 p-4 w-[140px] h-[182px] md:w-[265px] md:h-60 rounded-lg md:shadow-sm border md:hover:shadow-lg md:transition-shadow flex flex-col items-center justify-between">
            <div className="flex items-center md:justify-between md:py-10">
              <img className='md:border-2 md:border-dashed md:border-gray-500 md:w-16 w-9 md:h-16 h-9 mb-4 md:mb-0' src={category.icon} alt={category.title} />
            </div>
            <p className="md:text-xl text-base leading-6 text-gray-900 md:font-semibold font-bold italic text-center">{category.title}</p>
            <p className="text-xs mt-2 md:text-base text-gray-500 text-center">{category.description}</p>
          </div>
        ))}
      </div>
      <div className="md:absolute bg-white rounded-full md:w-14 md:h-14 w-12 h-12 shadow-md md:mt-1 flex items-center justify-center right-0 md:-mr-6"><FaArrowRight size={15.75} /></div>
    </div>
  );
};

export default Category;

