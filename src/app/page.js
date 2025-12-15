import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Qirat from "./components/Qirat";
import FeaturesSection from "./components/FeaturesSection";

import Faqs from "./components/Faqs";

import MasterBook from "./components/MasterBook";
import RaqamUlAli from "./components/RaqamUlAli";
import Lists from "./components/Lists";
import Rawwi from "./components/Rawwi";
import KitabulIman from "./components/masdar";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <Banner />
      <Qirat />
      <div className="px-1">

        <FeaturesSection />
        <Rawwi />
        <Faqs />
        <KitabulIman/>
        <MasterBook />
        <RaqamUlAli />
        <Lists />
      </div>
    </>
  );
}
