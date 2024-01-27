import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Kitknowledge from "./components/KitKnowledge/Kitknowledge";
import DiyKit from "./components/DiyKit/DiyKit";
import Blank from "./components/Blank/Blank";
import Impact from "./components/Impact/Impact";
import Assistance from "./components/Assistance/Assistance";

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
    <Assistance />
    <Blank />
    <Footer />
    </>
  );
}
