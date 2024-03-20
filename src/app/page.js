"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/componets/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Social from "@/componets/Social";
import Lavelup from "@/componets/Lavelup";
import DOERS from "@/componets/DOERS";
import What from "@/componets/What";
import Update from "@/componets/Update";
import Footer from "@/componets/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Roadmap from "@/componets/Roadmap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);
  return (
    <>
      <Hero />
      <Social />
      <DOERS />
      <Lavelup />
      <What />
      <Roadmap />
      <Update />
      <Footer />
    </>
  );
}
