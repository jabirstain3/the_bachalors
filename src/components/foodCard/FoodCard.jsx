import { useToRoute } from "../../hooks/navigation/useToRoute";
import { FaFire } from "react-icons/fa6";
import { BiSolidLeaf } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const FoodCard = ({item}) => {
    const goTo = useToRoute()
    const location = useLocation();
    // console.log(item);
    // console.log(location.pathname);

    const { _id:id, foodName:name, foodImage:image, price, foodCategory, quantity } = item

    const handelDetails = () => {
        goTo(`/item/${id}`);
    }
    return (
        <div className="w-full max-w-[320px] md:max-w-[360px] bg-white hover:bg-[#e6c88c56] boxShadow rounded-xl shadow-lg">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-[1.4rem] font-semibold">{name}</h2>

                <div className="flex items-center gap-[5px]">
                    <BiSolidLeaf className="py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer"/>
                    <FaFire className="py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer"/>
                </div>
            </div>

            <img src={image} alt={name} className="w-full aspect-3/2" />

            <div className="p-4">
                <p className="text-[1rem] text-gray-700">{foodCategory}</p>

                { 
                    location.pathname === "/" ? ("") : (
                        <p className="text-[0.8rem] text-gray-600">Avilable: {quantity} pices</p>
                    )  
                }

                <div className="mt-2 flex 640px:flex-row flex-col gap-[15px] 640px:gap-[5px] 640px:items-center justify-between w-full">
                    <h3 className="text-[1.2rem] font-semibold text-[#ea6a12] flex items-center gap-[4px]">
                        ${price}

                        {/* <del className="text-[1rem] text-red-500 font-[300]">
                            $18.90
                        </del> */}
                    </h3>

                    <button onClick={handelDetails} className="py-2 px-6 border border-[#ea6a12] btn_bg text-white font-medium rounded-md">Details</button>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;