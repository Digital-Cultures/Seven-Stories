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

function addSheet(){
		// 				<a-collada-model id="marrianneSheet" src="#sheet" collada-model="#sheet" position="3.96 0.18 -2" scale="0.29 0.3 0.32" rotation="0 0 0" material="opacity:0;depthTest:true;flatShading:false">
		//	</a-collada-model>
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#sheet");
	entity.setAttribute("position", "3.96 0.18 -2");
	entity.setAttribute("scale", "0.29 0.3 0.32");

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
function copyRoom(){
	var elem = document.getElementById("room");
	roomHTML = elem.cloneNode(true);
}

function removeRoom(){
	var elem = document.getElementById("room");
	elem.parentNode.removeChild(elem);
}

function addHouse(){
	
	var entity = document.createElement("a-entity");
	entity.setAttribute("id", "fullHouse");

	var house = document.createElement("a-collada-model");
	house.setAttribute("src", "#house");
	house.setAttribute("position", "5 2 -3.5");
	house.setAttribute("scale", "15 15 15");
	house.setAttribute("rotation", "0 0 0");
	entity.appendChild(house);

// <a-image src="#fence" material="src:#fence;color:#FFF;shader:standard;side:double;transparent:true;visible:true;depthTest:false;flatShading:false;metalness:1" position="7 3 4.36" scale="3 3 3" rotation="0 0 0" width="5.76" geometry="width:5.76;height:0.52;primitive:plane" height="0.52"></a-image>
	var fence = document.createElement("a-image");
	fence.setAttribute("src", "#fence");
	fence.setAttribute("position", "7 3 4.36");
	fence.setAttribute("scale", "3 3 3");
	fence.setAttribute("rotation", "0 0 0");
	fence.setAttribute("width", "5.76");
	fence.setAttribute("height", "0.52");
	// fence.setAttribute("shader", "standard");

	var fence2 = document.createElement("a-image");
	fence2.setAttribute("src", "#fence");
	fence2.setAttribute("position", "-1.45 2.96 -4.33");
	fence2.setAttribute("scale", "3 3 3");
	fence2.setAttribute("rotation", "0 90 0");
	fence2.setAttribute("width", "5.76");
	fence2.setAttribute("height", "0.52");
	//fence2.setAttribute("shader", "standard");

	var fence3 = document.createElement("a-image");
	fence3.setAttribute("src", "#fence");
	fence3.setAttribute("position", "15.5 3 -4.33");
	fence3.setAttribute("scale", "3 3 3");
	fence3.setAttribute("rotation", "0 90 0");
	fence3.setAttribute("width", "5.76");
	fence3.setAttribute("height", "0.52");
	// fence3.setAttribute("shader", "standard");

	//<a-image src="#fence" material="color:#FFF;shader:standard;side:double;transparent:true;src:#fence" position="-1.45 2.96 -4.33" scale="3 3 3" rotation="0 90 0" width="5.76" geometry="primitive:plane;width:5.76;height:0.52" height="0.52" shader="standard" visible="true"></a-image>

	var ground = document.createElement("a-image");
	ground.setAttribute("src", "#paper");
	ground.setAttribute("position", "8.47 2.35 -1.22");
	ground.setAttribute("rotation", "270 0 0");
	ground.setAttribute("width", "30");
	ground.setAttribute("height", "30");
	//ground.setAttribute("roughness", "1");
	// ground.setAttribute("shader", "standard");

//<a-image src="#stone" material="src:#stone;shader:standard;color:#FFF;side:double;transparent:true" position="18.1 3.75 -4.33" scale="3 3 3" rotation="0 120 0" width="5.76" geometry="width:1;height:1;primitive:plane" height="0.52" shader="standard"></a-image>
	var stone = document.createElement("a-image");
	stone.setAttribute("src", "#stone");
	stone.setAttribute("position", "18.1 3.75 -4.33");
	stone.setAttribute("scale", "3 3 3");
	stone.setAttribute("rotation", "0 120 0");
	//stone.setAttribute("shader", "standard");

	entity.appendChild(ground);
	entity.appendChild(stone);
	entity.appendChild(fence2);
	entity.appendChild(fence3);
	entity.appendChild(fence);
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

	var wall4 = document.createElement("a-plane");
	wall4.setAttribute("height", "10");
	wall4.setAttribute("width", "20");
	wall4.setAttribute("position", "2.3 3 8");
	wall4.setAttribute("rotation", "180 0 0");
	document.getElementById("houseRoom").appendChild(wall4);


	var floor = document.createElement("a-plane");
	floor.setAttribute("height", "20");
	floor.setAttribute("width", "20");
	floor.setAttribute("position", "2.3 -2 -2");
	floor.setAttribute("rotation", "270 180 0");
	document.getElementById("houseRoom").appendChild(floor);

	var celing = document.createElement("a-plane");
	celing.setAttribute("height", "20");
	celing.setAttribute("width", "20");
	celing.setAttribute("position", "2.3 8 -2");
	celing.setAttribute("rotation", "90 180 0");
	document.getElementById("houseRoom").appendChild(celing);

	var marrianne = document.createElement("a-image");
	marrianne.setAttribute("src", "#marrianne");
	marrianne.setAttribute("position", "7.6 1 -4");
	marrianne.setAttribute("scale", "2.5 5 0");
	marrianne.setAttribute("rotation", "0 -25 0");
	marrianne.setAttribute("shader", "standard");
	document.getElementById("houseRoom").appendChild(marrianne);
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
	document.querySelector("#houseRoom").appendChild(JamHoney);
}
function addShpere(){
	//transparent:true; color:#b2e8ff; flatShading:false; shader:standard; metalness:0;roughness:0.25;opacity:0.84;scale="2 2 2" 
	var sphere = document.createElement("a-sphere");
	sphere.setAttribute("color", "#b2e8ff");
	sphere.setAttribute("transparent", "true");
	sphere.setAttribute("opacity", "0.4");
	sphere.setAttribute("metalness", "0");
	sphere.setAttribute("roughness", "0.25");
	sphere.setAttribute("scale", "2 2 2");
	document.querySelector("#houseRoom").appendChild(sphere);
}

function addHeadShot(){
	var headShot = document.createElement("a-image");
	headShot.setAttribute("src", "#CatherineStorrHeadShot");
	headShot.setAttribute("id", "HeadShot");
	headShot.setAttribute("position", "7.6 2 30");
	headShot.setAttribute("scale", "320 160 10");
	headShot.setAttribute("rotation", "0 0 0");
	document.querySelector("a-scene").appendChild(headShot);
}