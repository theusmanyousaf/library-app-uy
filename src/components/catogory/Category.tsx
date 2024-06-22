import Finance from '../../assets/iconspace_Presentation Chart Up-1.png'
import Book from '../../assets/iconspace_Book_3 Copy.png'
import Diamond from '../../assets/iconspace_Diamond-1.png'
import Group from '../../assets/iconspace_Group-1.png'

const categories = [
  {
    title: 'Business & Finance',
    description: 'Books about Business World',
    icon: Finance
  },
  {
    title: 'Self Improvement',
    description: 'Books for Motivate Yourself',
    icon: Diamond
  },
  {
    title: 'Novel Telenovela',
    description: 'Books about Great Story',
    icon: Book
  },
  {
    title: 'Skill in Future',
    description: 'Books for Self Preparation',
    icon: Group
  },
];

const Category = () => {
  return (
    <div className="py-10 border-t-2 border-gray-200 md:max-w-[1140px]">
      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="p-5 rounded-lg shadow-sm border hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-between py-10">
                  <img className='border-2 border-dashed border-blue-500 w-16 h-16' src={category.icon} alt={category.title} />
                </div>
                <p className="text-lg leading-6 font-medium text-gray-900 text-center">{category.title}</p>
                <p className="mt-2 text-base text-gray-500 text-center">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

