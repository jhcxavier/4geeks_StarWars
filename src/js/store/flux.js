const getState = ({ setStore }) => {
	return {
		store: {
			output: [],
			people: [],
			vehicles: []
		},
		actions: {
			loadPlanets() {
				const url = "https://swapi.co/api/planets";

				fetch(url)
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

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("people*** ", result);
						setStore({
							people: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadVehicles() {
				const url = "https://swapi.co/api/vehicles";

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("vehicles*** ", result);
						setStore({
							vehicles: result.results
						});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
