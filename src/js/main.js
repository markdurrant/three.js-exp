(function () { 'use strict';

  // set up three.js, define camera, & set renderer to WebGL
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer( { antialias:true } );

  // set renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // add canvas elm to page
  document.body.appendChild( renderer.domElement );

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

  var flat = new THREE.MeshBasicMaterial({
    color: 0x222222,
    side: THREE.DoubleSide
  });

  var floor =  new THREE.Mesh( floorGeo, flat );

  var wireframe = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    wireframeLinewidth: 2,
    transparent: true,
    vertexColors: THREE.VertexColors
  }); // set the wireframe material

  var grid = new THREE.Mesh( gridGeo, wireframe ); // combine into a mesh

  // add the grid
  scene.add( grid, floor );

  // move the camera up
  camera.position.z = 5;
  camera.rotation.x = 0.5;

  // render the scene
  function render() {
    requestAnimationFrame( render );
    // scene.rotation.x += 0.02;
    // scene.rotation.y += 0.02;
    renderer.render( scene, camera );
  }
  render();

  new THREE.OrbitControls( camera, renderer.domElement );

}()); // end 'use strict'