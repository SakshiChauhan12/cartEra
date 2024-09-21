import "./BreadCrum.css"
import BreadCrum_arrow from "../Assets/Bread_crum/Breadcrum_arrow.png"
import { Link } from "react-router-dom";
const BreadCrum = ({product}) => {
    console.log(product, "in breadcrum");
    return ( 
        <div className="breadcrum bg-orange-100">
            <Link to="/">HOME</Link>
            <img src={BreadCrum_arrow} alt="arrow" />
            <Link to={`/${product.category.toLowerCase()}`}>SHOP {product.category.toUpperCase()}</Link>
            <img src={BreadCrum_arrow} alt="arrow" />
            <span>{product.name}</span>
        </div>
     );
}
 
export default BreadCrum;