import React from "react";
import TabDropdown from "./TabDropdown/TabDropdown";
import cn from "./Navigation.module.scss";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar position="static" className={cn.AppBar}>
            <Toolbar className={cn.Toolbar}>
                <p className={cn.Name}> Bergin Prosthodontics</p>
                <div className={cn.Contact}>
                    <PhoneIcon className={cn.Phone_Icon} fontSize="small" />
                    <span className={cn.Phone_Number}>206-866-6466</span>

                    <Link to={"/contact"}>
                        <Button variant="contained" className={cn.Button}>
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </Toolbar>

            <div className={cn.Tab_Dropdown}>
                <TabDropdown></TabDropdown>
            </div>
        </AppBar>
    );
};

export default Navigation;
