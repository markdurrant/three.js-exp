// (function () { 'use strict';

  // set up three.js, define camera, & set renderer to WebGL
  var scene = new THREE.Scene();

  // set up the camera
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.z = 8;
      camera.position.y = -8;

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
  var orbit = new THREE.OrbitControls( camera, renderer.domElement );
      orbit.maxDistance = 30;
      orbit.minDistance = 5;

  // set up the grid
  var grid = {};
      grid.material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        wireframeLinewidth: 2,
      });
      grid.geometry = new THREE.Geometry();
      grid.mesh = new THREE.Mesh( grid.geometry, grid.material );

      // get points from data
      for( var GVR = 0; GVR < gridData.length; GVR++ ) {
        for( var GVC = 0; GVC < gridData[ 0 ].length; GVC++ ){
          grid.geometry.vertices.push( new THREE.Vector3( GVC, GVR, gridData[ GVR ][ GVC ] ) );
        }
      }

      // create faces from points
      for( var GFR = 0; GFR < gridData.length - 1 ; GFR++ ) {
        for( var GFC = 0; GFC < gridData.length - 1 ; GFC++ ) {
          grid.geometry.faces.push(
            new THREE.Face3(
              GFC + GFR * gridData[ 0 ].length,
              GFC + GFR * gridData[ 0 ].length + 1,
              GFC + GFR * gridData[ 0 ].length + gridData[ 0 ].length + 1
            ),
            new THREE.Face3(
              GFC + GFR * gridData[ 0 ].length,
              GFC + GFR * gridData[ 0 ].length + gridData[ 0 ].length,
              GFC + GFR * gridData[ 0 ].length + gridData[ 0 ].length + 1
            )
          );
        }
      }

      // center grid
      grid.mesh.position.x -= gridData[ 0 ].length / 2;
      grid.mesh.position.y -= gridData.length / 2;

      // add grid to scene
      scene.add( grid.mesh );

// }()); // end 'use strict'