import Image from "next/image";
import { Product } from "../../../models/Product";
import "./productListing.css";
import Link from "next/link";
import { Routes } from "@/common/constant/routes";
import { Constants } from "@/common/constant/constant";

const ProductGrid = async (props: { products: Product[], sectionName?: string; }) => {
  // const res = await fetch(
  //   `https://storestaging.krenai.in/api/v4/product/customer?id=0&secondaryKey=&productName=&categoryName=&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=80&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=pen&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
  //   { next: { revalidate: 5 } },
  // );
  // const data = await res.json();

  const products: Product[] = props.products;
  const sectionName: string | undefined = props.sectionName

  return (
    <div>
      {!Constants.EMPTY_STRINGS.includes(sectionName) && (
        <div className="section-titile mb-25">
          <div className="d-flex justify-content-between align-item-center">
            <h2>{sectionName}</h2>
            <Link href={Routes.COLLECTION}>
              View All
            </Link>
          </div>
        </div>
      )
      }

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">


          <div className="products-row row product-grid-4">
            {products.map((tempProduct: Product) => (
              <div className="col-lg-2 col-md-4 px-2 pb-3" key={tempProduct.id}>
                <div className="feat-product-block">
                  <div className="discount-tags">
                    <div className="discount">
                      {`${(((tempProduct!.variants[0]!.mrp - tempProduct!.variants[0]!.sellingPrice) / tempProduct!.variants[0]!.mrp) * 100).toFixed(2)}% Off`}
                    </div>
                  </div>

                  <div className="discount-tag">
                    <div>
                      <button className="feat-towishlist">
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                  </div>

                  <a className="feat-product-img position-relative">
                    <img className="default-img" loading="lazy" src={tempProduct.mediaUrl ? tempProduct.mediaUrl : '/no-image-available.jpeg'} alt={tempProduct.name} />


                    <div className="wishlist-icon">
                      <div>
                        <div className="product-rate-cover cover1">
                          <div className="font-small mr-5 text-muted">{`${tempProduct?.rating}`}</div>
                        </div>
                      </div>
                    </div>

                    <div className="rating-tag">
                      <div className="promotional-tag">
                        {`${tempProduct?.promotionalTag}`}
                      </div>
                    </div>
                  </a>
                  <div className="feat-product-content">
                    <p className="sku-id">SKU -{`${tempProduct.variants[0].sku}`}</p>

                    <a className="feat-title">{`${tempProduct.name}`}</a>
                  </div>
                  <div className="m-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="feat-price">
                        ₹{`${tempProduct.variants[0].sellingPrice}`}
                      </p>

                      <button className="feat-addcart-btn">
                        <span>
                          <i className="bi bi-cart2"></i>Add
                        </span>
                      </button>
                    </div>
                    {/* <p className="font-xsm text-danger"
                   >{`${errorMessage}`}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

  );
};

export default ProductGrid;
