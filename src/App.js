import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import BeforeAndAfter from "./components/BeforeAndAfter/BeforeAndAfter";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <div style={{minHeight: "507px"}}></div>
      <BeforeAndAfter></BeforeAndAfter>
      <div style={{minHeight: "400px"}}></div>
      <ContactInfo></ContactInfo>
    </>
  )
}