(function () { 'use strict';

  // set up three.js, define camera, & set renderer to WebGL
  var scene = new THREE.Scene();

  // set up the camera
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.z = 6;

  // set up renderer
  var renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      // render the scene
      ( function render() {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
      } )();

  // enable mouse/touch view controls
  new THREE.OrbitControls( camera, renderer.domElement );

  var flat = new THREE.MeshBasicMaterial({
    color: 0x222222,
    side: THREE.DoubleSide
  });

  var wireframe = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    wireframeLinewidth: 2,
    transparent: true,
    vertexColors: THREE.VertexColors
  });

  var gridGeo = new THREE.Geometry(); // create empty geometry

  gridGeo.vertices.push( // add vertices to gridGeo
    new THREE.Vector3( -1, -1, Math.random() ),
    new THREE.Vector3( 0, -1, Math.random() ),
    new THREE.Vector3( 1, -1, Math.random() ),
    new THREE.Vector3( -1, 0, Math.random() ),
    new THREE.Vector3( 0, 0, Math.random() ),
    new THREE.Vector3( 1, 0, Math.random() ),
    new THREE.Vector3( -1, 1, Math.random() ),
    new THREE.Vector3( 0, 1, Math.random() ),
    new THREE.Vector3( 1, 1, Math.random() )
  );

  gridGeo.faces.push( // create faces from vertices for grid
    new THREE.Face3( 0, 3, 4 ),
    new THREE.Face3( 0, 1, 4 ),
    new THREE.Face3( 1, 4, 5 ),
    new THREE.Face3( 1, 2, 5 ),

    new THREE.Face3( 3, 6, 7 ),
    new THREE.Face3( 3, 4, 7 ),
    new THREE.Face3( 4, 7, 8 ),
    new THREE.Face3( 4, 5, 8 )
  );

  var floorGeo = new THREE.Geometry(); // create empty geometry

  floorGeo.vertices.push( // add vertices to floorGeo
    new THREE.Vector3( -6, -6, 0 ),
    new THREE.Vector3( 6, -6, 0 ),
    new THREE.Vector3( -6, 6, 0 ),
    new THREE.Vector3( 6, 6, 0 )
  );

  floorGeo.faces.push( // create faces form verticies for floor
    new THREE.Face3( 0, 2, 3 ),
    new THREE.Face3( 0, 1, 3 )
  );

  // combine geometries / materials into meshes
  var grid = new THREE.Mesh( gridGeo, wireframe );
  var floor =  new THREE.Mesh( floorGeo, flat );

  // add objects to scene
  scene.add( grid, floor );

}()); // end 'use strict'