import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import FrontPage from "./components/FrontPage";
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
					<FrontPage></FrontPage>
				</Route>
			</Switch>

		</Router>
	)
}