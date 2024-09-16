import react from "react"
import "./LoginSignup.css"
const LoginSignup = () => {
    return (
        <form className="form">
            <div className="form-body space-y-3">
                <div className="text-center font-semibold text-4xl my-14 h-8">
                    Sign Up
                </div>
                <div className="input-boxes my-3 mx-12 flex-col space-y-4">
                <input type="text" placeholder="Username" /> <br />    <input type="email"
                    placeholder="Email" /> <br />
                <input type="Password"
                    placeholder="Password" /> <br />
                </div>
                <div className="flex pl-11">
                    <input type="checkbox" className="p-4"/>
                    <div className="flex font-semibold text-gray-500 ">
                        <div className="accept ml-2">
                            I accept the
                        </div>
                        <div className="terms-conditions text-orange-600 ml-1">
                            terms and conditions
                        </div>
                    </div>
                </div>
                <button className="signup-button ">Sign up</button>
                <div className="flex font-semibold text-gray-500 pl-9 mb-3 items-center justify-center py-4">
                    <div>
                        Already have an account?
                    </div>
                    <div className="terms-conditions text-orange-600 ml-1">
                        Login
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginSignup;