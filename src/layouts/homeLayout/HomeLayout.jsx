import Category from "../../components/category/Category";
import Customerreview from "../../components/customerReview/Customerreview";
import Hero from "../../components/hero/Hero";
import TopFoods from "../../components/topFoods/TopFoods";

const HomeLayout = () => {
    return (
        <div className="w-full ">
            <Hero />
            <Category />
            <TopFoods />
            <Customerreview />
        </div>
    );
};

export default HomeLayout;