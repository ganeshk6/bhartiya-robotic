import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Kitknowledge from "./components/KitKnowledge/Kitknowledge";
import DiyKit from "./components/DiyKit/DiyKit";
import Blank from "./components/Blank/Blank";
import Impact from "./components/Impact/Impact";
import Assistance from "./components/Assistance/Assistance";
import Testimonial from "./components/Testimonial/Testimonial";
import Review from "./components/Review/Review";
import CopyRight from "./components/CopyRight/CopyRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhoWe from "./components/WhoWe/WhoWe";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Kitknowledge />
    <DiyKit />
    <Blank />
    <Impact />
    <Blank />
    <WhoWe />
    <Testimonial />
    <Assistance />
    <Blank />
    <Review />
    <Footer />
    <CopyRight/>
    </>
  );
}
