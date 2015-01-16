var gridData = [
  [], [], [], [], [], [], [], [], [], []
];

for ( var i = 0; i < 100; i++ ) {
  gridData[ i % 10 ].push( i / 25 * Math.random() );
}