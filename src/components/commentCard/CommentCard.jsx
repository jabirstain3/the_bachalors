import {FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar} from "react-icons/fa";

const CommentCard = ({Comment}) => {

    return (
        <div className="w-[400px] lg:w-full border border-[#ea6a12] shadow-2xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-16">
            <img src={Comment?.image}
                alt={Comment?.name || "User Image"}
                className="w-[180px] h-[180px] object-cover rounded-full"
            />

            <div className="w-full md:w-[65%] relative">
                <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <FaQuoteRight className=" absolute top-[-550%] md:top-[-150%] left-[0%] text-[2rem] text-[#ea6a12]"/>
                    
                    <div className="flex items-center gap-2">
                        <h2 className="text-[1rem] font-[500]">
                            {Comment?.name || "John Doe"}
                        </h2>
                        <p className="text-[0.9rem] text-[#9c9c9c]">
                            {Comment?.role || "Customer"}
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaRegStar className="text-[#ffba24] text-[1.1rem]"/>
                    </div>
                </div>

                <h2 className="text-[1.5rem] font-[500] capitalize mt-3">
                    {Comment?.title || "Amazing Food Experience"}
                </h2>
                <p className="text-justify text-[0.9rem] my-3 text-[#424242]">
                    {Comment?.comment || "The food was absolutely delicious! I loved the variety of dishes and the quality of the ingredients. The service was also top-notch, making the whole experience enjoyable. Highly recommend!"}
                </p>
                
                <FaQuoteLeft className="absolute bottom-[-10%] right-[0%] text-[2rem] text-[#ea6a12]"/>
            </div>
        </div>
    );
};

export default CommentCard;