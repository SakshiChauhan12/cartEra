import React from "react";
import "./Related.css"
import Item from "../Item/Item";
import { data_trending_product_women } from "../Assets/data_trending_product_women";
import AllProducts from "../Assets/AllProduct";
function getRelatedProductsForCategory(category, products){
    const category_products = AllProducts.filter(product => product.category === category);
    const related_products = [];
    const related_product_ids = [];
    while (related_products.length < 4 && category_products.length > 0 ){
        const random_product = category_products[Math.floor(Math.random() * category_products.length)];
        if(!related_product_ids.includes(random_product.id)){
            related_products.push(random_product);
            related_product_ids.push(random_product.id);
        }
    }
    return related_products;
}
const Related = ({category }) => {
    const related_product_data = getRelatedProductsForCategory(category, AllProducts)
    return ( 
        <div className="related">
            <h1>RELATED PRODUCTS</h1>
            <hr />
            <div className="related-item">{
                    related_product_data.map(product =>{
                        return <Item product={product}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Related;