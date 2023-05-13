window.addEventListener("DOMContentLoaded", () => {
	// Execute the following callback every 1000ms (1 second)
	setInterval(() => {
		// let's get the date every second
		const now = new Date();
		const hours = now.getHours() % 12;
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
		document.getElementById("hours").style.transform = `rotate(${30 * (hours+1)}deg)`;
		document.getElementById("minutes").style.transform = `rotate(${
			6 * minutes
		}deg)`;
		document.getElementById("seconds").style.transform = `rotate(${
			6 * seconds
		}deg)`;
	}, 1000);
});