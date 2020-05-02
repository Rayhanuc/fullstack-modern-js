const btn = document.querySelector('.action');
const result = document.querySelector('.result');

// API RELATED CONSTANTS
const BASE = "https://api.weatherstack.com/";
const KEY = "32d21ebaeca4813649bac17aec078a70";
const PLACE = "Chittagong";


btn.addEventListener('click', f=>{
	fetch(`${BASE}current?access_key=${KEY}&query=${PLACE}`)
		.then(response => response.json())
		.then(forecast=>{
			// result.innerHTML = `The weather in ${forecast.location.name}`
			console.log(forecast);
			result.innerHTML = `<h1 style="color:green;">The weather in ${forecast.location.name} is ${forecast.current.temperature} Degree Celcius</h1>`
		}
		)
});