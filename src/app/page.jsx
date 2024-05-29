import Banner from "@/Components/Home/Banner/Banner";
import BestDeals from "@/Components/Home/BestDeals/BestDeals";
import DownloadFeature from "@/Components/Home/DownloadFeature/DownloadFeature";
import FAQ from "@/Components/Home/FAQ/FAQ";
import NewArrival from "@/Components/Home/NewArrival/NewArrival";
import CategoryTitle from "@/Components/Home/TopCategory/CategoryTitle";
import TopCategory from "@/Components/Home/TopCategory/TopCategory";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestDeals />
      <CategoryTitle />
      <TopCategory />
      <NewArrival />
      <DownloadFeature />
      <FAQ />
    </div>
  );
};
export default Home;
