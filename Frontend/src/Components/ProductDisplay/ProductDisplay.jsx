import React, { useContext } from "react";
import StarIcon from "./../Assets/Star_icon/star_icon.png";
import StarDullIcon from "./../Assets/Star_icon/star_dull_icon.png";
import { ShopContext } from "../../Context/Context";

const ProductDisplay = ({ product }) => {
    const { cartItem, addToCart, removeFromCart, removeOneFromCart } = useContext(ShopContext);

    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-10 bg-white rounded-lg shadow-md mx-auto">
            {/* Left Section - Product Images */}
            <div className="flex flex-col md:flex-row gap-4 md:w-1/3">
                {/* Thumbnail List */}
                <div className="flex md:flex-col gap-2 order-2 md:order-1 justify-start">
                    {[...Array(4)].map((_, index) => (
                        <img 
                            key={index}
                            src={product.image} 
                            alt={`${product.name} view ${index + 1}`}
                            className="w-14 h-14 object-cover rounded cursor-pointer 
                                     transition duration-300 hover:scale-110"
                        />
                    ))}
                </div>
                
                {/* Main Image */}
                <div className="flex-1 order-1 md:order-2">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="flex flex-col gap-4 md:w-1/2">
                <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
                
                {/* Ratings */}
                <div className="flex items-center gap-2">
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={StarIcon} alt="star" className="w-5 h-5" />
                    ))}
                    <img src={StarDullIcon} alt="star" className="w-5 h-5" />

                </div>

                {/* Prices */}
                <div className="flex items-center gap-4">
                    <span className="text-lg text-gray-500 line-through">₹{product.old_cost}</span>
                    <span className="text-xl text-red-600 font-bold">₹{product.new_cost}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg">{product.description}</p>

                {/* Size Selection */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold">Select Size</h3>
                    <div className="flex flex-wrap gap-3">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <button 
                                key={size}
                                className="px-4 py-2 border border-gray-300 rounded 
                                         hover:bg-gray-100 transition duration-300 text-sm"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cart Actions */}
                {cartItem[product.id] > 0 ? (
                    <div className="flex flex-row gap-4 items-start sm:items-center">
                        <div className="flex items-center bg-gray-100 rounded-md p-2 gap-4 ">
                            <button 
                                onClick={() => removeOneFromCart(product.id)}
                                className="w-8 h-8 text-sm flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                -
                            </button>
                            <span className="text-sm ">{cartItem[product.id]}</span>
                            <button 
                                onClick={() => addToCart(product.id)}
                                className="w-8 h-8 text-sm flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                +
                            </button>
                        </div>
                        <button 
                            onClick={() => removeFromCart(product.id)}
                            className="px-6 py-3 text-sm  bg-yellow-300 hover:bg-yellow-400 rounded-md transition duration-300"
                        >
                            Remove
                        </button>
                    </div>
                ) : (
                    <button 
                        onClick={() => addToCart(product.id)}
                        className="w-1/2 md:1/4 text-sm  bg-orange-600 text-white hover:bg-orange-700 rounded-md transition duration-300 py-2"
                    >
                        Add to Cart
                    </button>
                )}

                {/* Product Details */}
                <div className="space-y-2 text-sm md:text-base">
                    {[
                        ['Category', product.category],
                        ['Brand', product.brand],
                        ['Code', product.id],
                        ['Availability', product.stock ? 'In Stock' : 'Not Available'],
                        ['Tags', product.tags]
                    ].map(([label, value]) => (
                        <p key={label} className="text-gray-600">
                            <span className="font-semibold text-gray-800">{label}: </span>
                            {value || 'Not Available'}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;