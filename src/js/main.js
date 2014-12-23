(function () { 'use strict';

  // set up three.js, define camera, & set renderer to WebGL
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer( { antialias:true } );

  // set renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // add canvas elm to page
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.Geometry(); // create empty geometry

  geometry.vertices.push(
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

  geometry.faces.push(
    new THREE.Face3( 0, 3, 4 ),
    new THREE.Face3( 0, 1, 4 ),
    new THREE.Face3( 1, 4, 5 ),
    new THREE.Face3( 1, 2, 5 ),

    new THREE.Face3( 3, 6, 7 ),
    new THREE.Face3( 3, 4, 7 ),
    new THREE.Face3( 4, 7, 8 ),
    new THREE.Face3( 4, 5, 8 )
  );

  geometry.computeBoundingSphere();

  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    wireframeLinewidth: 2,
    transparent: true,
    vertexColors: THREE.VertexColors
  }); // set the material (green)

  var cube = new THREE.Mesh( geometry, material ); // combine into a mesh

  // add the cube
  scene.add( cube );

  // move the camera up
  camera.position.z = 5;

  // render the scene
  function render() {
    requestAnimationFrame( render );
    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.02;
    renderer.render( scene, camera );
  }
  render();

}()); // end 'use strict'