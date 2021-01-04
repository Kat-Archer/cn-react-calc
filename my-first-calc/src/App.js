import React, {Component} from "react";
import './styles/main.css';

class App extends Component {
	state = {
		display: "",
		display2: 0,
		buttons: [
			{ value: "C", styleName: "clrButton" },
			{ value: "/", styleName: "funButton" },
			{ value: "7", styleName: "numButton" },
			{ value: "8", styleName: "numButton" },
			{ value: "9", styleName: "numButton" },
			{ value: "*", styleName: "funButton" },
			{ value: "4", styleName: "numButton" },
			{ value: "5", styleName: "numButton" },
			{ value: "6", styleName: "numButton" },
			{ value: "-", styleName: "funButton" },
			{ value: "1", styleName: "numButton" },
			{ value: "2", styleName: "numButton" },
			{ value: "3", styleName: "numButton" },
			{ value: "+", styleName: "funButton" },
			{ value: "0", styleName: "zerButton" },
			{ value: ".", styleName: "decButton" },
			{ value: "=", styleName: "eqlButton" }
		  ]
	};



	screen1 = (val) => {
		// if equals was pressed prev
		
		console.log(this.state.display);
		// if clear is pressed, clear display
		if (val === "C") {
			this.setState({ display: ""});
		// else add to display
		} else if ( this.state.display.endsWith("=") ) {
			console.log("confirmed route");
			if ( isFinite(val) ) {
				console.log("confirmed num");
				this.setState({ display: val});
				// make a new string and remove =
			} else {
				console.log("confirmed NaN");
				let newStr = this.state.display.replace("=", "");
				console.log(newStr);
				// logs str without =
				// reset the state
				this.setState({ display: newStr + val});
				console.log(this.state.display);
			};
		} else {
			this.setState({ display: this.state.display + val });
		}
	}

	screen2 = (val) => {
		if (val === "=") {
			this.setState({ display2: eval(this.state.display)});
		} else if (val === "C") {
			this.setState({ display2: 0});
		} else if (isFinite(val)) {
			this.setState({ display2: val});
		}
	}


	actions = (val) => {
		this.screen1(val);
		this.screen2(val);
		
	};

	render() {
		return (

			<div className="calc">
				<div className="screen-container">
					<div className="screen1">
						<h2 className="top-screen">{this.state.display}</h2>
					</div>
					<div className="screen2">
						<h1 className="bottom-screen">{this.state.display2}</h1>
					</div>
				</div>
					
				<div className="button-container">
					{this.state.buttons.map((button) => {
						return (
							<button 
								onClick={ () => this.actions(button.value)} 
								className={button.styleName}
							>
								{button.value}
							</button>
						)
					})}
				</div>
			</div>

		)
	}
}




export default App;