import RecommendedBooks from "../components/recommendedBooks/RecommendedBooks";
import BestThisMonth from "../components/bestThisMonth/BestThisMonth";
import Category from "../components/catogory/Category";
import Contact from "../components/contact/Contact";

function Home() {

  return (
    <>
      <div className="md:flex md:justify-between mb-20 mt-12 md:max-h-[1012px] md:max-w-[1140px]">
        <RecommendedBooks />
        <BestThisMonth />
      </div>
      <Category />
      <Contact />
    </>
  );
}

export default Home;
