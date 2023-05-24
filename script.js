function volume_sphere() {

	let r = document.getElementById("radius").value;
	let v = (4/3) * Math.PI * Math.pow(r,3;

	document.getElementById("value").value=v;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
