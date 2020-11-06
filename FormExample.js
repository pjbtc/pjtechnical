import React,{Component} from 'react';
import './form.css';

class FormExample extends Component{
	constructor(props){
		super(props);
		this.state= { fullname: "pjbtc",
						email:"pjbhattachan@gmail.com",
						phone: "0892035122",
						message: "hello nepal"

		}
	}
	//handlename=(event)=>{
		//this.setState({fullname:event.target.value})
		

	//}
	//handlename=(event)=>{
		/*this.setState({phone:event.target.value})
		

	}
	handlename=(event)=>{
		this.setState({email:event.target.value})
		

	}
	handlename=(event)=>{
		this.setState({message:event.target.value})
		

	}*/
	handlechangeall=(event)=>{
		this.setState({[event.target.name]: event.target.value})

	}

	handlesubmit=(event)=>{
		//alert(`my name is ${this.state.fullname}. 
			//My email is ${this.state.email} and 
			//my phone is ${this.state.phone}. 
			//Here is my ${this.state.message}`);

		alert(JSON.stringify(this.state));
		event.preventDefault();
	}


	render(){
	return(
		<div>
			<form onSubmit={this.handlesubmit}>
				<label>Fullname</label><br/>
				<input type="text"  name="fullname" value={this.state.fullname}
					onChange={this.handlechangeall}/><br/>
				<label>Phone</label><br/>
				<input type="number" name="phone"value={this.state.phone}
					onChange={this.handlechangeall}/><br/>

				<label>Email</label><br/>
				<input type="email" name="email" value={this.state.email}
						onChange={this.handlechangeall}/><br/>

				<label>Message</label><br/>
				<textarea  name="message" value={this.state.message}
						onChange={this.handlechangeall}/><br/>

				<input type="submit" value="send"/>
			</form>

		</div>
	)
}
}
export default FormExample;