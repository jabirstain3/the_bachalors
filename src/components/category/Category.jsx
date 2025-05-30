
const Category = () => {
    const catagory = [
        { id:235432, name:"Japanese", image:"", },
        { id:235422, name:"Indian", image:"", },
        { id:235424, name:"Mexico", image:"", },
        { id:235425, name:"Chinese", image:"", },
    ]
    return (
        <div className="sectionBase mx-auto mt-10 md:mt-16 bg-white">
            <h1 className="text-[2.5rem] font-bold text-center my-4">Food Categorys</h1>

            <div className="flex flex-wrap justify-center gap-6 my-10 md:mt-16 ">
                {
                    catagory.map((c) => (
                        <div key={c.id} className="w-1/2 md:w-1/4 max-w-44  mt-8 md:mt-0 p-4 rounded-lg relative bg-[#e6c88c56]">
                            <img src={c.image} alt={c.name} className="w-[140px] h-[140px] object-cover rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-2 border-gray-600" />

                            <div className="flex mt-18 items-center justify-center">
                                <h2 className="text-[1.2rem] font-[600]">{c.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;