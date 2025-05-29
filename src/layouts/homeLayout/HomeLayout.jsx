import Hero from "../../components/hero/Hero";
import TopFoods from "../../components/topFoods/TopFoods";

const HomeLayout = () => {
    return (
        <div className="w-full ">
            <Hero />
            <TopFoods />
        </div>
    );
};

export default HomeLayout;