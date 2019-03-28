import React, { Component } from "react";

const Number = props => {
	return (
		<p onClick={props.numClicked} className="number cell grey">
			{props.num}
		</p>
	);
};

export default Number;
