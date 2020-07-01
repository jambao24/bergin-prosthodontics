import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import BeforeAndAfter from "./components/BeforeAndAfter/BeforeAndAfter";
import FeaturedServices from "./components/FeaturedServices/FeaturedServices"

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <div style={{minHeight: "700px"}}></div>
      <BeforeAndAfter></BeforeAndAfter>
      <FeaturedServices></FeaturedServices>
      <ContactInfo></ContactInfo>
    </>
  )
}