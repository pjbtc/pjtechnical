import React from 'react';
import web1 from "./images/service1.jpg";
import Card from "./Card";
import Sdata from "./Sdata";
import { Container, Row, Col } from "reactstrap";

const Service=()=>{
	return(
		<div>
			<div className="my-5">
			<h1 className="text-center">Our Services </h1>
			</div>
			<div className="container-fluid mb-5">
				<div className="row">
				<div className="col-10 mx-auto ">
					<div className="row ">
						{
							Sdata.map((val, ind)=> {
								return <Col sm="4">
										<Card 
								 		key={ind}
								 		className="col-md-4"
										imgsrc= {val.imgsrc}
										title={val.title}
										 />
										 </Col>
							})
						}
					

					

					</div>
				</div>
				</div>
			</div>	
		
		</div>
		)
}
export default Service;