import React, { useContext } from "react";
import { Context } from "../store/appContext";
const Planet = () => {
	const { store, actions } = useContext(Context);
	return (
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
	);
};
export default Planet;
