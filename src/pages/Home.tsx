import RecommendedBooks from "../components/recommendedBooks/RecommendedBooks";
import BestThisMonth from "../components/bestThisMonth/BestThisMonth";
import Category from "../components/catogory/Category";
import Contact from "../components/contact/Contact";

function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row md:mb-20 mb-10 md:mt-12 mt-[22px] lg:gap-8 md:max-h-[1012px] md:ml-[10.209%] md:mr-[10.417%]">
        <RecommendedBooks />
        <BestThisMonth />
      </div>
      <Category />
      <Contact />
    </>
  );
}

export default Home;
