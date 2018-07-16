import React from 'react';


export default class Contador extends React.Component {
constructor(){
	super();
	this.state = {
		contador: 0,
	};
}

decre(){
	this.setState({
		contador: this.state.contador -1,

	});
}

incre(){
	this.setState({
		contador: this.state.contador +1,

	});

}

render(){
	return(
		<div>

		<h1>{this.state.contador}</h1>
		 <div>
		      <button onClick='{this.decre.bind(this)}'>-</button>
		      <button onClick='{this.incre.bind(this)}'>+</button>
		 </div>

		</div>
		);
}

}