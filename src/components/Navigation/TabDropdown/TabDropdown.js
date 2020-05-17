import React, { Component } from "react";
import "./TabDropdown.css";
import { AppBar, Paper, Tabs, Tab, Popper, MenuList, MenuItem} from "@material-ui/core";

const HomeItems = ["Home 1", "Home 2", "Home 3"];
const AboutUsItems = ["AboutUs 1", "AboutUs 2", "AboutUs 3"];
const ForPatientsItems = ["ForPatients 1", "ForPatients 2", "ForPatients 3"];
const ServicesItems = ["Services 1", "Services 2", "Services 3"];
const ForDoctorsItems = ["ForDoctors 1", "ForDoctors 2", "ForDoctors 3"];

const tabs = [
  { key: 0, pathName: "/test", label: "Home", items: HomeItems },
  { key: 1, pathName: "/test", label: "About Us", items: AboutUsItems },
  { key: 2, pathName: "/test", label: "For Patients", items: ForPatientsItems },
  { key: 3, pathName: "/test", label: "Services", items: ServicesItems },
  { key: 4, pathName: "/test", label: "Gallery", items: [] },
  { key: 5, pathName: "/test", label: "For Doctors", items: ForDoctorsItems }
];

class TabDropdown extends Component {
  state = {
    tabIndex: 0,
    showDropdown: false,
    targetTabElement: null
  };

  showDropdown = (index, event) => {
    const { currentTarget } = event;
    
    this.setState({
      showDropdown: true,
      targetTabElement: currentTarget,
      tabIndex: index
    });
  };

  hideDropdown = () => {
    this.setState({ 
      showDropdown: false,
      targetTabElement: null
    });
  };

  render() {
    const { targetTabElement, showDropdown, tabIndex } = this.state;

    return (
      <div onMouseLeave={this.hideDropdown}>
        <AppBar position="static">
            <Tabs
              value={tabIndex}
              indicatorColor="primary"
              textColor="primary"
              centered>
              {tabs.map((tab) => (
                <Tab
                  key={tab.key}
                  onMouseEnter={this.showDropdown.bind(this, tab.key)}
                  data-key={tab.key}
                  className="TabDropdown_Tab"
                  label={tab.label}
                  aria-owns={showDropdown ? "menu-list-grow" : undefined}
                  aria-haspopup={"true"}
                />
              ))}
            </Tabs>

            <Popper open={showDropdown} anchorEl={targetTabElement} id="menu-list-grow">
              <Paper>
                <MenuList>
                  {tabs[tabIndex].items.map((item, index) => (
                    <MenuItem key={index} onClick={this.handleMenuClose}>
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
