function addOpenBook(){
		// 	<a-collada-model src="#bookhouse" position="7 2 -1" scale="10 10 10" color="#CCCCCC" rotation="0 0 0" material="shader: flat" collada-model="" visible="">
		// </a-collada-model>
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#bookhouse");
	entity.setAttribute("position", "10 0.4 -3.5");
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

function addHouseRoom(){
	var houseRoom = document.createElement("a-entity");
	houseRoom.setAttribute("id", "houseRoom");
	document.querySelector("a-scene").appendChild(houseRoom);

	var wall1 = document.createElement("a-plane");
	wall1.setAttribute("height", "10");
	wall1.setAttribute("width", "20");
	wall1.setAttribute("position", "-7.7 3 -2");
	wall1.setAttribute("rotation", "0 90 0");
	document.getElementById("houseRoom").appendChild(wall1);

	var wall2 = document.createElement("a-plane");
	wall2.setAttribute("height", "10");
	wall2.setAttribute("width", "20");
	wall2.setAttribute("position", "12.3 3 -2");
	wall2.setAttribute("rotation", "180 90 0");
	document.getElementById("houseRoom").appendChild(wall2);

	var wall3 = document.createElement("a-plane");
	wall3.setAttribute("height", "10");
	wall3.setAttribute("width", "20");
	wall3.setAttribute("position", "2.3 3 -12");
	wall3.setAttribute("rotation", "180 180 0");
	document.getElementById("houseRoom").appendChild(wall3);

	var floor = document.createElement("a-plane");
	floor.setAttribute("height", "20");
	floor.setAttribute("width", "20");
	floor.setAttribute("position", "2.3 -2 -2");
	floor.setAttribute("rotation", "270 180 0");
	document.getElementById("houseRoom").appendChild(floor);
}