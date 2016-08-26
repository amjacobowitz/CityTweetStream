var d3 = require('d3')
var ReactFauxDOM = require('react-faux-dom')
var React = require('react')
var topojson = require('topojson')

var Map = React.createClass({
	render: function(){
		var w = 1200,
				h = 500,
				that = this;

		var svg = d3.select(ReactFauxDOM.createElement('svg'))

		svg.attr("width", w)
			.attr("height", h)

		var projection = d3.geoAlbersUsa()
			.scale(1100)
			.translate([w/2, h/2])


		var path = d3.geoPath()
			.projection(projection)


		var us_states = topojson.feature(this.props.stateData, this.props.stateData.objects.states).features

			svg.selectAll('.state')
				.data(us_states)
				.enter()
				.append("path")
				.attr("class", function(d){
					return "state";
				})
				.attr("d", path)
				.attr("fill", "#d9e1f7")
				.attr("stroke", "white")

			svg.selectAll("circle")
				.data(this.props.cityData.cities)
				.enter()
				.append("circle")
				.attr("cx", function(d){
					return projection(d.coordinates)[0]
				})
				.attr("cy", function(d){
					return projection(d.coordinates)[1]
				})
				.attr("r", function(d){
					if(d.name === "San Fransisco"){
						return that.props.sanFransiscoTweets.length + "px"
					} else if (d.name === "New York City"){
							return that.props.newYorkCityTweets.length + "px"
					} else if (d.name === "Washington DC"){
							return that.props.washingtonDCTweets.length + "px"
					} else if (d.name === "Detroit"){
							return that.props.detroitTweets.length + "px"
					} else if (d.name === "Chicago"){
							return that.props.chicagoTweets.length + "px"
					} else if (d.name === "Miami"){
							return that.props.miamiTweets.length + "px"
					} else if (d.name === "Los Angeles"){
							return that.props.losAngelesTweets.length + "px"
					} else if (d.name === "Seattle"){
							return that.props.seattleTweets.length + "px"
					} else if (d.name === "Portland"){
							return that.props.portlandTweets.length + "px"
					} else if (d.name === "Boston"){
							return that.props.bostonTweets.length + "px"
					} else if (d.name === "Houston"){
							return that.props.houstonTweets.length + "px"
					} else if (d.name === "Dallas"){
							return that.props.dallasTweets.length + "px"
					} else if (d.name === "Denver"){
							return that.props.denverTweets.length + "px"
					} else if (d.name === "Atlanta"){
							return that.props.atlantaTweets.length + "px"
					} else if (d.name === "Philadelphia"){
							return that.props.philadelphiaTweets.length + "px"
					} else if (d.name === "Baltimore"){
							return that.props.baltimoreTweets.length + "px"
					} else if (d.name === "New Orleans"){
							return that.props.newOrleansTweets.length + "px"
					}
				})
				.attr("fill", "rgba(249, 76, 76, 0.2)")
				.attr("stroke", "white")

		var texts = svg.selectAll('.place-label')
				.data(this.props.cityData.cities)
				.enter()
				.append("text")

		texts.attr("class", "place-label")
			.attr("transform", function(d){
				return "translate(" + projection(d.coordinates)[0] + "," + projection(d.coordinates)[1] + ")";
			})
			.text(function(d){
				return d.name
			})
			.attr('font-size', '10')
			.on("mouseover", function(d){
				that.props.mouseoverCity(d.name)
			})			
			
		

		return svg.node().toReact()		
	}
})

module.exports = Map
