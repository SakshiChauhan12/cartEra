// import React from "react";
// import "./NewsLetter.css"
// import { useState } from "react";
// const NewsLetter = () => {
//     const [input,setInput] = useState("");
//     const handleChange = (e) =>{
//         setInput(e.target.value);
//     }
//     function handleSubmit(e){
//         e.preventDefault();
//         // console.log(input);
//         setInput("");
//     }
//     return ( 
//         <div className="newsletter text-center ">
//             <h3 className="text-3xl mb-4 text-gray-700" >Get Exclusive Offers In Your Inbox</h3>
//             <p className="text-gray-500 text-xl mb-3">Subscribe to our newsletter and stay on top of fashion</p>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                 type="email" 
//                 value={input}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 name="email"
//                 className="input-box"/>
//                 <button type="submit" className="button p-3 text-xl ml-1">Subcribe</button>
//             </form>
//         </div>
//      );
// }
 
// export default NewsLetter;













import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setInput("");
    }

    return ( 
        <div className="newsletter text-center">
            <h3 className="text-xl md:text-3xl mb-4 text-gray-700">
                Get Exclusive Offers In Your Inbox
            </h3>
            <p className="text-gray-500 text-md md:text-xl mb-3">
                Subscribe to our newsletter and stay on top of fashion
            </p>
            <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center gap-3">
                <input 
                    type="email" 
                    value={input}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    name="email"
                    className="input-box"
                />
                <button type="submit" className="button p-2 md:p-3 text-sm md:text-xl">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsLetter;
