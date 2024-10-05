import Image from "next/image";
import Navbar from "./components/home/header";
import HeroSection from "./components/home/HeroSection";
import Section1 from "./components/home/Section1";
import Section2 from "./components/home/Section2";
import Section3 from "./components/home/Section3";
import Section4 from "./components/home/Section4";
import Section5 from "./components/home/Section5";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>
    </>
  );
}
