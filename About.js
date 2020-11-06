import React from 'react';
import web from '../src/images/contact.png';
import Common from './Common';

const About=()=>{
	return(
		<div className="aboutstyles">
			<Common
				name="Welcome to About page"
				imgsrc={web}
				visit="/contact"
				btname= "About us"
			/>
		</div>
		)
}
export default About;