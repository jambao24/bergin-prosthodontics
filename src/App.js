import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home/Home";
import Meetdrbergin from "pages/meetdrbergin/Meetdrbergin";
import Navigation from "./components/Navigation/Navigation";
import ContactInfo from "components/ContactInfo/ContactInfo";
import ScrollIntoView from "components/ScrollIntoView/ScrollIntoView";

export default function App() {
    return (
        <Router>
            <ScrollIntoView>
                <Navigation></Navigation>

                <Switch>
                    <Route path="/contact">Contact Page</Route>
                    <Route path="/meetdrbergin" component={Meetdrbergin} />

                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>

                <ContactInfo></ContactInfo>
            </ScrollIntoView>
        </Router>
    );
}
