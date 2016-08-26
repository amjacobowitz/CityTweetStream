var React = require('react');
var d3 = require('d3');
var ReactFauxDOM = require('react-faux-dom');

var Chart = React.createClass({
	render: function(){
		var w = 600,
				h = 200,
				that = this;

		var svg = d3.select(ReactFauxDOM.createElement('svg'))

		svg.attr("width", w)
			 .attr("height", h);

		svg.selectAll("rect")
			.data([this.props.sanFransiscoTweetCount])
			.enter()
			.append("rect")
			.attr("width", 15)
			.attr("height", function(d){
				return d 
			})
			.attr("x", function(d, i){
				return i * 25
			})
			.attr('y', function(d){
				return h - d;
			})
			.attr("fill", "blue")





		return svg.node().toReact()
	}
});

module.exports = Chart;