
import React, { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import remove_icon from "./../Assets/ShopCart/cart_cross_icon.png";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { AllProduct, cartItem, addToCart, removeFromCart, removeOneFromCart } = useContext(ShopContext);
  
  const totalCost = () => {
    return AllProduct.reduce((amt, product) => {
      if (cartItem[product.id] > 0) {
        return amt + product.old_cost * cartItem[product.id];
      }
      return amt;
    }, 0);
  };

  return (
    <div className="mx-10 px-4 ">
        <div className="w-80% mx-auto ">
            <div className="grid grid-cols-3 sm:grid-cols-6 text-base sm:text-xl font-semibold border-b pb-6 ">
                <p className="col-span-2 sm:col-span-1">Products</p>
                <p className="hidden sm:block">Title</p>
                <p className="hidden sm:block">Price</p>
                <p className="hidden sm:block">Quantity</p>
                <p className="hidden sm:block">Total</p>
                <p className="hidden sm:block">Remove</p>
            </div>
            
            {AllProduct.map((product) => (
                cartItem[product.id] > 0 && (
                <div key={product.id} className="grid grid-cols-3 sm:grid-cols-6 items-center my-4 p-2 border-b text-gray-700 text-sm sm:text-base">
                    <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg" />
                    </Link>
                    <p className="col-span-2 sm:col-span-1 text-sm sm:text-lg">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </p>
                    <p className=" text-lg">₹{product.old_cost}</p>
                    <div className="flex items-center  rounded-lg p-2 w-24 sm:w-28 justify-between">
                    <button
                        onClick={() => removeOneFromCart(product.id)}
                        className="bg-gray-300 text-black font-bold py-1 px-2 rounded-l hover:bg-gray-400 transition duration-200"
                    >
                        -
                    </button>
                    <span className="mx-2 text-sm md:text-lg font-semibold">{cartItem[product.id]}</span>
                    <button
                        onClick={() => addToCart(product.id)}
                        className="bg-gray-300 text-black font-bold py-1 px-2 rounded-r hover:bg-gray-400 transition duration-200"
                    >
                        +
                    </button>
                    </div>
                    <p className="hidden sm:block text-lg">₹{product.old_cost * cartItem[product.id]}</p>
                    <div className="col-span-1 sm:col-span-1 flex md:justify-start justify-end">
                    <button onClick={() => removeFromCart(product.id)} className="flex items-center justify-center p-2">
                        <img src={remove_icon} alt="Remove item" className="h-4 w-4 md:h-7 md:w-7 cursor-pointer hover:opacity-75" />
                    </button>
                    </div>
                </div>
                )
            ))}

        </div>
      
      <div className="mt-4 border-t-4 pt-4 flex flex-col items-center bg-white">
        <div className="flex flex-row justify-between text-md md:text-lg font-semibold w-full max-w-lg px-2 sm:px-0">
          <span>SubTotal:</span>
          <span className="text-gray-600">₹{totalCost().toFixed(2)}</span>
        </div>
        <div className="flex flex-row justify-between text-md md:text-lg  font-semibold w-full max-w-lg px-2 sm:px-0">
          <span>Shipping:</span>
          <span className="text-gray-600">₹10</span>
        </div>
        <div className="flex flex-row justify-between text-md md:text-lg  font-semibold w-full max-w-lg px-2 sm:px-0">
          <span>Total:</span>
          <span className="text-gray-600">₹{(totalCost() + 10).toFixed(2)}</span>
        </div>
        <div className="w-full max-w-lg">
          <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-green-700 w-full sm:w-1/2">
            Checkout
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
