import React from 'react';
import cn from './Summary.module.scss';
import DrBergin from 'assets/summary/dr_bergin.jpg';
import { Button } from "@material-ui/core";

const Summary = () => {
	return (
		<>
			<div className={cn.Summary}>

				<div className={cn.Welcome_Text}>

					<div className={cn.Left_Space}></div>
					<div className={cn.Right_Box}>
						<div className={cn.Title_Text}>
							<span>Welcome to</span>
							<span>Bergin Prosthodontics</span>
						</div>
						<hr className={cn.Break}></hr>
							<div className={cn.Paragraph}>
							<p>lots of text here about the office lots of text here about the office</p>
							</div>
						
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