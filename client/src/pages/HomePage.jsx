import React from "react";
import MainLayout from "../components/MainLayout";
import CTA from "../pages/CTA";
import Hero from "./Hero";
import DisplayPost from "./DisplayPost";


const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <DisplayPost />
    
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
