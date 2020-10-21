window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		alert(containerElm.id);
	});
};
