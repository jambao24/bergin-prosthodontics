import React from "react";
import TabDropdown from "./TabDropdown/TabDropdown";
import cn from "./Navigation.module.scss";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";

const Navigation = () => {
	return (
		<AppBar position="static" className={cn.AppBar}>

			<Toolbar className={cn.Toolbar}>
				<PhoneIcon className={cn.Phone_Icon} fontSize="small" />
				<p className={cn.Phone_Number}>206-866-6466</p>
				<Button variant="contained" className={cn.Button}>Contact Us</Button>
			</Toolbar>

			<div className={cn.Tab_Dropdown}>
				<TabDropdown></TabDropdown>
			</div>

		</AppBar>
	)
}

export default Navigation;