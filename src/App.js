import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Summary from "./components/Summary/Summary";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import BeforeAndAfter from "./components/BeforeAndAfter/BeforeAndAfter";
import FeaturedServices from "./components/FeaturedServices/FeaturedServices"
import Title from "./components/Title/Title";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Title></Title>
      <Summary></Summary>
      <FeaturedServices></FeaturedServices>
      <ContactInfo></ContactInfo>
    </>
  )
}