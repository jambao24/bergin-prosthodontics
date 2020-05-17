import * as React from "react";
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
  { pathName: "/test", label: "Home" },
  { pathName: "/test", label: "About Us" },
  { pathName: "/test", label: "For Patients" }
];

const subItems = ["Item 1", "Item 2", "Item 3"];

class TabDropdown extends React.Component {
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
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  onMouseEnter={this.showDropdown.bind(this, index)}
                  data-key={index}
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
