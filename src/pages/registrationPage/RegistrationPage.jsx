import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation } from "react-router-dom";


const RegistrationPage = () => {
    const [ show, setShow ] = useState(false);
    const  [ currectFormate, setcurrectFormate ] = useState(true);
    const location = useLocation();


    document.title = "Register in to The Bachalors";

    const HandelRegistrationWithGoogle = () =>{

    }

    const isValidPassword = (pwd) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (regex.test(pwd)) {
            setcurrectFormate(true);
        }
        else {
            setcurrectFormate(false);
        }
    };

    const dest = location.state?.from?.pathname || "/";
    console.log(dest);

    const HandelRegistration = (e) =>{
        e.preventDefault();
        // console.log(e);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const user = { name, email, password, photo };
        console.log(user);    
    }

    return (
        <div className="mx-auto flex items-center justify-center h-screen secondery_bg">
            <div className="py-10 md:py-20 px-20 md:px-32 grid gap-5 rounded-lg ">
                <h1 className="text-4xl text-center font-bold text-black">Registration</h1>

                <form className="grid gap-4 w-80 mx-auto" onSubmit={HandelRegistration}>

                    <label htmlFor="" className="text-lg font-medium">
                        User Name
                        <input className="border bg-white w-full text-base font-normal rounded-full mt-1 px-4 py-1.5" type="text" name="name" required />
                    </label>

                    <label htmlFor="" className="text-lg font-medium">
                        Email
                        <input className="border bg-white w-full text-base font-normal rounded-full mt-1 px-4 py-1.5" type="email" name="email" required />
                    </label>

                    <label htmlFor=""className="text-lg font-medium">
                        Photo URL
                        <input className="border bg-white w-full text-base font-normal rounded-full mt-1 px-4 py-1.5" type="url" name="photo" required />
                    </label>

                    <lable className="relative text-lg font-medium">
                        Password
                        <input className="border bg-white w-full text-base font-normal  rounded-full mt-1 px-4 py-1.5"  type={show ? 'text' : 'password'} name="password"  placeholder="password..." required onChange={(e) => isValidPassword(e.target.value)}/>
                        <span className='absolute top-10.5 right-3 cursor-default text-sm font-normal text-gray-600' onClick={() => setShow(!show)}>{ show ? "Hide" : "Show"}</span>
                    
                        { !currectFormate && <span className='text-xs text-red-700' onClick={() => setShow(!show)}>Use at least 8 characters, uppercase, and lowercase letter.</span>}
                    </lable>

                    <div className="flex gap-2 items-center text-base font-medium">
                        <input type="checkbox" name="terms" id="terms" />
                        <p htmlFor="terms" >Accept our <a href="" className="textcolor">terms</a> and <a href="" className="textcolor">condation</a>.</p>
                    </div>

                    <input className="w-fit border rounded-md btn_bg px-10 py-1 mt-2 mx-auto text-lg font-medium text-white" type="submit" value={"Register"} />
                </form>
                
                <p className="text-center text-gray-700">Or use email for registration</p>

                <div className="flex justify-center items-center gap-5">
                    <button className="bg-white border border-gray-400 rounded-full  p-2" onClick={HandelRegistrationWithGoogle}>
                        <FcGoogle className="text-lg" />
                    </button>
                </div>

                <p className="text-center text-gray-700">Have an account? <NavLink className={'textcolor font-medium'} to={'/login'} >Log In!</NavLink></p>
            </div>
        </div>
    );
};

export default RegistrationPage;