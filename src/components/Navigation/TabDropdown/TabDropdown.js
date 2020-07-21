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

const aboutUsItems = ["Our Practice", "Meet Dr. Bergin", "Meet Our Team"];
const forPatientsItems = ["Patient Forms", "Financial Policy", "Insurance"];
const servicesItems = [
    "Cosmetic Dentistry",
    "Restorative Denstistry",
    "Implant Prosthodontics",
    "Removable Prosthodontics",
];
const forDoctorsItems = ["Referring Dentists", "Publications"];

const tabs = [
    { key: 0, pathName: "/test", label: "Home", items: [] },
    { key: 1, pathName: "/test", label: "About Us", items: aboutUsItems },
    { key: 2, pathName: "/test", label: "Services", items: servicesItems },
    {
        key: 3,
        pathName: "/test",
        label: "For Patients",
        items: forPatientsItems,
    },
    { key: 4, pathName: "/test", label: "Gallery", items: [] },
    { key: 5, pathName: "/test", label: "For Doctors", items: forDoctorsItems },
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
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.key}
                                onMouseEnter={this.showDropdown.bind(
                                    this,
                                    tab.key
                                )}
                                className={cn.Tab}
                                label={tab.label}
                                aria-owns={
                                    showDropdown ? "menu-list-grow" : undefined
                                }
                                aria-haspopup={"true"}
                            />
                        ))}
                    </Tabs>

                    <Popper
                        open={showDropdown}
                        anchorEl={targetTabElement}
                        id="menu-list-grow"
                    >
                        <Paper>
                            <MenuList>
                                {tabs[tabIndex].items.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={this.hideDropdown}
                                    >
                                        {item}
                                    </MenuItem>
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
