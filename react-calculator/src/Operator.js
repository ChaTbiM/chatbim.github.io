import React, { Component } from "react";

const Operator = props => {
	return (
		<p onClick={props.opClicked} className="cell red">
			{props.op}
		</p>
	);
};

export default Operator;
