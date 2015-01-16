var gridData = [
  [], [], [], [], [], [], [], [], [], []
];

for ( var i = 0; i < 100; i++ ) {
  gridData[ i % 10 ].push( i / 35 * Math.random() );
}