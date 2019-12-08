const getState = ({ setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			output: [],
			people: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadPlanets() {
				const url = "https://swapi.co/api/planets";

				fetch(url, {
					method: "GET"
				})
					.then(res => res.json())
					.then(result => {
						console.log("********* ", result);
						setStore({
							output: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadPeople() {
				const url = "https://swapi.co/api/people";

				fetch(url, {
					method: "GET"
				})
					.then(res => res.json())
					.then(result => {
						console.log("********* ", result);
						setStore({
							people: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadVehicles() {
				const url = "https://swapi.co/api/vehicles";

				fetch(url, {
					method: "GET"
				})
					.then(res => res.json())
					.then(result => {
						console.log("********* ", result);
						setStore({
							vehicles: result.results
						});
					})
					.catch(e => console.error(e));
			}
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
