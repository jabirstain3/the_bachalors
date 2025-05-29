import { useEffect, useState } from 'react';
import Loader from '../../components/loader/Loader';
import FoodCard from '../../components/foodCard/FoodCard';

const DisplayAllProductsLayout = () => {
    const [ loading, setLoading ] = useState(false)
    const [ items, setItems ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState('');
    
    document.title = "The Bachalors - All items";


    const filteredItems = items.filter((item) => item.foodName.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_DOMAIN}/items`)
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
        <div className="">
            {/* Page Title */}
            <div className=" py-20 flex justify-center items-center" style={{ backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fbackground%2F20230528%2Foriginal%2Fpngtree-table-with-many-indian-foods-picture-image_2778309.jpg&f=1&nofb=1&ipt=f63bc7998d790994dc80ef197909999b6d442fdad679016ec4ece11c6e87ab1a")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode:'overlay', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
                <h1 className="text-4xl font-bold text-center text-[#ea6a12]">All Foods</h1>
            </div>

            <div className="sectionBase relative mx-auto my-6">

                {/* Search Input */}
                <div className="max-w-md mx-auto mb-6">
                    <input type="text" placeholder="Search for food..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-white px-4 py-2 border rounded-lg shadow-sm focus:outline-none" />
                </div>

                {
                    loading ? 
                    ( <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                        <Loader /> 
                    </div> ) :
                    ( filteredItems <= 0 ? (
                            <div className="w-full bg-white rounded-lg flex justify-center items-center h-[360px] my-10">
                                <p className="">No items available.</p>
                            </div>
                        ):
                        (
                            <div className="flex flex-wrap justify-center gap-4 my-10">
                            {
                                filteredItems?.map((item) => (<FoodCard key={item.id || item._id} item={item} />))
                            }
                        </div>
                        ) )
                }
            </div>
        </div>
    );
};

export default DisplayAllProductsLayout;