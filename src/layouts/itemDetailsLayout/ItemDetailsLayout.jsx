import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailsCard from "../../components/itemDetailsCard/ItemDetailsCard";
import Loader from "../../components/loader/Loader";


const ItemDetailsLayout = () => {    
    const [loading, setLoading] = useState(false);
    const [ item, setItem ] = useState({})
    const params = useParams();
    // console.log(params);

    document.title = `The Bachalors - ${item.foodName || "item"}`;


    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_DOMAIN}/items/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setItem(data);             
                setLoading(false)
            })
            .catch((error) => {
                    console.error('Error fetching Services:', error);
            });
    }, []);

    return (
        <div className="sectionBase mx-auto">
            {
                loading ? 
                ( <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                    <Loader /> 
                </div> ) :
                ( <ItemDetailsCard item={item} /> )
            }
        </div>
    );
};

export default ItemDetailsLayout;