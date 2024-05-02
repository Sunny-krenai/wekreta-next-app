import { CategoryWiseProducts } from "@/models/CategoryWiseProducts";
import ProductGrid from "../productListing/page";
import { Product } from "@/models/Product";

const CategoryWiseProdictSection=(props:{data:Map<string,{products:Product[],totalItems:number}>})=> {

    let map:Map<string,{products:Product[],totalItems:number}> = props.data;
    const keysOfMap = map.keys();
    let arrays = Array.from(keysOfMap);


    return (
        <div>
            {arrays.map((key: string) => (
                (map.get(key)!==undefined && (
                    <ProductGrid key={key} products={map.get(key)?.products} sectionName={key} />
                ))
            ))}
        </div>
    );
}

export default CategoryWiseProdictSection;