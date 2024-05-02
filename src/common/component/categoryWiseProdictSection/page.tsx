import { CategoryWiseProducts } from "@/models/CategoryWiseProducts";
import ProductGrid from "../productListing/page";
import { Product } from "@/models/Product";

const CategoryWiseProdictSection=(props:{data:Map<string,{products:Product[],totalItems:number}>})=> {

    const keysOfMap = props.data.keys();
    // let arrays = [...keysOfMap];

    return (
        <div>
            {/* {props.data.map((catWiseProducts: CategoryWiseProducts) => (
                <ProductGrid products={catWiseProducts.data.products} sectionName={catWiseProducts.categoryName} />
            ))}; */}
        </div>
    );
}

export default CategoryWiseProdictSection;