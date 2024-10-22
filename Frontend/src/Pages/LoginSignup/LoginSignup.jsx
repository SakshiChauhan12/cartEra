import react from "react"
import "./LoginSignup.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import { ShopContext } from "../../Context/Context";
const LoginSignup = () => {
    const [state, setState] = useState("Signup");
    const [formData,setFromData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [isChecked, setIsChecked] = useState(false);
    const { AllProduct, cartItem, addToCart, removeFromCart, removeOneFromCart , setIsLoggedIn} = useContext(ShopContext);
    const navigate = useNavigate();
    const login = async (e)=>{
        e.preventDefault();
        if(!isChecked){
            alert("Please accept terms and conditions");
            return;
        }
        console.log("login", formData);
        let responseData;
        await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Accept": "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => {
            responseData = data;
            if(responseData.success){
                localStorage.setItem("auth-token", responseData.token); // auth-toekn is name of the token.
                // navigate("/");
                window.location.replace("/");
                setIsLoggedIn(true);
                console.log(responseData);
            }
            else{
                alert(responseData.error);
                setFromData({
                    name: "",
                    email: "",
                    password: "",
                })
                setIsChecked(false);
                throw new Error("Failed to login");
            }
        }
        ).catch(err => console.log(err))
    }

    const signup = async (e)=>{
        e.preventDefault();
        if(!isChecked){
            alert("Please accept the terms and conditions");
            return;
        }
        console.log("signup", formData);
        let responseData;
        await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Accept": "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => {
            responseData = data;
            if(responseData.success){
                localStorage.setItem("auth-token", responseData.token); // auth-toekn is name of the token.
                // navigate("/");
                window.location.replace("/");
                setIsLoggedIn(true);
                console.log(responseData);
            }
            else{
                alert(responseData.error);
                setFromData({
                    name: "",
                    email: "",
                    password: "",
                })
                setIsChecked(false);
                throw new Error("Failed to signup");
            }
        }
        ).catch(err => console.log(err));
    }

    const changeHandler = (e) =>{
        setFromData({...formData, [e.target.name]: e.target.value})
    }
    const toggleCheckbox = () =>{
        setIsChecked(!isChecked);
    }
    return (
        <form className="form">
            <div className="form-body space-y-3">
                <div className="text-center font-semibold text-4xl my-14 h-8">
                    {state==="Login"? "Login": "Signup"}
                </div>
                <div className="input-boxes my-3 mx-12 flex-col space-y-6">
                    {state === "Login" ? <> </> : <>
                    <input 
                    name="name"
                    value={formData.name}
                    type="text"
                    placeholder="Username" 
                    onChange={changeHandler}/> <br />  </>}

                    <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email" 
                    onChange={changeHandler}/> <br />
                    <input 
                    type="Password" 
                    name="password" 
                    value={formData.password}
                    placeholder="Password" 
                    onChange={changeHandler}/> <br />
                </div>
                <div className="flex pl-14 p-2">
                    <input type="checkbox" className="p-8" checked={isChecked} onChange={toggleCheckbox} />
                    <div className="flex font-semibold text-gray-500 ">
                        <div className="accept ml-2">
                            I accept the
                        </div>
                        <div className="terms-conditions text-orange-600 ml-1">
                            terms and conditions
                        </div>
                    </div>
                </div>

                <button className="signup-button "
                onClick={state==="Login"? login: signup
                }>
                    {state ==="Login"? "Login": "Signup"}
                </button>

                {state !== "Login" ?
                 <div className="flex font-semibold text-gray-500 pl-9 mb-3 items-center justify-center py-4">
                    <div>
                        Already have an account?
                    </div>
                    <div className="terms-conditions text-orange-600 ml-1" onClick={() =>setState("Login")}>
                        Login
                    </div>
                </div> :
                    <div className="flex font-semibold text-gray-500 pl-9 mb-3 items-center justify-center py-4">
                        <div>
                            Create an account?
                        </div>
                        <div className="terms-conditions text-orange-600 ml-1" onClick={() =>setState("Signup")}>
                            Signup
                        </div>
                    </div>}

            </div>
        </form>
    );
}

export default LoginSignup;