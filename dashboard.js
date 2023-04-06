function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var locationInput = document.getElementById("location-input");
	locationInput.value = latitude + ", " + longitude;
}

var locationButton = document.getElementById("location-button");
locationButton.addEventListener("click", getLocation);