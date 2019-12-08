import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	if (store.output == null || store.resultss == undefined) {
		console.log("loading");
	} else {
		console.log("testeee", store.resultss);
	}
	//console.log("testeee", store.resultss);
	return (
		<div>
			<div className="text-center mt-5" style={{ width: "33%", position: "absolute" }}>
				<table className="table table-bordered mt-2 pt-5">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Planet</th>
							{/* <th scope="col">People</th> */}
							{/* <th scope="col">Vehicle</th> */}
						</tr>
					</thead>
					<tbody className="tbody-dark">
						{store.output.map((e, index) => (
							<tr key={index}>
								<td>{e.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="text-center mt-5" style={{ width: "33%", position: "absolute", left: "34%" }}>
				<table className="table table-bordered mt-2 pt-5">
					<thead className="thead-dark">
						<tr>
							<th scope="col">People</th>
							{/* <th scope="col">People</th> */}
							{/* <th scope="col">Vehicle</th> */}
						</tr>
					</thead>
					<tbody className="tbody-dark">
						{store.people.map((e, index) => (
							<tr key={index}>
								<td>{e.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="text-center mt-5" style={{ width: "32%", position: "absolute", right: "0%" }}>
				<table className="table table-bordered mt-2 pt-5">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Vehicles</th>
							{/* <th scope="col">People</th> */}
							{/* <th scope="col">Vehicle</th> */}
						</tr>
					</thead>
					<tbody className="tbody-dark">
						{store.vehicles.map((e, index) => (
							<tr key={index}>
								<td>{e.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
