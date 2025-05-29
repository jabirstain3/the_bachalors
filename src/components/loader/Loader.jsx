import Lottie from "lottie-react";
import animation from "../../lottie/Animation-1748452091832.json";

const Loader = () => {
    
    return ( 
        <div className="w-18 lg:w-32 mx-auto">
            <Lottie loop={true} autoplay={true} animationData={animation} height={20} width={20} />
        </div>
    );
};

export default Loader;