import RecommendedBooks from "../components/recommendedBooks/RecommendedBooks";
import BestThisMonth from "../components/bestThisMonth/BestThisMonth";
import Category from "../components/catogory/Category";
import Contact from "../components/contact/Contact";

function Home() {

  return (
    <>
      <div className="md:flex md:mb-20 mb-10 border-b-2 border-gray-200 md:border-none mt-12 md:max-h-[1012px] md:max-w-[1140px]">
        <RecommendedBooks />
        <BestThisMonth />
      </div>
      <Category />
      <Contact />
    </>
  );
}

export default Home;
