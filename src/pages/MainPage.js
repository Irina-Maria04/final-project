import React from "react";
import { MainWrapper } from "./MainPage.style";
import MainSection from "../components/main/MainSection";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <MainSection />
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default MainPage;
