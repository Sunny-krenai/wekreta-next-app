import { Routes } from "@/common/constant/routes";
import { Collection } from "@/models/Collection";
import Link from "next/link";
import "./collectionSection.css";

const CollectionSection = async ()=> {
    const res = await fetch(
        `https://storestaging.krenai.in/api/v4/collection/abstract/web?search=&searchBy=&currentPage=1&itemsPerPage=4&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const data = await res.json();
    const collections: Collection[] = data.object;
    
    return (
        <div className="container">
        {/* Loading Skeleton */}
        {/* {loadingCollection && config.section.name === Constants.COLLECTION_SECTION && config.section.value > 0 && (
          <div className="row mobile-lodingss">
            {[...Array(6)].map((_, index) => (
              <div key={index} className={`mobile-lodingss-width ${findValue(Constants.COLLECTION_SECTION, Constants.PRODUCT_IMAGE_SIZE) === Constants.EXTRA_LARGE ? 'small-device-one-box' : ''} ${findValue(Constants.COLLECTION_SECTION, Constants.PRODUCT_IMAGE_SIZE) === Constants.LARGE ? 'large-device-two-box' : ''} ${findValue(Constants.COLLECTION_SECTION, Constants.PRODUCT_IMAGE_SIZE) === Constants.MEDIUM ? 'medium-device-three-box' : ''} ${findValue(Constants.COLLECTION_SECTION, Constants.PRODUCT_IMAGE_SIZE) === Constants.SMALL ? 'extra-small-device-for-box' : ''}`}>
                <div className="popular-collection mb-3">
                  <div style={{ width: '100%', height: '300px' }} className="ngx-shimmer-loading"></div>
                </div>
              </div>
            ))}
          </div>
        )} */}
  
        {/* Collection Data */}
        {collections.length > 0 && (
          <div>
            <div className="section-titile mb-25">
              <div className="d-flex justify-content-between align-item-center">
                <h2>Popular Collection</h2>
                <Link href={Routes.COLLECTION}>
                  View All
                </Link>
              </div>
            </div>
  
            <div className="row popular-collection-main">
              {collections.map((collection, index) => (
                <div key={index} className={`collection-list-boxs mb-3 large-device-two-box`}>
                  <div className="banner-img mb-3" >
                    <img className="img-hover-slide" loading="lazy" src={collection.mediaUrl ? collection.mediaUrl : '/no-image-available.jpeg'}  alt={collection.name} />
                    <div className="dk-small-banner banner-text">
                      <h2>
                        {collection.name}
                      </h2>
                      <p>
                        {collection.description}
                      </p>
                      <a className={'small-btns'}>
                        Shop Now <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}

export default CollectionSection;