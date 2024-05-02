import BannerSection from "@/common/component/bannerSection/page";
import CategorySection from "@/common/component/categorySection/page";
import CategoryWiseProdictSection from "@/common/component/categoryWiseProdictSection/page";
import CollectionSection from "@/common/component/collectionSection/page";
import ProductGrid from "@/common/component/productListing/page";
import { Banner } from "@/models/Banners";
import { CategoryWiseProducts } from "@/models/CategoryWiseProducts";
import { Product } from "@/models/Product";

const Dashboard = async () => {
    //   const res = await fetch(
    //     `https://storestaging.krenai.in/api/v4/banner/customer?accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
    //     { next: { revalidate: 5 } },
    //   );
    //   const data = await res.json();
    //   const banners: Banner[] = data.object;

    const featuredProductRes = await fetch(
        `https://storestaging.krenai.in/api/v4/product/customer?id=0&secondaryKey=&productName=&categoryName=&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=1&search=&currentPage=1&itemsPerPage=5&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const featuredProductData = await featuredProductRes.json();
    const featuredProducts: Product[] = featuredProductData.object;


    const topSellingProductRes = await fetch(
        `https://storestaging.krenai.in/api/v4/product/top-selling?itemsPerPage=5&secondaryKey=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const topSellingProductdata = await topSellingProductRes.json();
    const topSellingProducts: Product[] = topSellingProductdata.object;

    const trendingProductRes = await fetch(
        `https://storestaging.krenai.in/api/v4/product/trending-product?itemsPerPage=5&secondaryKey=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const trendingProductdata = await trendingProductRes.json();
    const trendingProducts: Product[] = trendingProductdata.object;

    const topRatedProductRes = await fetch(
        `https://storestaging.krenai.in/api/v4/product-review/top-rated?itemsPerPage=5&secondaryKey=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const topRatedProductdata = await topRatedProductRes.json();
    const topRatedProducts: Product[] = topRatedProductdata.object;

    const recentlyAddedProductRes = await fetch(
        `https://storestaging.krenai.in/api/v4/product/recently-added?itemsPerPage=5&secondaryKey=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const recentlyAddedProductdata = await recentlyAddedProductRes.json();
    const recentlyAddedProducts: Product[] = recentlyAddedProductdata.object;

    const dodProductRes = await fetch(
        `https://storestaging.krenai.in/api/v4/deals-of-the-day/public?itemsPerPage=5&secondaryKey=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const dodProductdata = await dodProductRes.json();
    const dodProducts: Product[] = dodProductdata.object;

    const catWiseProductRes = await fetch(
        `https://storestaging.krenai.in/api/v4/product/public/catagory-wise?itemsPerCategory=10&secondaryKey=&accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
        { next: { revalidate: 5 } },
    );
    const catWiseProductdata = await catWiseProductRes.json();
    // const catWiseProducts: CategoryWiseProducts[] = catWiseProductdata.object;

    let map:Map<string,{products:Product[],totalItems:number}> = new Map(Object.entries(catWiseProductdata.object));


    return (
        <main className="main">
            <div className="container">
                <CategorySection />
                <CollectionSection />
                <ProductGrid products={featuredProducts} sectionName="All Featured Products" />
                <ProductGrid products={topSellingProducts} sectionName="Top Selling Products" />
                <ProductGrid products={trendingProducts} sectionName="Trending Products" />
                <ProductGrid products={topRatedProducts} sectionName="Top Rated Products" />
                <ProductGrid products={recentlyAddedProducts} sectionName="Recently Added Products" />
                <ProductGrid products={dodProducts} sectionName="Deals Of The Day" />
                <CategoryWiseProdictSection data={map}/>
            </div>
        </main>
    );
};

export default Dashboard;
