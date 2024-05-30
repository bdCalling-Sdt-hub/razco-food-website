import Banner from "@/Components/Home/Banner";
import BestDeals from "@/Components/Home/BestDeals";
import DownloadFeature from "@/Components/Home/DownloadFeature";
import FAQ from "@/Components/Home/FAQ";
import NewArrival from "@/Components/Home/NewArrival";
import TopCategory from "@/Components/Home/TopCategory";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopCategory />
      <BestDeals />
      <NewArrival />
      <DownloadFeature />
      <FAQ />
    </div>
  );
};
export default Home;
