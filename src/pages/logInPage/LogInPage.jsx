import { NavLink, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";


const LogInPage = () => { 
    const [show, setShow] = useState(false)
    const location = useLocation();

    document.title = "Log in to The Bachalors";
    const dest = location.state || "/";
    // console.log(dest);
    

    const handelLogInWithEmail = (e) =>{

        e.preventDefault();
        // console.log(e);

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

    }

    const handelLogInWithGoogle = () => {
        
    }

    return (
        <div className="mx-auto flex items-center secondery_bg justify-center h-screen ">
            <div className="py-10 md:py-20 px-20 md:px-32 grid gap-5 rounded-xl">
                <h1 className="text-4xl text-center font-bold text-black">Log In</h1>

                <form className="grid gap-4 w-80 mx-auto" onSubmit={handelLogInWithEmail}>
                    <label className="text-lg font-medium">  
                        Email
                        <input className="border bg-white w-full text-base font-normal rounded-full mt-1 px-4 py-1.5" type="email" name="email" required />
                    </label>

                    <lable className="relative text-lg font-medium">
                        Password
                        <input className="border bg-white w-full text-base font-normal  rounded-full mt-1 px-4 py-1.5"  type={show ? 'text' : 'password'} name="password" required /> 
                        <span className='absolute top-10.5 right-3 cursor-default text-sm font-normal text-gray-600' onClick={() => setShow(!show)}>{ show ? "Hide" : "Show"}</span>
                    </lable>

                    <div className="flex items-center justify-between text-base font-medium">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" name="itsMe" id="itsMe" />
                            <p htmlFor="itsMe">Remember Me</p>
                        </div>
                        <lable><span className="text-left textcolor">Forgot Password?</span></lable>
                    </div>

                    <input className="w-fit border rounded-md btn_bg px-10 py-1 mt-2 mx-auto text-lg font-medium text-white" type="submit" value={"Log In"} />  
                </form>

                <p className="text-center text-gray-700">Or use other account</p>

                <div className="flex justify-center items-center gap-5">
                    <button className="bg-white border border-gray-400 rounded-full  p-2" onClick={handelLogInWithGoogle}>
                        <FcGoogle className="text-lg" />
                    </button>
                </div>
                <p className="text-center text-gray-700">Don't have an account? <NavLink state={dest} className={'textcolor font-medium'} to={'/registration'} >Registar Now.</NavLink></p>
            </div>
            <div className="hidden">

            </div>
        </div>
    );
};

export default LogInPage;