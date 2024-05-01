import Image from "next/image";
import {Button} from "@nextui-org/button";
import { Product } from "../models/Product";

const ProductGrid = async() => {
    const res = await fetch(
        `https://storestaging.krenai.in/api/v4/product/customer?id=0&secondaryKey=&productName=&categoryName=&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=80&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`
        ,{next:{revalidate:10}});
      const data = await res.json();
      
      const products: Product[]= data.object;
    

  return (
    <div className="products-row row product-grid-4">
      {products.map((tempProduct:Product, index:number) => (
        <div className="col-lg-2 col-md-4 px-2 pb-3" key={tempProduct.id}>
          <div className="feat-product-block" >

            <div className="discount-tags">
                <div className="discount">
                {`${(((tempProduct!.variants[0]!.mrp)-(tempProduct!.variants[0]!.sellingPrice))/tempProduct!.variants[0]!.mrp)*100}% Off`}
                </div>
            </div>



            <div className="discount-tag">


                <div>
                    <Button className="feat-towishlist" >
                      <i className="bi bi-heart"></i></Button>
                </div>
            </div>


            <a className="feat-product-img position-relative" >

                <Image className="default-img"  width={150} height={150}
                    src={'/no-image-available.jpeg'}
                    alt={tempProduct.name} />


                <div className="wishlist-icon">

                    <div>
                        <div className="product-rate-cover cover1">
                            <div className="font-small mr-5 text-muted">{`${tempProduct?.rating }`}</div>
                        </div>
                    </div>
                </div>

                <div className="rating-tag">
                    <div className="promotional-tag" >
                        {`${tempProduct?.promotionalTag}`}</div>
                </div>

            </a>
            <div className="feat-product-content">

                <p className="sku-id" >SKU -
                    {`${tempProduct.variants[0].sku}`}</p>
                
                <a className="feat-title">
                    {`${tempProduct.name}`}</a>



            </div>
            <div className="feat-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="feat-price" >
                        ₹{`${tempProduct.variants[0].sellingPrice}`}
                    </p>

                    <Button className="feat-addcart-btn" >
                        <span><i className="bi bi-cart2"></i>Add</span>
                    </Button>
                    
                </div>
                {/* <p className="font-xsm text-danger"
                   >{`${errorMessage}`}</p> */}

            </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;