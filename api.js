// const options = {
// 	method: 'POST',
// 	headers: {'Authorization': 'Bearer JWD6E5GFNCM6PMGAKX9JFNCKHJWZ'},
// 	data:'{"emission_factor": "passenger_vehicle-vehicle_type_black_cab-fuel_source_na-distance_na-engine_size_na", "parameters": {"passengers": 4,"distance": 100,"distance_unit": "mi"}}'
	
// };

// fetch('https://beta3.api.climatiq.io/estimate', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

function car(){
	var url = "https://beta2.api.climatiq.io/estimate";

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	
	xhr.setRequestHeader("Authorization", "Bearer JWD6E5GFNCM6PMGAKX9JFNCKHJWZ");
	
	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
		  console.log(xhr.status);
		//   console.log(xhr.responseText);
		  var responseJson = JSON.parse(xhr.responseText)
		  console.log(responseJson.co2e)
		  var div = document.getElementById('car');
		  div.innerHTML += "car: "+responseJson.co2e +" CO2e";
	   }};
	
	var data = `{
			"emission_factor": "passenger_vehicle-vehicle_type_black_cab-fuel_source_na-distance_na-engine_size_na",
			"parameters": {
				"passengers": 4,
				"distance": 100,
				"distance_unit": "mi"
			}
		}`;
	
	xhr.send(data);

}
	





function bus() {

	var url = "https://beta2.api.climatiq.io/estimate";
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	
	xhr.setRequestHeader("Authorization", "Bearer JWD6E5GFNCM6PMGAKX9JFNCKHJWZ");
	
	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
		  console.log(xhr.status);
		//   console.log(typeof xhr.responseText);
		  var responseJson = JSON.parse(xhr.responseText)
		  console.log(responseJson.co2e)
		  var div = document.getElementById('bus');
			div.innerHTML += "bus: "+responseJson.co2e+" CO2e";
	   }};
	
	var data = `{
			"emission_factor": "passenger_vehicle-vehicle_type_bus-fuel_source_diesel-distance_na-engine_size_na",
			"parameters": {
				"passengers": 4,
				"distance": 100,
				"distance_unit": "mi"
			}
		}`;
	
	xhr.send(data);
}



car()
bus()



/////////////////////////planet//////////////////////////////////////////
