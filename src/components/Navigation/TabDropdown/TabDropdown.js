import React, { Component } from "react";
import "./TabDropdown.css";
import {
  AppBar,
  Paper,
  Tabs,
  Tab,
  Popper,
  MenuList,
  MenuItem,
} from "@material-ui/core";

const tabs = [
  { key: 0, pathName: "/test", label: "Home" },
  { key: 1, pathName: "/test", label: "About Us" },
  { key: 2, pathName: "/test", label: "For Patients" }
];

const subItems = ["Item 1", "Item 2", "Item 3"];

class TabDropdown extends Component {
  state = {
    tabIndex: 0,
    showDropdown: false,
    anchorEl: null
  };

  showDropdown = (index, event) => {
    const { currentTarget } = event;
    
    this.setState({
      showDropdown: true,
      anchorEl: currentTarget,
      tabIndex: index
    });
  };

  hideDropdown = () => {
    this.setState({ 
      showDropdown: false,
      anchorEl: null
    });
  };

  render() {
    const { anchorEl, showDropdown, tabIndex } = this.state;

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

            <Popper open={showDropdown} anchorEl={anchorEl} id="menu-list-grow">
              <Paper>
                <MenuList>
                  {subItems.map((item, index) => (
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
