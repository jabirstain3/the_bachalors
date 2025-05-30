import { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { RxUpdate } from 'react-icons/rx';
import ConfiramRemovalModal from '../confiramRemovalModal/ConfiramRemovalModal';
import { useToRoute } from '../../hooks/navigation/useToRoute';

const MyItemCard = ({ item }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { _id:id, foodName: name, image, foodCategory , price, sold, quantity } = item;
    const goTo = useToRoute();

    const handalUpdateBtn = () => {
        goTo(`/item/${id}/update`, item)
    }

    const handalDeleteBtn = () => {
        setIsModalVisible(true)
    }

    return (
        <div className="border border-gray-300 bg-[#e6c88c56] p-4 w-full max-w-[320px] md:max-w-[360px] relative rounded-xl overflow-hidden">
            {/* product image */}
            <img alt={name} src={image} className="w-full aspect-square"/>

            {/* product details */}
            <div className="mt-2">
                <span className="text-gray-500 text-[0.9rem]">{foodCategory}</span>
                <h3 className="text-[1.1rem] font-medium mt-2">{name}</h3>
                <p className="text-[0.8rem] text-gray-600">Avilable: {quantity} pices</p>
                <p className="text-[0.8rem] text-gray-600">total sold: {sold} pices</p>
                <p className="text-[1.1rem] font-semibold mt-1 text-[#ea6a12]">${price}</p>

                <div className="flex items-center justify-between mt-4 gap-[15px]">
                    <button onClick={handalUpdateBtn} className="py-[9px] px-4 text-white rounded-2xl grow justify-center flex items-center gap-[0.5rem] btn_bg text-[1rem] font-medium transition-all duration-200" >
                        <RxUpdate className="text-[1.3rem]"/>
                        Update
                    </button> 

                    <button onClick={handalDeleteBtn} className="py-[9px] px-4 text-white rounded-2xl grow justify-center flex items-center gap-[0.5rem] btn_bg text-[1rem] font-medium transition-all duration-200">
                        <AiTwotoneDelete className="text-[1.3rem]"/>
                        Delete
                    </button>
                </div>
            </div>

            {
                isModalVisible && <ConfiramRemovalModal id={id} set={"items"} isModalOpen={isModalVisible} setIsModalOpen={setIsModalVisible}/>
            }
        </div>
    );
};

export default MyItemCard;