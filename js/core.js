$( document ).ready( function(){
    // get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');

    // load the 3D engine
    var engine = new BABYLON.Engine(canvas, true);

    var wall1;
    var wall2;

    // createScene function that creates and return the scenes
    var createScene = function () {

        // Create the scenes space
        var scene = new BABYLON.Scene(engine);

        var assetsManager = new BABYLON.AssetsManager(scene);

        // Add a camera to the scenes and attach it to the canvas
        var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 30, BABYLON.Vector3.Zero(), scene);

        camera.attachControl(canvas, true);

        // Add lights to the scenes
        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

        addTerrain(scene);
        firstFloor(scene);
        secondFloor(scene);
        semiBasement(scene);
        roof(scene);

        // chair1 = new BABYLON.SceneLoader.ImportMesh("", "obj/chair/v1", "Chair.obj", scene, function (newMeshes) {
            // Set the target of the camera to the first imported mesh
            // newMeshes[0].scaling = new BABYLON.Vector3(0.03, 0.03, 0.03);
            // newMeshes[1].scaling = new BABYLON.Vector3(0.03, 0.03, 0.03);
            // newMeshes[0].setPositionWithLocalVector(new BABYLON.Vector3(-107.87, 0, 103.35));
            // newMeshes[1].setPositionWithLocalVector(new BABYLON.Vector3(-107.87, 0, 103.35));
        // });

        return scene;

    };

    // call the createScene function
    var scene = createScene();

    // run the render loop
    engine.runRenderLoop(function(){
        scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', function(){
        engine.resize();
    });

    // $('.rotateElement').click(function(){
    //     wall1.rotation.y = (box.rotation.y + 90) % 360;
    // });

});

function firstFloor(scene) {
    // Material
    var brickMaterial = new BABYLON.StandardMaterial(name, scene);
    var brickTexture = new BABYLON.BrickProceduralTexture(name + "text", 512, scene);
    brickTexture.numberOfBricksHeight = 6;
    brickTexture.numberOfBricksWidth = 10;
    brickMaterial.diffuseTexture = brickTexture;

    // Floor
    floor1 = BABYLON.MeshBuilder.CreateBox("box", {height: 0.25, width: 13.60, depth: 7.06}, scene);

    // // External walls
    externalWall1 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 10.75, depth: 0.35}, scene);
    externalWall2 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 10.75, depth: 0.35}, scene);
    externalWall3 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 3.57}, scene);
    externalWall4 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7.06}, scene);
    externalWall5 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.95, depth: 0.35}, scene);
    //
    // // Internal wall
    internalWall1 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7}, scene);
    internalWall2 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7}, scene);
    //
    floor1.setPositionWithLocalVector(new BABYLON.Vector3(-0.25, -1.33, 3.35));
    //
    externalWall1.setPositionWithLocalVector(new BABYLON.Vector3(1, 0, 0));
    externalWall2.setPositionWithLocalVector(new BABYLON.Vector3(1, 0, 6.7));
    externalWall3.setPositionWithLocalVector(new BABYLON.Vector3(-4.17, 0, 5.10));
    externalWall4.setPositionWithLocalVector(new BABYLON.Vector3(6.37, 0, 3.35));
    externalWall5.setPositionWithLocalVector(new BABYLON.Vector3(-3.87, 0, 3.35));
    //
    internalWall1.setPositionWithLocalVector(new BABYLON.Vector3(2.87, 0, 3.35));
    internalWall2.setPositionWithLocalVector(new BABYLON.Vector3(0.87, 0, 3.35));

    externalWall1.material = brickMaterial;
    externalWall2.material = brickMaterial;
    externalWall3.material = brickMaterial;
    externalWall4.material = brickMaterial;
    externalWall5.material = brickMaterial;

    internalWall1.material = brickMaterial;
    internalWall2.material = brickMaterial;
}

function secondFloor(scene) {
    // Material
    var brickMaterial = new BABYLON.StandardMaterial(name, scene);
    var brickTexture = new BABYLON.BrickProceduralTexture(name + "text", 512, scene);
    brickTexture.numberOfBricksHeight = 6;
    brickTexture.numberOfBricksWidth = 10;
    brickMaterial.diffuseTexture = brickTexture;

    // Floor
    floor1 = BABYLON.MeshBuilder.CreateBox("box", {height: 0.25, width: 12.60, depth: 7.06}, scene);

    // // External walls
    externalWall1 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 10.75, depth: 0.35}, scene);
    externalWall2 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 10.75, depth: 0.35}, scene);
    externalWall3 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7.06}, scene);
    externalWall4 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7.06}, scene);
    //
    // // Internal wall
    internalWall1 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7}, scene);
    internalWall2 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7}, scene);
    //
    floor1.setPositionWithLocalVector(new BABYLON.Vector3(0.25, 1.32, 3.35));
    //
    externalWall1.setPositionWithLocalVector(new BABYLON.Vector3(1, 2.85, 0));
    externalWall2.setPositionWithLocalVector(new BABYLON.Vector3(1, 2.85, 6.7));
    externalWall3.setPositionWithLocalVector(new BABYLON.Vector3(6.37, 2.85, 3.35));
    externalWall4.setPositionWithLocalVector(new BABYLON.Vector3(-4.17, 2.85, 3.35));
    //
    internalWall1.setPositionWithLocalVector(new BABYLON.Vector3(2.87, 2.85, 3.35));
    internalWall2.setPositionWithLocalVector(new BABYLON.Vector3(0.87, 2.85, 3.35));

    externalWall1.material = brickMaterial;
    externalWall2.material = brickMaterial;
    externalWall3.material = brickMaterial;
    externalWall4.material = brickMaterial;

    internalWall1.material = brickMaterial;
    internalWall2.material = brickMaterial;
}

