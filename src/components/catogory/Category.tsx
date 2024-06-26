import { categories } from "../../constants/category";

const Category = () => {
  return (
    <div className="md:pt-10 border-t-2 border-gray-200 md:max-w-[1140px]">
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-4 mt-5 md:w-auto w-[270px]">
        {categories.map((category, index) => (
          <div key={index} className="md:p-5 p-4 w-[140px] h-[182px] md:w-[265px] md:h-60 md:rounded-lg md:shadow-sm border md:hover:shadow-lg md:transition-shadow flex flex-col items-center justify-between">
            <div className="flex items-center md:justify-between md:py-10">
              <img className='border-2 border-dashed border-blue-500 md:w-16 w-9 md:h-16 h-9 mb-4 md:mb-0' src={category.icon} alt={category.title} />
            </div>
            <p className="md:text-lg text-base leading-6 font-medium text-gray-900 text-center">{category.title}</p>
            <p className="text-xs mt-2 md:text-base text-gray-500 text-center">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

