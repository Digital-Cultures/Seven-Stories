function addOpenBook(){
		// 	<a-collada-model src="#bookhouse" position="7 2 -1" scale="10 10 10" color="#CCCCCC" rotation="0 0 0" material="shader: flat" collada-model="" visible="">
		// </a-collada-model>
	var entity = document.createElement("a-collada-model");

	entity.setAttribute("src", "#bookhouse");
	entity.setAttribute("position", "7 2 -1");
	entity.setAttribute("scale", "10 10 10");
	entity.setAttribute("rotation", "0 0 0");
	entity.setAttribute("material", "shader: flat");

	document.querySelector("a-scene").appendChild(entity);
}