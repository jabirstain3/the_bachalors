import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../loader/Loader';
import { useToRoute } from '../../hooks/navigation/useToRoute';
import { AuthContext } from '../../contexts/AuthContextProvider';

const OrderItem = () => {
    const { state } = useLocation();
    const [loading, setLoading] = useState(false);
    const goTo = useToRoute();
    const { user } = useContext(AuthContext);

    const { itemId, itemName, itemImage, itemPrice, itemQuantity } = state || {};
    const userName = user?.displayName || "User"; 
    const UserEmail = user?.email || "user@gmail.com";
    const orderQuantity = itemQuantity || 1;

    const orderDate = new Date().toLocaleDateString(); 
    const totalPrice = (itemPrice * orderQuantity).toFixed(2);

    const handelPurchaseComfirmation = () => {
        const order = {
            ItemId: itemId,
            foodName: itemName,
            price: itemPrice,
            quantit: orderQuantity,
            buyersName: userName,
            buyersEmail: UserEmail,
            buyingDate: orderDate,
        };
        console.log(order);

        setLoading(true);

        fetch(`${ import.meta.env.VITE_DOMAIN}/orders`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {           
                setLoading(false)
                console.log(data);
                if(data.insertedId) {
                    // toast("success" , "Product Added Successfully.")
                    goTo('/items')
                }
            })
            .catch((error) => {
                    console.error('Error fetching Services:', error);
            });
    }

    return (
        <div className='max-w-xl mx-auto px-4 py-8'>
            <h2 className="text-[2.25rem] font-semibold mb-6">Your order</h2>

            {
                loading ? ( 
                    <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                        <Loader /> 
                    </div> 
                ) :
                ( 
                    <div className="">
                        <div className="border border-gray-400 rounded-md  bg-white">
                            <div className="flex flex-row items-center gap-4 p-4">
                                <div className="border relative border-gray-400 w-max rounded-md bg-white">
                                    {itemImage ? (
                                        <img src={itemImage} alt={itemName} className="w-20 h-20 object-cover rounded"/>
                                    ) : (
                                        <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded text-gray-400 text-xs">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-xl text-[#ea6a12]">{itemName}</h3>
                                    <div className="flex items-center gap-[30px] mt-2">
                                        <p className="text-sm text-gray-500">Quantity: <b className="text-gray-800">{itemQuantity}</b></p>
                                    </div>
                                </div>
                                <span className="font-medium">${totalPrice}</span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-2 border-t border-gray-400 pt-6">
                            <div className="flex justify-between">
                                <span className="text-[1rem] text-gray-500">Name</span>
                                <span className="text-[1rem] font-medium text-gray-800">{userName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[1rem] text-gray-500">Email</span>
                                <span className="text-[1rem] font-medium text-gray-800">{UserEmail}</span>
                            </div>
                            <div className="flex justify-between pb-3">
                                <span className="text-[1rem] text-gray-500">Date</span>
                                <span className="text-[1rem] font-medium text-gray-800">{orderDate}</span>
                            </div>
                            <div className="border-t border-gray-400 py-4">            
                                {/* <div className="mt-6">
                                    <h3 className="font-medium mb-2 text-[1rem] text-gray-800">Discount Code</h3>
                                </div> */}
                                <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span className="text-[1rem] font-medium text-gray-800">${totalPrice}</span>
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <button className="f py-3 px-4 rounded-lg w-xs font-medium text-white btn_bg" onClick={handelPurchaseComfirmation} >
                                    Confirm Purchase
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default OrderItem;