import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Qirat from "./components/Qirat";
import FeaturesSection from "./components/FeaturesSection";
import CategoryDetail from "./components/CategoryDetail";
import Faqs from "./components/Faqs";
import KitabulIman from "./components/Rawwi";
import MasterBook from "./components/MasterBook";
import RaqamUlAli from "./components/RaqamUlAli";
import Lists from "./components/Lists";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <Banner />
      <Qirat />
      <div className="px-1">

        <FeaturesSection />
        {/* <CategoryDetail />
        <Faqs />
        <KitabulIman />
        <MasterBook />
        <RaqamUlAli />
        <Lists /> */}
      </div>
    </>
  );
}
