import React, { Component } from "react";
import cn from "./TabDropdown.module.scss";
import {
    AppBar,
    Paper,
    Tabs,
    Tab,
    Popper,
    MenuList,
    MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const aboutUsItems = [
    { label: "Our Practice", route: "/" },
    { label: "Meet Dr. Bergin", route: "/MeetDrBergin" },
];
const forPatientsItems = [
    { label: "Patient Forms", route: "/" },
    { label: "Patient Instructions", route: "/" },
];
const servicesItems = [
    { label: "Cosmetic Dentistry", route: "/" },
    { label: "Restorative Dentistry", route: "/" },
    { label: "Implant Prosthodontics", route: "/" },
    { label: "Removable Prosthodontics", route: "/" },
];
const forDoctorsItems = [
    { label: "Referring Dentists", route: "/" },
    { label: "Publications", route: "/" },
];
const tabs = [
    { key: 0, label: "Home", items: [] },
    { key: 1, label: "Meet Dr. Bergin", items: [] },
    { key: 2, label: "Services", items: servicesItems },
    { key: 3, label: "For Patients", items: forPatientsItems },
    { key: 4, label: "Gallery", items: [] },
    { key: 5, label: "For Doctors", items: forDoctorsItems },
];

class TabDropdown extends Component {
    state = {
        tabIndex: 0,
        showDropdown: false,
        targetTabElement: null,
    };

    showDropdown = (index, event) => {
        const { currentTarget } = event;

        this.setState({
            showDropdown: true,
            targetTabElement: currentTarget,
            tabIndex: index,
        });
    };

    hideDropdown = () => {
        this.setState({
            showDropdown: false,
            targetTabElement: null,
        });
    };

    renderTabs = (tab) => {
        if (tab.label == "Home") {
            return (
                <Link to="/">
                    <Tab
                        key={tab.key}
                        onMouseEnter={this.showDropdown.bind(this, tab.key)}
                        className={cn.Tab}
                        label={tab.label}
                        aria-owns={
                            this.showDropdown ? "menu-list-grow" : undefined
                        }
                        aria-haspopup={"true"}
                    />
                </Link>
            );
        } else if (tab.label == "Meet Dr. Bergin") {
            return (
                <Link to="/MeetDrBergin">
                    <Tab
                        key={tab.key}
                        onMouseEnter={this.showDropdown.bind(this, tab.key)}
                        className={cn.Tab}
                        label={tab.label}
                        aria-owns={
                            this.showDropdown ? "menu-list-grow" : undefined
                        }
                        aria-haspopup={"true"}
                    />
                </Link>
            );
        } else {
            return (
                <Tab
                    key={tab.key}
                    onMouseEnter={this.showDropdown.bind(this, tab.key)}
                    className={cn.Tab}
                    label={tab.label}
                    aria-owns={this.showDropdown ? "menu-list-grow" : undefined}
                    aria-haspopup={"true"}
                />
            );
        }
    };

    render() {
        const { targetTabElement, showDropdown, tabIndex } = this.state;

        return (
            <div onMouseLeave={this.hideDropdown}>
                <AppBar position="static" className={cn.AppBar}>
                    <Tabs
                        value={tabIndex}
                        classes={{ indicator: cn.TabUnderline }}
                        textColor="primary"
                        centered
                    >
                        {tabs.map((tab) => this.renderTabs(tab))}
                    </Tabs>

                    <Popper
                        open={showDropdown}
                        anchorEl={targetTabElement}
                        id="menu-list-grow"
                    >
                        <Paper>
                            <MenuList>
                                {tabs[tabIndex].items.map((item, index) => (
                                    <Link to={item.route}>
                                        <MenuItem
                                            key={index}
                                            onClick={this.hideDropdown}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    </Link>
                                ))}
                            </MenuList>
                        </Paper>
                    </Popper>
                </AppBar>
            </div>
        );
    }
}

export default TabDropdown;
