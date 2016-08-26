import ReactFauxDOM from 'react-faux-dom'
var d3 = require('d3')

export default function drawChart(dataArray){

	var node = ReactFauxDOM.createElement('svg')

	var svg = d3.select(node)
    .attr( "width", 500 )
    .attr( "height", 100 );


	var selection = svg.selectAll( "rect" )
	  .data( dataArray )

	selection.enter()
	  .append( "rect" )
	    .attr( "x", function(d,i){
	      return i*25;
	    })
	    .attr( "width", 15 )
	    .attr( "fill", "#d1c9b8" )
	    .attr( "height", function(d){
	      return d/10 * 1.5;
	    })
	    .attr( "y", function(d){
	      return 150 - d/10 * 1.5;
	    });

	  selection.exit()
	  	.remove();

	return node.toReact()
}

