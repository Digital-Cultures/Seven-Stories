function addOpenBook(){
		// 	<a-collada-model src="#bookhouse" position="7 2 -1" scale="10 10 10" color="#CCCCCC" rotation="0 0 0" material="shader: flat" collada-model="" visible="">
		// </a-collada-model>
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#bookhouse");
	entity.setAttribute("position", "10 1 -3.5");
	entity.setAttribute("scale", "8 8 8");
	entity.setAttribute("rotation", "0 90 0");
	entity.setAttribute("material", "shader: flat");

	document.querySelector("#room").appendChild(entity);
}

function addHouse(){
		// 	<a-collada-model src="#bookhouse" position="7 2 -1" scale="10 10 10" color="#CCCCCC" rotation="0 0 0" material="shader: flat" collada-model="" visible="">
		// </a-collada-model>
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("id", "fullHouse");
	entity.setAttribute("src", "#house");
	entity.setAttribute("position", "5 2 -3.5");
	entity.setAttribute("scale", "15 15 15");
	entity.setAttribute("rotation", "0 0 0");
	entity.setAttribute("material", "shader: flat");

	document.querySelector("a-scene").appendChild(entity);
}
function removeHouse(){
	var elem = document.getElementById("fullHouse");
	elem.parentNode.removeChild(elem);
}