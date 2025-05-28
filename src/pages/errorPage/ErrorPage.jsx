import {FaArrowLeftLong} from "react-icons/fa6";
import { useToRoute } from "../../hooks/navigation/useToRoute";
import Lottie from "lottie-react";
import animation from "../../lottie/Animation-1748451938262.json";

const ErrorPage = () => {
    document.title = "The Bachalors - Page not found";
    const goTo = useToRoute()
    
    return (
        <div className="boxShadow px-10 w-full h-screen flex items-center flex-col justify-center pb-[50px] rounded-xl bg-[#fef5bd]">
            <Lottie loop={true} autoplay={true} animationData={animation} height={20} width={20} />

            <button className="py-3 px-6 sm:px-8 rounded-full bg-[#fff] textcolor border border-[#ea6a12] mt-4 flex items-center gap-[10px]" onClick={() => goTo('/')}>
                <FaArrowLeftLong /> Back to home
            </button>
        </div>
    );
};

export default ErrorPage;
                    