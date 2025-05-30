import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import MyItemCard from "../../components/myItemCard/MyItemCard";

const MyItemsLayout = () => {
    const [ loading, setLoading ] = useState(false)
    const [ items, setItems ] = useState([])
    
    const user = {
        email: "anna@example.com",
    }
    // console.log(user);
    
    document.title = `The Bachalors - Added product`;

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_DOMAIN}/${user.email}/items`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setItems(data);             
                setLoading(false)
            })
            .catch((error) => {
                    console.error('Error fetching Services:', error);
            });
    }, []);
    
    return (
        <div className="sectionBase mx-auto my-4">
            <h1 className="text-[2.5rem] font-bold text-center my-4">My Items</h1>
            {
                loading ? 
                ( 
                    <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                        <Loader /> 
                    </div> 
                ) :
                (
                    items && items.length > 0 ? 
                    (
                        <div className="flex flex-wrap justify-center gap-4 my-4">
                                {items.map((item) => (
                                    <MyItemCard key={item._id} item={item} />
                                ))}
                            </div>
                    ) : 
                    (
                        <div className="w-full border rounded-lg flex justify-center items-center h-[360px]">
                            <p className="">No product available.</p>
                        </div>
                    ) 
                )
            }
        </div>
    );
};

export default MyItemsLayout;