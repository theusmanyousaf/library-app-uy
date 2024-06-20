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
    <div className="py-12 border-t-2 border-gray-200">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {categories.map((category, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 border-dashed boder-2 border-gray-200 mb-4">
                    <img src={category.icon} alt={category.title} />
                  </div>
                  <dt>
                    <p className="text-lg leading-6 font-medium text-gray-900 text-center">{category.title}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 text-center">{category.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
  );
};

export default Category;

