import React, { useState } from "react";

 const Contact=()=> {
  const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",

  });
  const InputEvent=(event)=>{
      const{name, value} =event.target;

      setData((preVal)=>{
        return{
          ...preVal,
          [name]:value,
        };
      });
    };
  
  const formSubmit = (event) => {
      event.preventDefault();
      alert(`my  Name is ${data.fullname}.My phone is ${data.phone} and email is ${data.email} and my messages is ${data.msg}`)
  }
  return (
  	<div className="contactstyles">
  	<div className="mt-5">
			<h1 className="text-center">Contact Us </h1>
			</div>
			<div className="container contact_div">
				<div className="row">
				 	<div className="col-md-6 col-10 mx-auto">

							    <form onSubmit={formSubmit}>
							    <div className="form-group">
							      <label>
							        Full Name: </label>
							        <input
							          type="text"
							          name="fullname"
							          value={data.fullname}
							          onChange={InputEvent}
							        />
							        </div>
							     
							     <div className="form-group">
							       <label>
							        Phone: </label>
							        <input
							          type="text"
							          name="phone"
							          value={data.phone}
							          onChange={InputEvent}
							        />
							        </div>


							      <div className="form-group">
							       <label>
							        Email: </label>
							        <input
							          type="text"
							          name="email"
							          value={data.email}
							         onChange={InputEvent}
							        />
							      </div>
							      <div className="form-group">
							      <label>
							        Message: </label>
							      <textarea 

							      class="form-control" i
							      d="exampleFormControlTextarea1" 
							      rows="3"
							      name="msg"
							      value={data.msg}
							      onChange={InputEvent}>
							      </textarea>
							      </div>	
							      <input type="submit" value="Submit" />
							    </form>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Contact;