import { Category } from "@/models/Category";
import { Constants } from "@/common/constant/constant";
import Link from "next/link";
import { Routes } from "@/common/constant/routes";
import "./categorySection.css";

const CategorySection = async() => {

    const res = await fetch(
        `https://storestaging.krenai.in/api/v4/category/public?itemsPerPage=5&currentPage=1&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const data = await res.json();
    const categories: Category[] = data.object;

    return (
        <div className="popular-categories " id={Constants.CATEGORY_SECTION_DIV_ID}>

                {/* <!--banner start--> */}
                {/* <div id="carouselExampleControls" className={`desktopBanner ${bannerPosition === Constants.TOP ? '' : 'd-none'}`}>
                    <div className="pointer coustem-new-baner">
                        <div>
                        <img
                            loading="lazy"
                            src={Constants.EMPTY_STRINGS.includes(bannerImageUrl) ? '//no-image-available.jpeg' : bannerImageUrl}
                            alt="banner"
                            className="d-block"
                        />
                        </div>
                    </div>
                </div> */}
                {/* <!--banner end--> */ }

                    {/* <!-- Mobile Banner --> */ }
                {/* <div id="carouselMobileControls" className="mobileBanner"
                        *ngIf="findValue(Constants.CATEGORY_SECTION,Constants.BANNER_POSITION) == Constants.TOP">
                        <div className="pointer coustem-new-baner-mobile">
                            <div
                                (click)="redirectViaCustomBanner(findValue(Constants.CATEGORY_SECTION,Constants.BANNER_CUSTOM_URL))">
                                <img onerror="this.src='/no-image-available.jpeg';" loading="lazy"
                                    src="{{!Constants.EMPTY_STRINGS.includes(findValue(Constants.CATEGORY_SECTION,Constants.MOBILE_BANNER_IMAGE_URL))?findValue(Constants.CATEGORY_SECTION,Constants.MOBILE_BANNER_IMAGE_URL):Constants.EMPTY_STRINGS.includes(findValue(Constants.CATEGORY_SECTION,Constants.BANNER_IMAGE_URL))?'/no-image-available.jpeg':findValue(Constants.CATEGORY_SECTION,Constants.BANNER_IMAGE_URL)}}"
                                    alt="banner" className="d-block">

                            </div>

                        </div>
                    </div> */}
                    {/* <!-- Mobile Banner --> */ }
                {/* <div className="container" *ngIf="loadingCategories">
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="row mobile-lodingss">
                                <div className="col-md-3 mobile-category-lodingss" *ngFor="let e of [].constructor(4);">
                                    <div className="feat-product-img ">
                                        <ngx-shimmer-loading [width]="'100%'" [height]="'200px'">
                                        </ngx-shimmer-loading>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="container section-padding">
                        {categories.length > 0 && (
                            <div className="section-titile mb-25">
                                <div className="d-flex justify-content-between align-item-center">
                                    <h2>Explore Categories</h2>
                                    <Link href={Routes.CATEGORY}>
                                        View All
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className="products-row row product-grid-4 productCardSmall ">
                            {categories.map((featuredCat, index) => (
                                <div key={index} className="col-lg-2 col-md-4 px-2 pb-3">
                                    <div className="feat-product-block aspectLandscape catNameblowImage border-0" style={{ position: 'relative', textAlign: 'center' }}>
                                        <a  style={{ cursor: 'pointer' }} className="feat-product-img img-hover-scale">
                                            <img loading="lazy" src={featuredCat.mediaUrl ? featuredCat.mediaUrl : '/no-image-available.jpeg'} alt={featuredCat.name} />
                                            <div className="categoryDragcardtitle">
                                                <h4 className="mb-2">{featuredCat.name}</h4>
                                                <span>{featuredCat.productCount} items</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Banner */}
                    {/* {bannerPosition === Constants.BOTTOM && (
                        <div id="carouselExampleControls" className="desktopBanner mt-3">
                            <div className="pointer coustem-new-baner" onClick={() => redirectViaCustomBanner(bannerCustomUrl)}>
                                <img
                                onError={(e) => { e.target.onerror = null; e.target.src = '//no-image-available.jpeg'; }}
                                loading="lazy"
                                src={Constants.EMPTY_STRINGS.includes(bannerImageUrl) ? '//no-image-available.jpeg' : bannerImageUrl}
                                alt="banner"
                                className="d-block"
                                />
                            </div>
                        </div>
                    )} */}

                    {/* Mobile Banner */}
                    {/* {bannerPosition === Constants.BOTTOM && (
                        <div id="carouselMobileControls" className="mobileBanner">
                            <div className="pointer coustem-new-baner-mobile" onClick={() => redirectViaCustomBanner(bannerCustomUrl)}>
                                <img
                                onError={(e) => { e.target.onerror = null; e.target.src = '//no-image-available.jpeg'; }}
                                loading="lazy"
                                src={!Constants.EMPTY_STRINGS.includes(mobileBannerImageUrl) ? mobileBannerImageUrl :
                                    (Constants.EMPTY_STRINGS.includes(bannerImageUrl) ? '//no-image-available.jpeg' : bannerImageUrl)}
                                alt="banner"
                                className="d-block"
                                />
                            </div>
                        </div>
                    )} */}
                {/* // <!-- Mobile Banner --> */}
        </div >
    );
}

export default CategorySection;