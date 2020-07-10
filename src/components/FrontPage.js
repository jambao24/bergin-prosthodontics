import React from "react";
import Summary from "./Summary/Summary";
import ContactInfo from "./ContactInfo/ContactInfo";
import FeaturedServices from "./FeaturedServices/FeaturedServices"
import Title from "./Title/Title";

export default function FrontPage() {
	return (
		<>
			<Title></Title>
			<Summary></Summary>
			<FeaturedServices></FeaturedServices>
			<ContactInfo></ContactInfo>
		</>
	)
}