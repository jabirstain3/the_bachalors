import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineEmail, MdOutlineLocalPhone} from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const activeStyle = "text-[1rem] text-[#ea6a12]";
    const inActiveStyle = "text-[1rem] text-gray-500 hover:text-[#ea6a12] cursor-pointer transition-all duration-200";

    return (
        <footer className="bg-white py-10 md:py-12">
            <div className="sectionBase mx-4 md:mx-auto ">
                <div className="flex justify-between gap-[30px] flex-col md:flex-row flex-wrap w-full">
                    <div className="w-full sm:w-[25%] ">
                        <NavLink to={'/'} className={`text-[1.8rem] font-bold`}>The  Bachalors</NavLink>

                        <div className="flex flex-col gap-[10px] text-slate-800 mt-2">
                            <span><a className="text-[1rem] flex items-center gap-[8px] cursor-pointer"> 
                                <IoLocationOutline className="text-[1.2rem]"/>
                                Kulaura, Moulvibazar, Sylhet
                            </a></span>

                            <span><a className="text-[1rem] flex items-center gap-[8px] cursor-pointer"> 
                                <MdOutlineEmail className="text-[1.1rem]"/>
                                thebachalors@gmail.com
                            </a></span>

                            <span><a className="text-[1rem] flex items-center gap-[8px]  cursor-pointer">
                                <MdOutlineLocalPhone className="text-[1.1rem]"/>
                                +880 1828 004746
                            </a></span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Services</h3>
                        <div className="flex flex-col gap-[10px]">
                            <NavLink to={'/App'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>All Foods</NavLink>
                            <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Events</NavLink>
                            <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Spacials</NavLink>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Company</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Terms of service</NavLink>
                            <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Privacy plicy</NavLink>
                            <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Return policy</NavLink>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Social Media</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <a className="text-[1rem] text-gray-500 hover:text-[#ea6a12] cursor-pointer transition-all duration-200">Facebook</a>
                            <a className="text-[1rem] text-gray-500 hover:text-[#ea6a12] cursor-pointer transition-all duration-200">Twitter</a>
                            <a className="text-[1rem] text-gray-500 hover:text-[#ea6a12] cursor-pointer transition-all duration-200">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
                    