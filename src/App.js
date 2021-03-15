import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home/Home";
import Meetdrbergin from "pages/meetdrbergin/Meetdrbergin";
import ContactUs from "pages/contact/ContactUs";
import Navigation from "./components/Navigation/Navigation";
import ContactInfo from "components/ContactInfo/ContactInfo";
import ScrollIntoView from "components/ScrollIntoView/ScrollIntoView";

export default function App() {
    return (
        <Router>
            <ScrollIntoView>
                <Navigation></Navigation>

                <Switch>
                    <Route path="/contact" component={ContactUs} />
                    <Route path="/meetdrbergin" component={Meetdrbergin} />
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>

                <Route
                    render={({ location }) =>
                        location.pathname !== "/contact" ? (
                            <ContactInfo />
                        ) : null
                    }
                />
            </ScrollIntoView>
        </Router>
    );
}
