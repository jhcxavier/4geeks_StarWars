import React, { useContext } from "react";
import Planet from "../component/planet";
import People from "../component/people";
import Vehicles from "../component/vehicle";

export const Home = () => {
	//console.log("testeee", store.resultss);
	return (
		<div>
			<Planet />
			<People />
			<Vehicles />
		</div>
	);
};
