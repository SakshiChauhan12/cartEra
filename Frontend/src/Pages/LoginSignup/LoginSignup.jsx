import React, { useState, useContext } from "react";
import { ShopContext } from "../../Context/Context";
import { REACT_APP_BACKEND_URL } from "../../utils";

const LoginSignup = () => {
    const [state, setState] = useState("Signup");
    const [formData, setFromData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isChecked, setIsChecked] = useState(false);
    const { setIsLoggedIn } = useContext(ShopContext);

    const login = async (e) => {
        e.preventDefault();
        if(!isChecked) {
            alert("Please accept terms and conditions");
            return;
        }
        
        try {
            const response = await fetch(`${REACT_APP_BACKEND_URL}/user/login`, {
                method: "POST",
                headers: {
                    "Accept": "application/form-data",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();
            
            if(responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                window.location.replace("/");
                setIsLoggedIn(true);
            } else {
                alert(responseData.error);
                setFromData({ name: "", email: "", password: "" });
                setIsChecked(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const signup = async (e) => {
        e.preventDefault();
        if(!isChecked) {
            alert("Please accept the terms and conditions");
            return;
        }
        
        try {
            const response = await fetch(`${REACT_APP_BACKEND_URL}/user/register`, {
                method: "POST",
                headers: {
                    "Accept": "application/form-data",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();
            
            if(responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                window.location.replace("/");
                setIsLoggedIn(true);
            } else {
                alert(responseData.error);
                setFromData({ name: "", email: "", password: "" });
                setIsChecked(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-8">
            <form className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                        {state === "Login" ? "Login" : "Signup"}
                    </h2>

                    {/* Input Fields */}
                    <div className="space-y-4">
                        {state !== "Login" && (
                            <input
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFromData({...formData, name: e.target.value})}
                                type="text"
                                placeholder="Username"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                            />
                        )}
                        
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFromData({...formData, email: e.target.value})}
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                        />
                        
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFromData({...formData, password: e.target.value})}
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-center mt-6">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm text-gray-700">
                            I accept the 
                            <span className="text-orange-600 ml-1 cursor-pointer hover:underline">
                                terms and conditions
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={state === "Login" ? login : signup}
                        className="w-full bg-red-600 text-white py-3 rounded-lg mt-6 
                                 hover:bg-red-700 transition duration-300 text-lg font-semibold"
                    >
                        {state === "Login" ? "Login" : "Signup"}
                    </button>

                    {/* Toggle State */}
                    <div className="text-center mt-6 text-sm">
                        <p className="text-gray-600">
                            {state === "Login" ? "Create an account?" : "Already have an account?"}
                            <span
                                onClick={() => setState(state === "Login" ? "Signup" : "Login")}
                                className="text-orange-600 ml-1 cursor-pointer hover:underline font-semibold"
                            >
                                {state === "Login" ? "Signup" : "Login"}
                            </span>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginSignup;