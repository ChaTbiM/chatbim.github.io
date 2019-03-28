import React, { Component } from "react";
import Number from "./Number";
import Operator from "./Operator";
import Clear from "./Clear";
import "./style.css";

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const operators = ["+", "-", "*", "/", "="];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			last: undefined,
			next: undefined,
			op: undefined,
			res: 0
		};
	}

	numberClicked = e => {
		if (!this.state.last) {
			this.setState(
				{
					last: parseFloat(e.target.textContent)
				},
				() => {
					console.log(this.state.res);
				}
			);
		} else {
			// Be ready For CallBack hell with 3 levels
			if (this.state.op === "+") {
				this.setState(
					{
						next: parseFloat(e.target.textContent)
					},
					() => {
						this.setState(
							{
								res: this.state.last + this.state.next
							},
							() => {
								this.setState(
									{
										last: this.state.res,
										next: undefined
									},
									() => {
										console.log(
											`res ${this.state.res}`,
											`last ${this.state.last} `,
											`next ${this.state.next} `
										);
									}
								);
							}
						);
					}
				);
			}
		}
	};

	opClicked = e => {
		this.setState(
			{
				op: e.target.textContent
			},
			() => {
				console.log(this.state.op);
			}
		);
	};

	render() {
		return (
			<div className="app">
				<h1 className="results">{this.state.res} </h1>
				{/*commen*/}
				<div className="main">
					<div className="main__left">
						<Clear className="clear cell grey" />
						<div className="main__left__number">
							{numbers.map((numb, i) => {
								let ii = i.toString();
								return (
									<Number numClicked={this.numberClicked} key={ii} num={numb} />
								);
							})}
						</div>
					</div>
					<div className="main__right">
						{operators.map((ope, i) => {
							let ii = i * 10;
							ii.toString();
							return <Operator opClicked={this.opClicked} key={ii} op={ope} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
