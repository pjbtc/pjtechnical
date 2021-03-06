import React from 'react';
import {NavLink} from 'react-router-dom';
import web1 from "./images/service1.jpg";

const Card=(props)=>{
	return(
		<div>
					
					<div className=" col-10 mx-auto">
					<div className="card" >

                         <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc}/>
                         <div className="card-body">
                           <h5 className="card-title font-weight-bold">{props.title}</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                           <NavLink to="" className="btn btn-primary">
                           Go somewhere
                           </NavLink>
                         </div>
                       </div>
					</div>
					
		</div>
		
		)
}	
export default Card;			