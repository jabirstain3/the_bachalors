import { useToRoute } from "../../hooks/navigation/useToRoute";
import FoodCard from "../foodCard/FoodCard";
import Loader from "../loader/Loader";
import { useLoaderData } from "react-router-dom";

const TopFoods = ( ) => {
    const goTo = useToRoute();
    const items = useLoaderData();
    // console.log(items);

    const handalViewAllFoods = () => {
        goTo('/items');
    }

    return (
        <div className="sectionBase mx-auto my-4">
            <h1 className="text-[2.5rem] font-bold text-center my-4">Best Sellers</h1>

            <div className="flex flex-wrap justify-center gap-4">
                { 
                    items && items?.length > 0 ? 
                    (
                        items?.map((item) => <FoodCard key={item.id || item._id} item={item} />)
                    ) : 
                    items && items?.length === 0 ? (
                        <div className="w-full border bg-white rounded-lg flex justify-center items-center h-[360px]">
                            <p className="">No items available.</p>
                        </div>
                    ) : 
                    (
                        <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                            <Loader />
                        </div>
                    )
                }
                
            </div>

            <div className="w-full flex items-center justify-center mt-8">
                <button onClick={handalViewAllFoods} className="w-40  py-2 px-6 btn_bg text-white rounded-full transition-all duration-200 border">View all foods</button>
            </div>
        </div>
    );
};

export default TopFoods;