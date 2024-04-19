const testStart = document.getElementById("start-test");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-button");
const hideForResult = document.getElementsByClassName('hide-for-result');

let startTime, endTime, testStarted;

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = '#';
	testStart.style.boxShadow = '10px 10px 5px azure';
	for(let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function showButton() {
	testStarted = false;
	testStart.style.backgroundColor = getRandomColor();
	testStart.style.opacity = "100";
	testStart.classList.add('slide-in-bottom');
	startTime = new Date().getTime();
}
function hideButton() {
	testStart.style.opacity = "10";
	testStart.classList.remove("button-color");
}
function showResult() {
	resetButton.style.opacity = "100";
	resetButton.classList.add('slide-in-left');
	const reactionTime = (endTime - startTime) / 1000;
	if(reactionTime) {
		result.innerHTML = "Result: " + reactionTime.toFixed(5) + "s.";
		result.classList.add('slide-in-bottom');
		for(var i = 0; i < hideForResult.length; i++) {
			hideForResult[i].style.display = 'none';
		}
	}
	resetButton.style.display = "block";
}
function startTest() {
	resetButton.style.opacity = "0";

	setTimeout(function() {
		showButton();
	}, Math.random() * 2000 + 1000);
}
function reset() {
	result.innerHTML = "";
	resetButton.style.opacity = "0";
	resetButton.classList.add('slide-in-left');
	startTest();
}
testStart.addEventListener("click", function() {
	if(!testStarted) {
		endTime = new Date().getTime();
		if(!testStart.style.backgroundColor) {
			startTest();
			resetButton.style.opacity = "100";
			resetButton.classList.remove("pointer-prevent");
		}
		hideButton();
		showResult();
		testStarted = true;
	}
});
resetButton.addEventListener("click", function() {
	reset();
});