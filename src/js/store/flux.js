const getState = ({ getStore, getActions, setStore }) => {
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
			people:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			fetchPeople: () => {
				fetch('https://www.swapi.tech/api/people', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => response.json()).then(data => {
					const parsedData = data.results.map(el => ({ ...el, type: 'people', typeImg:'characters' }))
					setStore({ people: parsedData })
				}
			).then(() => console.log(getStore(),"getStore") 
			)},
		}
	};
};

export default getState;
