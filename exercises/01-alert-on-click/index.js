window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

document.getElementById("button2").addEventListener("click", event => {
	alert("Your second function!");
});
