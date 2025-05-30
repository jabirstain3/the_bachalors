import { FaStar } from "react-icons/fa6"
import { useToRoute } from "../../hooks/navigation/useToRoute";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";

const ItemDetailsCard = ({ item }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);    
    const goTo = useToRoute();
    // console.log(item);
    const { user } = useContext(AuthContext);
    

    document.title = `The Bachalors - ${item.foodName || "Item Details"}`;

    const { _id:id = "3862soE5gj6", foodName: name = "", images = "", description = "", foodCategory = "", price = "", sold = "", quantity, usersEmail } = item;

    const order = {
        itemId: id,
        itemName: name,
        itemImage: images,
        itemPrice: price,
        itemQuantity: 1,
    };

    const handalUpdateBtn = () => {
        goTo(`/item/${id}/update`, item)
    }

    const handalDeleteBtn = () => {
        setIsModalVisible(true)
    }

    const handelPurchase = () => {
        goTo(`/item/${id}/puechase`, order );
    }

    return (
        <div className="mx-auto px-2 py-10 sm:px-4 md:py-12">
            {
                item && 
                ( <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4">
                        <div className="relative aspect-square">
                            <div className="relative h-full">
                                <img src={images} alt={name} className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="w-4 h-4 fill-[#ea6a12]"/>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">11 Reviews</span>
                        </div>

                        <h1 className="text-[1.6rem] md:text-[1.9rem] text-gray-800 font-semibold">{name}<p className="text-gray-400 text-[0.9rem]">{foodCategory}</p></h1>
                        

                        <p className="text-gray-600 text-[0.9rem]">{description}</p>

                        <div className="border-t border-t-gray-200 pt-4">
                            <p className="font-medium text-[0.9rem] text-gray-600">Sold
                            : <span className="text-[#ea6a12]">{sold}</span></p>
                        </div>

                        <p className="font-medium text-[0.9rem] text-gray-600">Available
                            : <span className="text-[#ea6a12]">{quantity}</span></p>

                        <div className="flex items-center gap-3">
                            <span className="text-[1.5rem] text-[#ea6a12] font-medium">${price}</span>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            {
                                usersEmail === user?.email ? (
                                    <div className="flex-1 flex items-center gap-4">
                                        <button onClick={handalUpdateBtn} className="w-1/2 py-3 px-4 rounded-lg  font-medium text-white btn_bg" >
                                            Update
                                        </button> 
                                    
                                        <button onClick={handalDeleteBtn} className="w-1/2 py-3 px-4 rounded-lg  font-medium text-white btn_bg">
                                            Delete
                                        </button>
                                    </div>
                                ):
                                (
                                    <button className="flex-1 py-3 px-4 rounded-lg  font-medium text-white btn_bg" onClick={handelPurchase}>
                                        Purchase
                                    </button>
                                )}
                        </div>
                    </div>
                </div> )
            }
                        
            {
                isModalVisible && <ConfiramRemovalModal id={id} set={"items"} isModalOpen={isModalVisible} setIsModalOpen={setIsModalVisible}/>
            }
        </div>
    );
};

export default ItemDetailsCard;
