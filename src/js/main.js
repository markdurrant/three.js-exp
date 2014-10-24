(function () { 'use strict';

  // set up three.js, define camera, & set renderer to WebGL
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer( { antialias:true } );

  // set renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // add canvas elm to page
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry( 1, 1, 1 ); // create cube geometry
  var material = new THREE.MeshBasicMaterial( { color: 0xee4f7e } ); // set the material (green)
  var cube = new THREE.Mesh( geometry, material ); // combine into a mesh

  // add the cube
  scene.add( cube );

  // move the camera up
  camera.position.z = 2;

  // render the scene
  function render() {
    requestAnimationFrame( render );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  render();

}()); // end 'use strict'