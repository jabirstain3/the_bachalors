import { useState } from "react";
import { useToRoute } from "../../hooks/navigation/useToRoute";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineAppstoreAdd, AiOutlineProduct } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiUserCircleFill } from "react-icons/pi";

const Navbar = () => { 
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const goTo = useToRoute();
    // console.log(user);
    
    const user = {
        name: "User",
        photo: "user"
    }

    const { name, photo } = user;

    const navlinks = [
        {name: "All Foods", path: "items"},
        {name: "Gallery", path: "foodgallery"},
    ]

    const handelLogIn = () =>{
        goTo('/login')
    }

    const handelLogOut = () =>{
        goTo('/')
    }

    const handalViewMyFood = () => {
        // goTo(`${userbase}/foods`)
    }

    const handalMyOrders = () => {
        // goTo(`${userbase}/orders`)
    }

    const handalAddFood = () => {
        // goTo(`/add_foods`)
    }

    return (
        <nav className="bg-white shadow-lg">
            <div className="sectionBase mx-auto flex items-center justify-between relative">

                {/* logo */}
                <NavLink to={'/'} className={`text-[1.4rem] font-bold`}>The Bachalors</NavLink>

                {/* nav links */}
                <ul className="items-center gap-[20px] text-[1rem] md:flex hidden">
                    <li className={` border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize hover:border-b-[#ea6a12] text-gray-500 hover:text-[#ea6a12]`}>
                        <NavLink to='/' className="" >Home</NavLink> 
                    </li>
                    {
                        navlinks.map((link, index) => (
                            <li key={index} className={` border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize  hover:border-b-[#ea6a12] text-gray-500 hover:text-[#ea6a12]`}>
                                <NavLink to={link.path} className={({ isActive, }) => isActive ? "text-[#ea6a12] font-medium" : "" }>{link.name}</NavLink> 
                            </li>
                        ))
                    }
                </ul>

                {/* user account */}
                <div className="flex items-center gap-[15px]">
                    {
                        user ?
                        (<div className="flex items-center gap-[10px] cursor-pointer relative" onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                            <div className="relative">
                                {
                                    photo !== "user" ?
                                    <img src={photo} alt={name} className="w-[35px] h-[35px] rounded-full object-cover"/>:
                                    <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center">
                                        <PiUserCircleFill className="w-full h-full"/>
                                    </div>
                                }
                                <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                            </div>

                            <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">{name}</h1>

                            <div className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[10]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                                <button className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:text-[#ea6a12] hover:bg-[#f4bb955d]">
                                    <FiUser />
                                    View Profile
                                </button>

                                <button onClick={handalAddFood} className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:text-[#ea6a12] hover:bg-[#f4bb955d]">
                                    <AiOutlineAppstoreAdd />
                                    Add Food
                                </button>

                                <button onClick={handalViewMyFood} className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:text-[#ea6a12] hover:bg-[#f4bb955d]">
                                    <AiOutlineProduct />
                                    My Foods
                                </button>
                                
                                <button onClick={handalMyOrders} className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:text-[#ea6a12] hover:bg-[#f4bb955d]">
                                    <LiaClipboardListSolid />
                                    My Orders
                                </button>

                                <button className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem]  text-gray-600 hover:text-[#ea6a12] hover:bg-[#f4bb955d]">
                                    <IoSettingsOutline/>
                                    Settings
                                </button>

                                <div className="mt-3 border-t border-gray-300 pt-[5px]">
                                    <button className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-100" onClick={handelLogOut}>
                                        <TbLogout2 />
                                        Logout
                                    </button>
                                </div>
                            </div>

                            <IoIosArrowUp className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 text-gray-600 sm:block hidden`}/>

                        </div>):
                        <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize text-white btn_bg transition-all duration-300" onClick={handelLogIn}>log In
                        </button>
                    }

                    <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}className="text-[1.5rem] text-[#424242]c cursor-pointer md:hidden flex"/>
                </div>

                {/* mobile sidebar */}
                <aside  className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "hidden translate-x-[200px] opacity-0 z-[-1]"} w-[150px] md:hidden bg-white p-4 text-center absolute top-[55px] right-0 sm:w-[300px] rounded-md transition-all duration-300`}>
                    <ul className="items-start gap-[10px] text-[1rem] flex flex-col">
                        <li className={`border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize  hover:border-b-[#ea6a12] text-gray-500 hover:text-[#ea6a12]`}>
                            <NavLink to='/' className={({ isActive, }) => isActive ? "text-[#ea6a12] font-medium" : "" }>Home</NavLink> 
                        </li>
                        {
                            navlinks.map((link, index) => (
                                <li key={index} className={`w-fit border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize  hover:border-b-[#ea6a12] text-gray-500 hover:text-[#ea6a12]`}>
                                    <NavLink to={link.path} className={({ isActive, }) => isActive ? "text-[#ea6a12] font-medium" : "" }>{link.name}</NavLink> 
                                </li>
                            ))
                        }
                    </ul>
                </aside>
            </div>
        </nav>
    );
};

export default Navbar;