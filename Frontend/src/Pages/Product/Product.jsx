import { useParams } from "react-router-dom";
import AllProducts from "../../Components/Assets/AllProduct";
import BreadCrum from "../../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import Description from "../../Components/Description/Descritption";
import Related from "../../Components/Related/Related";
const Product = () => {
    const {id} = useParams(); // this is give the array with the id as the key and value as the string of the  exact value of id;
    // console.log(id,typeof id);
    console.log(AllProducts)
    // AllProducts.map(product => console.log(product.id));
    const product = AllProducts.find(product => product.id === Number(id)); //this will return array that satisfy the all conditions.
    // console.log(product);
    return ( 
        <h3 className='text-4xl font-bold text-black-500 font-extrabold'>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <Description />
            <Related category={product.category}/>
        </h3>
     );
}
 
export default Product;