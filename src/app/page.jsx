import Banner from "@/Components/Home/Banner/Banner";
import BestDeals from "@/Components/Home/BestDeals/BestDeals";
import DownloadFeature from "@/Components/Home/DownloadFeature/DownloadFeature";
import FAQ from "@/Components/Home/FAQ/FAQ";
import NewArrival from "@/Components/Home/NewArrival/NewArrival";
import TopCategory from "@/Components/Home/TopCategory/TopCategory";

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
