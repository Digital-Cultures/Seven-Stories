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

function addBed(){
		// 	<a-collada-model src="#bookhouse" position="7 2 -1" scale="10 10 10" color="#CCCCCC" rotation="0 0 0" material="shader: flat" collada-model="" visible="">
		// </a-collada-model>
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#bed");
	entity.setAttribute("position", "12 -2 -2");
	entity.setAttribute("scale", "4 4 4");
	entity.setAttribute("rotation", "0 90 0");

	document.querySelector("#room").appendChild(entity);
}

function addKeys(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#Bunch_of_keys");
	entity.setAttribute("position", "-3 -1.8 -6");
	entity.setAttribute("scale", "10 10 10");
	entity.setAttribute("rotation", "0 90 0");

	document.querySelector("#room").appendChild(entity);
}

function addMirror(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#mirror");
	entity.setAttribute("position", "11.9 2 -10");
	entity.setAttribute("scale", "3 3 3");
	entity.setAttribute("rotation", "0 -90 0");

	document.querySelector("#room").appendChild(entity);
}

function addDoor(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("id", "door");
	entity.setAttribute("src", "#door");
	entity.setAttribute("position", "-2.09 -2.03 -11.98");
	entity.setAttribute("scale", "4.6 4.5 4.2");
	entity.setAttribute("rotation", "0 180 0");

	var animation = document.createElement("a-animation");
	animation.setAttribute("attribute", "rotation");
	animation.setAttribute("dur", "2000");
	animation.setAttribute("to", "0 200 0");
	animation.setAttribute("begin","3000");

	entity.appendChild(animation);
	document.querySelector("#room").appendChild(entity);
}

var roomHTML;
function removeRoom(){
	var elem = document.getElementById("room");
	roomHTML = elem.cloneNode(true);
	elem.parentNode.removeChild(elem);
}

function addHouse(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("id", "fullHouse");
	entity.setAttribute("src", "#house");
	entity.setAttribute("position", "5 2 -3.5");
	entity.setAttribute("scale", "15 15 15");
	entity.setAttribute("rotation", "0 0 0");
	entity.setAttribute("material", "shader: flat");

// <<a-image src="#fence" material="src:#fence;color:#FFF;shader:flat;side:double;transparent:true" position="7.08 3.04 4.36" scale="3.08 3.2800000000000002 4" rotation="0 0 0" width="5.76" geometry="width:5.76;height:0.52;primitive:plane" height="0.52"></a-image>
	var fence = document.createElement("a-image");
	fence.setAttribute("src", "#fence");
	fence.setAttribute("position", "7 3 4.36");
	fence.setAttribute("scale", "3 3 3");
	fence.setAttribute("rotation", "0 0 0");
	fence.setAttribute("width", "5.76");
	fence.setAttribute("height", "0.52");

	document.querySelector("a-scene").appendChild(entity);
	document.querySelector("a-scene").appendChild(fence);
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

	var celing = document.createElement("a-plane");
	celing.setAttribute("height", "20");
	celing.setAttribute("width", "20");
	celing.setAttribute("position", "2.3 8 -4.5");
	celing.setAttribute("rotation", "270 180 0");
	document.getElementById("houseRoom").appendChild(celing);
}

function removeHouseRoom(){
	var elem = document.getElementById("houseRoom");
	elem.parentNode.removeChild(elem);
}

function addJamHoney(){
	/*<a-image id="Catherine1" src="#portrait" position="7.6 1.8 -6.5" scale="5.5 7 4" rotation="0 -25 0" material="opacity:0">
				<a-animation attribute="material.opacity" begin="fadein" to="1" dur="5000"></a-animation>
			</a-image>*/
	var JamHoney = document.createElement("a-image");
	JamHoney.setAttribute("src", "#JamHoney");
	JamHoney.setAttribute("position", "7.6 -2 -6.5");
	JamHoney.setAttribute("scale", "4 4 4");
	JamHoney.setAttribute("rotation", "0 -25 0");

	var animation = document.createElement("a-animation");
	animation.setAttribute("attribute", "position");
	animation.setAttribute("dur", "2000");
	animation.setAttribute("to", "7.6 1.8 -6.5");
	animation.setAttribute("begin","3000");
	
	JamHoney.appendChild(animation)
	document.querySelector("a-scene").appendChild(JamHoney);
}