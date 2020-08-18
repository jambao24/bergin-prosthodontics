import React from "react";
import cn from "./Meetdrbergin.module.scss";
import DrBergin from "assets/home/summary/dr_bergin.jpg";
import BoardofProstho from "assets/meetdrbergin/BoardofProsthodontics.png";
import SKCS from "assets/meetdrbergin/SKCS.png";
import ADA from "assets/meetdrbergin/ADA.png";
import WSDA from "assets/meetdrbergin/WSDA.png";
import SeattleProstho from "assets/meetdrbergin/SeattleProsthodontics.png";

export default function Meetdrbergin() {
    return (
        <div className={cn.Meet_Dr_Bergin}>
            <div className={cn.Bergin_Image}>
                <img src={DrBergin}></img>
            </div>

            <div className={cn.Welcome_Text}>
                <div className={cn.Title_Text}>
                    <span>Meet</span>
                    <span>Dr. Bergin</span>
                </div>
                <hr className={cn.Break}></hr>
                <div className={cn.Paragraph}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent at congue purus, quis sagittis mauris.
                        Pellentesque bibendum nisl quis gravida scelerisque.
                        Nulla viverra, nunc et tempor lacinia, lectus ligula
                        lacinia magna, aliquet faucibus sapien nulla nec orci.
                        Maecenas viverra velit ac nulla ultricies, in
                        consectetur sapien suscipit. Morbi feugiat sapien nec
                        tortor congue malesuada et ut eros. Praesent ipsum
                        risus, ornare quis pulvinar sed, scelerisque quis risus.
                        Nulla iaculis mi laoreet libero placerat pulvinar.
                    </p>
                    <div className={cn.Logos}>
                        <img src={BoardofProstho}></img>
                        <img src={SKCS}></img>
                        <img src={ADA}></img>
                        <img src={WSDA}></img>
                        <img src={SeattleProstho}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
