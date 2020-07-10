import React from 'react';
import cn from './Summary.module.scss';
import DrBergin from 'assets/home/summary/dr_bergin.jpg';
import { Button } from "@material-ui/core";

const Summary = () => {
	return (
		<>
			<div className={cn.Summary}>

                <div className={cn.Welcome_Text}>
                    <div className={cn.Title_Text}>
                        <span>Welcome to</span>
                        <span>Bergin Prosthodontics</span>
                    </div>
                    <hr className={cn.Break}></hr>
                    <div className={cn.Paragraph}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Praesent at congue purus, quis sagittis mauris. Pellentesque 
                            bibendum nisl quis gravida scelerisque. Nulla viverra, nunc et 
                            tempor lacinia, lectus ligula lacinia magna, aliquet faucibus sapien 
                            nulla nec orci. Maecenas viverra velit ac nulla ultricies, in consectetur 
                            sapien suscipit. Morbi feugiat sapien nec tortor congue malesuada et ut eros. 
                            Praesent ipsum risus, ornare quis pulvinar sed, scelerisque quis risus. Nulla 
                            iaculis mi laoreet libero placerat pulvinar. 
                        </p>
                    </div>
                </div>

				<div className={cn.Bergin_Image}>
					<img src={DrBergin}></img>
					<Button variant="contained" className={cn.Button}>Meet Dr. Bergin</Button>
				</div>

			</div>
		</>
	)
}

export default Summary 