import { useState } from "react";
import Loader from "../../components/loader/Loader";

const CreateItemLayout = () => {
    const [loading, setLoading] = useState(false);
    const user = {
        displayName: "Anna",
        email: "anna@example.com",
    }

    document.title = "The Bachalors - Add Food";

    const { displayName: userName, email, } = user || { displayName:"User", email: "notavailavle", };

    const handalAddItem = (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = new FormData(e.target);

        const item = {
            foodName: formData.get("name"),
            foodImage: formData.get("image"),
            foodCategory: formData.get("category"),
            quantity: formData.get("quantity"),
            sold: 0,
            price: formData.get("price"),
            origin: formData.get("origin"),
            description: formData.get("description"),
            usersEmail: email,
            usersName: userName,
        };
        // console.log(item);

        e.target.reset();

        fetch(`${ import.meta.env.VITE_DOMAIN}/items`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {           
                setLoading(false)
                // console.log(data);
                if(data.insertedId) {
                    // toast("success" , "Product Added Successfully.")
                }
            })
            .catch((error) => {
                    console.error('Error fetching Services:', error);
            });
    };


    return (
        <div className="sectionBase mx-auto my-4">
            <h1 className="text-[2.2rem] font-bold md:text-center border-b-2 border-gray-300">Add Item</h1>
            {
                loading ? 
                ( <div className="w-full rounded-lg flex justify-center items-center h-[360px]">
                    <Loader/> 
                </div> ) :
                ( 
                    <form action="" className="flex flex-col gap-2 items-start md:items-end w-full p-2" onSubmit={handalAddItem}>
                        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-10 justify-center ">
                            <div className="w-full md:w-[44%] flex flex-col gap-2">
                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Food Name</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="text" name="name" required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Category</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="text" name="category" required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Origin (country)</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="text" name="brand" required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Description</label>
                                    <textarea className="border w-full rounded-md mt-1 px-4 py-1.5" rows="6"  type="text" name="description" required />
                                </div>
                            </div>    

                            <div className="w-full md:w-[44%] flex flex-col gap-2">
                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Image URL</label>
                                    <input className="border w-full rounded-md px-4 py-1.5" type="text" name="image" required />

                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Stock</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="number" name="quantity" required />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="text-lg font-medium">Price</label>
                                    <input className="border w-full rounded-md mt-1 px-4 py-1.5" type="number" name="price" required />
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

export default CreateItemLayout;
