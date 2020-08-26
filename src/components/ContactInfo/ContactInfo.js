import React from "react";
import cn from "./ContactInfo.module.scss";
import classNames from "classnames/bind";

const ContactInfo = () => {
    return (
        <>
            <div className={cn.Copyright}>
                © 2020 Junping Bergin PLLC, Incorporated. All Rights Reserved.
            </div>
        </>
    );
};

export default ContactInfo;
