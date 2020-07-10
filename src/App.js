import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from "pages/home/Home";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
	return (
		<Router>
			<Navigation></Navigation>

			<Switch>
				<Route path="/contact">
					Contact Page
				</Route>

				<Route path="/">
					<Home></Home>
				</Route>
			</Switch>

		</Router>
	)
}