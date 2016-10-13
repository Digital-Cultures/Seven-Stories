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


// <a-collada-model id="movingBookDreams" src="#Book_MarianneDreams" position="1.7 1.5 0.9" rotation="155 90 90" scale="0.75 0.7 0.8">


// </a-collada-model>

function addBookMarianne(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#Book_MarianneDreams");
	entity.setAttribute("position", "1.7 1.5 0.9");
	entity.setAttribute("scale", "0.75 0.7 0.8");
	entity.setAttribute("rotation", "155 90 90");

	var animation_P = document.createElement("a-animation");
	animation_P.setAttribute("attribute", "position");
	animation_P.setAttribute("easing", "ease-in-cubic");
	animation_P.setAttribute("dur", "4000");
	animation_P.setAttribute("from", "1.7 1.5 0.9");
	animation_P.setAttribute("to", "2.18 1.83 -0.05");
	animation_P.setAttribute("begin","5000");

	entity.appendChild(animation_P);

		var animation = document.createElement("a-animation");
	animation.setAttribute("attribute", "rotation");
	animation.setAttribute("dur", "4000");
	animation.setAttribute("from", "155 90 90");
	animation.setAttribute("to", "165 175 90");
	animation.setAttribute("begin","5000");

	entity.appendChild(animation);
	document.querySelector("#bookcaseModel").appendChild(entity);
}


function addBookRufus(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#Book_Rufus");
	entity.setAttribute("position", "2.2 1.5 1.3");
	entity.setAttribute("scale", "0.75 0.7 0.8");
	entity.setAttribute("rotation", "175 100 90");

	var animation_P = document.createElement("a-animation");
	animation_P.setAttribute("attribute", "position");
	animation_P.setAttribute("easing", "ease-in-cubic");
	animation_P.setAttribute("dur", "4000");
	animation_P.setAttribute("from", "2.2 1.5 1.3");
	animation_P.setAttribute("to", "1.64 1.84 -0.02");
	animation_P.setAttribute("begin","5000");

	entity.appendChild(animation_P);

		var animation = document.createElement("a-animation");
	animation.setAttribute("attribute", "rotation");
	animation.setAttribute("dur", "4000");
	animation.setAttribute("from", "175 100 90");
	animation.setAttribute("to", "165 175 90");
	animation.setAttribute("begin","5000");

	entity.appendChild(animation);
	document.querySelector("#bookcaseModel").appendChild(entity);
}

function addBookMirror(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#Book_MirrorGhost");
	entity.setAttribute("position", "1.8 1.5 1.9");
	entity.setAttribute("scale", "0.75 0.7 0.8");
	entity.setAttribute("rotation", "155 90 90");

	var animation_P = document.createElement("a-animation");
	animation_P.setAttribute("attribute", "position");
	animation_P.setAttribute("easing", "ease-in-cubic");
	animation_P.setAttribute("dur", "4000");
	animation_P.setAttribute("from", "1.8 1.5 1.9");
	animation_P.setAttribute("to", "1.93 1.06 -0.03");
	animation_P.setAttribute("begin","5000");

	entity.appendChild(animation_P);

		var animation = document.createElement("a-animation");
	animation.setAttribute("attribute", "rotation");
	animation.setAttribute("dur", "4000");
	animation.setAttribute("from", "155 90 90");
	animation.setAttribute("to", "165 175 90");
	animation.setAttribute("begin","5000");

	entity.appendChild(animation);
	document.querySelector("#bookcaseModel").appendChild(entity);
}

function addBookKey(){
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#Book_IfGame");
	entity.setAttribute("position", "2.2 1.5 2.2");
	entity.setAttribute("scale", "0.75 0.7 0.8");
	entity.setAttribute("rotation", "175 100 90");

	var animation_P = document.createElement("a-animation");
	animation_P.setAttribute("attribute", "position");
	animation_P.setAttribute("easing", "ease-in-cubic");
	animation_P.setAttribute("dur", "4000");
	animation_P.setAttribute("from", "2.2 1.5 2.2");
	animation_P.setAttribute("to", "1.8 2.14 -0.02");
	animation_P.setAttribute("begin","5000");

	entity.appendChild(animation_P);

	var animation = document.createElement("a-animation");
	animation.setAttribute("attribute", "rotation");
	animation.setAttribute("dur", "4000");
	animation.setAttribute("from", "175 100 90");
	animation.setAttribute("to", "165 175 90");
	animation.setAttribute("begin","5000");

	entity.appendChild(animation);

	document.querySelector("#bookcaseModel").appendChild(entity);
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

// <a-image src="#fence" material="src:#fence;color:#FFF;shader:standard;side:double;transparent:true;visible:true;depthTest:false;flatShading:false;metalness:1" position="7 3 4.36" scale="3 3 3" rotation="0 0 0" width="5.76" geometry="width:5.76;height:0.52;primitive:plane" height="0.52"></a-image>
	var fence = document.createElement("a-image");
	fence.setAttribute("src", "#fence");
	fence.setAttribute("position", "7 3 4.36");
	fence.setAttribute("scale", "3 3 3");
	fence.setAttribute("rotation", "0 0 0");
	fence.setAttribute("material", "flatShading: false");
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