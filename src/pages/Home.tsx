import RecommendedBooks from "../components/recommendedBooks/RecommendedBooks";
import BestThisMonth from "../components/bestThisMonth/BestThisMonth";
import Category from "../components/catogory/Category";
import Contact from "../components/contact/Contact";

function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row md:mb-20 mb-10 md:mt-12 mt-[22px] md:gap-4 lg:gap-8 md:max-h-[1012px] md:mx-[4%] lg:ml-[10.209%] lg:mr-[10.417%]">
        <RecommendedBooks />
        <BestThisMonth />
      </div>
      <Category />
      <Contact />
    </>
  );
}

export default Home;
