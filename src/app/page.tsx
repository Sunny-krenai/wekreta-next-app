import Dashboard from "@/component/dashboard/page";

const Home=async()=> {
  const catWiseProductRes = await fetch(
    `https://accountstaging.krenai.in/api/v4/configuration/store-front-design?accessKey=c7c11d33-c0f0-11ee-8f56-02feba6da81d`,
    { next: { revalidate: 5 } },
);
const catWiseProductdata = await catWiseProductRes.json();
// console.log("catWiseProductdata"+JSON.stringify(catWiseProductdata));

  return (
    <div>
      <Dashboard></Dashboard>
    </div>
  );
}
export default Home;