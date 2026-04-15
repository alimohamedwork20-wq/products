import React, { useContext } from "react";
import HeroSlider from "../Components//HeroSlider/HeroSlider";
import TopHeaders from "../Components/Headers/TopHeaders";
import ButtonHeaders from "../Components/Headers/ButtonHeaders";
import SlideProducts from "../Components/SlideProducts/SlideProducts";
import { CartContext } from "../Components/Context/CartContext";
import PageTransition from "../Components/PageTransition";
import ArrowUp from "../Components/ArrowUp";
import SearchPage from "./SearchPage/SearchPage";
export default function Home() {
  return (
    <PageTransition>
      <HeroSlider></HeroSlider>
      <SlideProducts
        path={"product"}
        api={"smartphones"}
        style={{ paddingTop: "10%" }}
        title={"Mobile"}
        dis={
          "Smartwatches that keep you on time, fit, and connected — right from your wrist."
        }
      ></SlideProducts>
      <SlideProducts
        path={"product"}
        api={"mens-watches"}
        title={"Watches"}
        dis={
          "Smartwatches that keep you on time, fit, and connected — right from your wrist."
        }
      ></SlideProducts>
      <SlideProducts
        path={"product"}
        api={"kitchen-accessories"}
        title={"kitchen accessories"}
        dis={
          "Powerful laptops built for work, creativity, and entertainment without limits."
        }
      ></SlideProducts>
      <SlideProducts
        path={"product"}
        api={"mobile-accessories"}
        title={"Mobile Accessories"}
        dis={
          "Discover reliable and modern vehicles that combine comfort, safety, and performance."
        }
      ></SlideProducts>
      <SlideProducts
        path={"product"}
        api={"groceries "}
        title={"groceries "}
        dis={
          "Discover reliable and modern vehicles that combine comfort, safety, and performance."
        }
      ></SlideProducts>
      <ArrowUp></ArrowUp>
    </PageTransition>
  );
}
