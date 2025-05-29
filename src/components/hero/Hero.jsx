import { useToRoute } from "../../hooks/navigation/useToRoute";

const Hero = () => {
    const goTo = useToRoute();

    const handalViewAllFoods = () => {
        goTo('/items');
    }

    return (
        <div className="sectionBase mx-auto rounded-md">

            {/* header */}
            <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
                <div className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
                    <h1 className="max-w-[500px] text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500]">Provide the best food for you</h1>
                    <p className="text-[16px] mt-2 max-w-[700px]">We provide the best and most delicious food based on high quality  ingredients that are maintained by high tech machines and cooked by our exparts</p>

                    <div className="flex items-center flex-wrap gap-[20px] mt-6">
                        <button onClick={handalViewAllFoods} className="py-2 px-6 min-w-fit btn_bg text-white rounded-full transition-all duration-200 border">View all foods
                        </button>
                    </div>
                </div>

                {/* image */}
                <div className="w-full lg:w-[50%] max-w-[700px] rounded-full overflow-hidden">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F46239%2Fsalmon-dish-food-meal-46239.jpeg%3Fcs%3Dsrgb%26dl%3Dclose-up-cooking-dinner-46239.jpg%26fm%3Djpg&f=1&nofb=1&ipt=f4f2c5f47149cc0dad566478bd34b7e17804d31615cc3fd654bcbda6801acbb1" alt="image" className="w-full"/>
                </div>
            </header>
        </div>
    );
};

export default Hero;
                    