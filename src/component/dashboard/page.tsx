import BannerSection from "@/common/component/bannerSection/page";
import ProductGrid from "@/common/component/productListing/page";
import { Banner } from "@/models/Banners";

const Dashboard = async () => {
//   const res = await fetch(
//     `https://storestaging.krenai.in/api/v4/banner/customer?accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
//     { next: { revalidate: 5 } },
//   );
//   const data = await res.json();
//   const banners: Banner[] = data.object;
//   console.log(banners);

  return (
    <main className="main">
      <div className="container">
        <ProductGrid/>
      </div>
    </main>
  );
};

export default Dashboard;
