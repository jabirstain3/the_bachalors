import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const UpdateItemLayout = () => {
    const [ loading, setLoading ] = useState(false);
    const [ item, setItem ] = useState({});
    const { id } = useParams();
    const user = {
        displayName: "Anna",
        email: "anna@example.com",
    }
    // console.log(id);

    document.title = "The Bachalors - Update Food item";

    const { foodName:name, foodImage:image, foodCategory, origin, price, quantity, description } = item;
        const { displayName: userName, email, } = user || { displayName:"User", email: "notavailavle", };

    const handalUpdateItem = (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = new FormData(e.target);

        const updateditem = {
            foodName: formData.get("name"),
            foodImage: formData.get("image"),
            foodCategory: formData.get("category"),
            quantity: formData.get("quantity"),
            sold: item.sold || 0,
            price: formData.get("price"),
            origin: formData.get("origin"),
            description: formData.get("description"),
            usersEmail: email,
            usersName: userName,
        };
        // console.log(updateditem);

        e.target.reset();

        fetch(`${ import.meta.env.VITE_DOMAIN}/items/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateditem)
        })
            .then(res => res.json())
            .then(data => {           
                setLoading(false)
                // console.log(data);
                setItem(updateditem);
                if(data.modifiedCount > 0) {
                    // toast("success" , "Product Updated Successfully.");
                }
            })
            .catch((error) => {
                    console.error('Error fetching Services:', error);
            });
    }

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_DOMAIN}/items/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setItem(data);             
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching Services:', error);
        });
    }, [id]);

    return (
        <div className="sectionBase mx-auto my-4">
            <h1 className="text-[2.2rem] font-bold md:text-center border-b-2 border-gray-300">Update Item</h1>
            {
                loading ? 
                ( <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                    <Loader /> 
                </div> ) :
                ( 
                    <form action="" className="flex flex-col gap-2 items-start md:items-end w-full p-2" onSubmit={handalUpdateItem}>
                        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-10 justify-center ">
                            <div className="w-full md:w-[44%] flex flex-col gap-2">
                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Food Name</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="text" name="name" defaultValue={name} required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Category</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="text" name="category" defaultValue={foodCategory} required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Origin (country)</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="text" name="origin" defaultValue={origin} required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Description</label>
                                    <textarea className="border w-full rounded-md mt-1 px-4 py-1.5" rows="6"  type="text" name="description" defaultValue={description} required />
                                </div>
                            </div>    

                            <div className="w-full md:w-[44%] flex flex-col gap-2">
                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Image URL</label>
                                    <input className="border w-full rounded-md px-4 py-1.5" type="text" name="image" defaultValue={image} required />

                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Stock</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="number" name="quantity" defaultValue={quantity} required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Price</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="number" name="price" defaultValue={price} required />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-48 my-4 px-4 py-2 text-white rounded-md grow justify-center flex items-center gap-[0.5rem] btn_bg text-[1rem] font-medium transition-all duration-200">Submit</button>
                    </form>
                )
            }
        </div>
    );
};

export default UpdateItemLayout;