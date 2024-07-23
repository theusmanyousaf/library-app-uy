import RecommendedBooks from "../components/recommendedBooks/RecommendedBooks";
import BestThisMonth from "../components/bestThisMonth/BestThisMonth";
import Category from "../components/catogory/Category";
import Contact from "../components/contact/Contact";

function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row md:mb-20 mb-10 md:mt-12 mt-[22px] gap-14 md:gap-8 md:max-h-[1012px] md:mx-1.5">
        <RecommendedBooks />
        <BestThisMonth />
      </div>
      <Category />
      <Contact />
    </>
  );
}

export default Home;
