(function () { 'use strict';

  // set up three.js, define camera, & set renderer to WebGL
  var scene = new THREE.Scene();

  // set up the camera
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.z = 12;

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

  // set up background
  var background = {};
      background.geometry = new THREE.SphereGeometry( 50, 16, 16 );
      background.material = new THREE.MeshBasicMaterial({
        color: 0xff3333,
        side: THREE.DoubleSide
      });
      background.mesh = new THREE.Mesh( background.geometry, background.material );
      scene.add( background.mesh );

  var wireframe = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    wireframeLinewidth: 2,
    transparent: true,
    vertexColors: THREE.VertexColors
  });

  var gridGeo = new THREE.Geometry(); // create empty geometry

  gridGeo.vertices.push( // add vertices to gridGeo
    new THREE.Vector3( -1, -1, 0 ),
    new THREE.Vector3( 0, -1, 0 ),
    new THREE.Vector3( 1, -1, 0 ),
    new THREE.Vector3( -1, 0, 0 ),
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 1, 0, 0 ),
    new THREE.Vector3( -1, 1, 0 ),
    new THREE.Vector3( 0, 1, 0 ),
    new THREE.Vector3( 1, 1, 0 )
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

  // combine geometries / materials into meshes
  var grid = new THREE.Mesh( gridGeo, wireframe );

  // add objects to scene
  scene.add( grid );

}()); // end 'use strict'