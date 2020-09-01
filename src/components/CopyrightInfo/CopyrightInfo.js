import React from "react";
import cn from "./CopyrightInfo.module.scss";
import classNames from "classnames/bind";

const CopyrightInfo = () => {
    return (
        <>
            <div className={cn.Copyright}>
                © 2020 Junping Bergin PLLC, Incorporated. All Rights Reserved.
            </div>
        </>
    );
};

export default CopyrightInfo;