function semiBasement(scene) {
    // Material
    var brickMaterial = new BABYLON.StandardMaterial(name, scene);
    var brickTexture = new BABYLON.BrickProceduralTexture(name + "text", 512, scene);
    brickTexture.numberOfBricksHeight = 6;
    brickTexture.numberOfBricksWidth = 10;
    brickMaterial.diffuseTexture = brickTexture;

    // Floor
    floor1 = BABYLON.MeshBuilder.CreateBox("box", {height: 0.25, width: 8.60, depth: 7.06}, scene);

    // // External walls
    externalWall1 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 8.75, depth: 0.35}, scene);
    externalWall2 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 8.75, depth: 0.35}, scene);
    externalWall3 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7.06}, scene);
    externalWall4 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7.06}, scene);
    //
    // // Internal wall
    // internalWall1 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7}, scene);
    // internalWall2 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.65, width: 0.35, depth: 7}, scene);
    //
    floor1.setPositionWithLocalVector(new BABYLON.Vector3(-2.75, -4.30, 3.35));
    //
    externalWall1.setPositionWithLocalVector(new BABYLON.Vector3(-2.75, -2.85, 0));
    externalWall2.setPositionWithLocalVector(new BABYLON.Vector3(-2.75, -2.85, 6.7));
    externalWall3.setPositionWithLocalVector(new BABYLON.Vector3(1.45, -2.85, 3.35));
    externalWall4.setPositionWithLocalVector(new BABYLON.Vector3(-6.97, -2.85, 3.35));
    //
    // internalWall1.setPositionWithLocalVector(new BABYLON.Vector3(0.87, -2.85, 3.35));
    // internalWall2.setPositionWithLocalVector(new BABYLON.Vector3(-2.87, -2.85, 3.35));

    externalWall1.material = brickMaterial;
    externalWall2.material = brickMaterial;
    externalWall3.material = brickMaterial;
    externalWall4.material = brickMaterial;

    // internalWall1.material = brickMaterial;
    // internalWall2.material = brickMaterial;
}


function roof(scene) {
    var brickMaterial = new BABYLON.StandardMaterial(name, scene);
    var brickTexture = new BABYLON.BrickProceduralTexture(name + "text", 512, scene);
    brickTexture.numberOfBricksHeight = 6;
    brickTexture.numberOfBricksWidth = 10;
    brickMaterial.diffuseTexture = brickTexture;

    roof1 = BABYLON.MeshBuilder.CreateBox("box", {height: 0.25, width: 13.10, depth: 4.80}, scene);
    roof1.setPositionWithLocalVector(new BABYLON.Vector3(0.5, 4.72, 5.50));
    roof1.rotation.x = 60; // (roof1.rotation.x + 60) % 360;
    roof2 = BABYLON.MeshBuilder.CreateBox("box", {height: 0.25, width: 13.10, depth: 4.80}, scene);
    roof2.setPositionWithLocalVector(new BABYLON.Vector3(0.5, 4.72, 1.00));
    roof2.rotation.x = -60; // (roof2.rotation.x - 330);

    roof1.material = brickMaterial;
    roof2.material = brickMaterial;
}

function addTerrain(scene){
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    var terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
    terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    terrainMaterial.specularPower = 64;

    // Set the mix texture (represents the RGB values)
    terrainMaterial.mixTexture = new BABYLON.Texture("textures/mixMap.png", scene);

    // Diffuse textures following the RGB values of the mix map
    // diffuseTexture1: Red
    // diffuseTexture2: Green
    // diffuseTexture3: Blue
    terrainMaterial.diffuseTexture1 = new BABYLON.Texture("textures/rock.png", scene);
    terrainMaterial.diffuseTexture2 = new BABYLON.Texture("textures/rock.png", scene);
    terrainMaterial.diffuseTexture3 = new BABYLON.Texture("textures/grass.png", scene);

    // Bump textures according to the previously set diffuse textures
    terrainMaterial.bumpTexture1 = new BABYLON.Texture("textures/floor_bump.png", scene);
    terrainMaterial.bumpTexture2 = new BABYLON.Texture("textures/rockn.png", scene);
    terrainMaterial.bumpTexture3 = new BABYLON.Texture("textures/grassn.png", scene);

    // Rescale textures according to the terrain
    terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
    terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
    terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 10;

    // Ground
    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/heightMap.png", 100, 100, 100, 0, 10, scene, false);
    ground.position.x = 17.0;
    ground.position.y = -5;
    ground.position.z = -8;
    ground.material = terrainMaterial;

    ground.rotation.y = 240;

}