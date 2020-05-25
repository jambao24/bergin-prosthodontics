import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ContactInfo from "./components/ContactInfo/ContactInfo";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <div style={{minHeight: "1000px"}}></div>
      <ContactInfo></ContactInfo>
    </>
  )
}