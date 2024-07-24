import { FaArrowRight } from "react-icons/fa";
import { categories } from "../../constants/category";

const Category = () => {
  return (
    <div className="md:pt-[60px] border-t border-gray-300 flex flex-col md:mx-[10.417%] mx-[15px] items-center justify-center relative">
      <div className="grid grid-cols-2 xl:grid-cols-4 mt-[55px] md:mt-0 md:gap-[26px] gap-2.5">
        {categories.map((category, index) => (
          <div key={index} className="rounded-lg md:shadow-sm border md:hover:shadow-lg md:transition-shadow flex flex-col items-center justify-between">
            <div className="flex items-center md:justify-between md:my-10 mt-5 mb-4 mx-[52px] md:mx-[99.7px]">
              <img className='md:border-2 md:border-dashed md:border-gray-500' width={64} height={64} src={category.icon} alt={category.title} />
            </div>
            <p className="md:text-[22px] lg:h-[30.4px] text-base leading-6 text-gray-900 md:font-semibold font-bold italic text-center mx-6 mb-2.5 sm:mb-3">{category.title}</p>
            <p className="text-xs mb-5 sm:mb-[30px] md:text-base text-gray-500 text-center">{category.description}</p>
          </div>
        ))}
      </div>
      <div className="md:absolute bg-white rounded-full md:w-14 md:h-14 w-12 h-12 shadow-md md:mt-1 flex items-center justify-center md:-right-7 mt-9"><FaArrowRight size={15.75} /></div>
    </div>
  );
};

export default Category;

