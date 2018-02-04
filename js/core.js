$( document ).ready( function(){
    // get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');

    // load the 3D engine
    var engine = new BABYLON.Engine(canvas, true);

    var wall1;
    var wall2;

    // createScene function that creates and return the scene
    var createScene = function () {

        // Create the scene space
        var scene = new BABYLON.Scene(engine);

        // Add a camera to the scene and attach it to the canvas
        var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);

        camera.attachControl(canvas, true);

        // Add lights to the scene
        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

        // Add and manipulate meshes in the scene
        wall1 = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 2.75, depth: 0.25}, scene);
        wall2 = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 2.75, depth: -0.25}, scene);

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

    $('.rotateElement').click(function(){
        wall1.rotation.y = (box.rotation.y + 90) % 360;
    });
});
