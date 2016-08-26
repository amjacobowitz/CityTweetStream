import React from 'react';
// import drawMap from '../scripts/drawMap.js'
var us_states = require("../scripts/us_states.json")
var us_cities = require("../scripts/us_cities.json")

// Components
var ResetButton = require('./ResetButton.js')
var PausePlayButton = require('./PausePlayButton.js')
var Map = require('./Map.js')
var TweetCountBox = require('./TweetCountBox.js')
var Chart = require('./Chart.js')
var TweetDisplay = require('./TweetDisplay.js')

import io from 'socket.io-client';
var socket = io('http://localhost:8080');

var App = React.createClass({
	getInitialState: function(){
		return ({
			selectedCity: '',
			sanFransiscoTweets: [],
			newYorkCityTweets: [],
			washingtonDCTweets: [],
			detroitTweets: [],
			chicagoTweets: [],
			miamiTweets: [],
			losAngelesTweets: [],
			seattleTweets: [],
			portlandTweets: [],
			bostonTweets: [],
			houstonTweets: [],
			dallasTweets: [],
			denverTweets: [],
			atlantaTweets: [],
			philadelphiaTweets: [],
			baltimoreTweets: [],
			newOrleansTweets: [],
			pauseState: -1
		});
	},
	componentDidMount: function(){
		var that = this;
		socket.on('newTweet', function(newTweet){
			if (that.state.pauseState === -1){
				that.updateTweet(newTweet);
			}
		});
	},
	resetMap: function(){
		this.setState({
			selectedCity: '',
			sanFransiscoTweets: [],
			newYorkCityTweets: [],
			washingtonDCTweets: [],
			detroitTweets: [],
			chicagoTweets: [],
			miamiTweets: [],
			losAngelesTweets: [],
			seattleTweets: [],
			portlandTweets: [],
			bostonTweets: [],
			houstonTweets: [],
			dallasTweets: [],
			denverTweets: [],
			atlantaTweets: [],
			philadelphiaTweets: [],
			baltimoreTweets: [],
			newOrleansTweets: [],
			pauseState: -1
		})
	},
	pauseMap: function(){
		this.setState({
			pauseState: this.state.pauseState *= -1
		})
		console.log(this.state.pauseState)
	},
	updateTweet: function(newTweet){
		if (newTweet["sanFransiscoTweet"]){
			var sanFransiscoTweets = this.state.sanFransiscoTweets
			sanFransiscoTweets.unshift(newTweet)
			this.setState({
				sanFransiscoTweets: sanFransiscoTweets
			})
		} else if (newTweet["newYorkCityTweet"]){
			var newYorkCityTweets = this.state.newYorkCityTweets
			newYorkCityTweets.unshift(newTweet)
			this.setState({
				newYorkCityTweets: newYorkCityTweets
			})
		} else if (newTweet["washingtonDCTweet"]){
			var washingtonDCTweets = this.state.washingtonDCTweets
			washingtonDCTweets.unshift(newTweet)
			this.setState({
				washingtonDCTweets: washingtonDCTweets
			})
		} else if (newTweet["detroitTweet"]){
			var detroitTweets = this.state.detroitTweets
			detroitTweets.unshift(newTweet)
			this.setState({
				detroitTweets: detroitTweets
			})
		} else if (newTweet["chicagoTweet"]){
			var chicagoTweets = this.state.chicagoTweets
			chicagoTweets.unshift(newTweet)
			this.setState({
				chicagoTweets: chicagoTweets
			})
		} else if (newTweet["miamiTweet"]){
			var miamiTweets = this.state.miamiTweets
			miamiTweets.unshift(newTweet)
			this.setState({
				miamiTweets: miamiTweets
			})
		} else if (newTweet["losAngelesTweet"]){
			var losAngelesTweets = this.state.losAngelesTweets
			losAngelesTweets.unshift(newTweet)
			this.setState({
				losAngelesTweets: losAngelesTweets
			})
		} else if (newTweet["seattleTweet"]){
			var seattleTweets = this.state.seattleTweets
			seattleTweets.unshift(newTweet)
			this.setState({
				seattleTweets: seattleTweets
			})
		} else if (newTweet["portlandTweet"]){
			var portlandTweets = this.state.portlandTweets
			portlandTweets.unshift(newTweet)
			this.setState({
				portlandTweets: portlandTweets
			})
		} else if (newTweet["bostonTweet"]){
			var bostonTweets = this.state.bostonTweets
			bostonTweets.unshift(newTweet)
			this.setState({
				bostonTweets: bostonTweets
			})
		} else if (newTweet["houstonTweet"]){
			var houstonTweets = this.state.houstonTweets
			houstonTweets.unshift(newTweet)
			this.setState({
				houstonTweets: houstonTweets
			})
		} else if (newTweet["dallasTweet"]){
			var dallasTweets = this.state.dallasTweets
			dallasTweets.unshift(newTweet)
			this.setState({
				dallasTweets: dallasTweets
			})
		} else if (newTweet["denverTweet"]){
			var denverTweets = this.state.denverTweets
			denverTweets.unshift(newTweet)
			this.setState({
				denverTweets: denverTweets
			})
		} else if (newTweet["atlantaTweet"]){
			var atlantaTweets = this.state.atlantaTweets
			atlantaTweets.unshift(newTweet)
			this.setState({
				atlantaTweets: atlantaTweets
			})
		} else if (newTweet["philadelphiaTweet"]){
			var philadelphiaTweets = this.state.philadelphiaTweets
			philadelphiaTweets.unshift(newTweet)
			this.setState({
				philadelphiaTweets: philadelphiaTweets
			})
		} else if (newTweet["baltimoreTweet"]){
			var baltimoreTweets = this.state.baltimoreTweets
			baltimoreTweets.unshift(newTweet)
			this.setState({
				baltimoreTweets: baltimoreTweets
			})
		} else if (newTweet["newOrleansTweet"]){
			var newOrleansTweets = this.state.newOrleansTweets
			newOrleansTweets.unshift(newTweet)
			this.setState({
				newOrleansTweets: newOrleansTweets
			})
		}
	},
	mouseoverCity: function(cityName){
		this.setState({
			selectedCity: cityName
		})
	},
	render: function() {
		return (
			<div>
				<h1 className={"title"}>
					CityTweetStreaming
				</h1>
				<div className={"tweet-map"}>
					<Map 
						mouseoverCity={this.mouseoverCity}
						sanFransiscoTweets={this.state.sanFransiscoTweets} 
						newYorkCityTweets={this.state.newYorkCityTweets} 
						washingtonDCTweets={this.state.washingtonDCTweets} 
						detroitTweets={this.state.detroitTweets} 
						chicagoTweets={this.state.chicagoTweets} 
						miamiTweets={this.state.miamiTweets} 
						losAngelesTweets={this.state.losAngelesTweets} 
						seattleTweets={this.state.seattleTweets} 
						portlandTweets={this.state.portlandTweets} 
						bostonTweets={this.state.bostonTweets} 
						houstonTweets={this.state.houstonTweets} 
						dallasTweets={this.state.dallasTweets} 
						denverTweets={this.state.denverTweets} 
						atlantaTweets={this.state.atlantaTweets} 
						philadelphiaTweets={this.state.philadelphiaTweets} 
						baltimoreTweets={this.state.baltimoreTweets} 
						newOrleansTweets={this.state.newOrleansTweets} 

						stateData={us_states} 
						cityData={us_cities} />
				</div>

				<div className={"buttons-box"}>
					<ResetButton resetMap={this.resetMap}/>

					<PausePlayButton pauseState={this.state.pauseState} pauseMap={this.pauseMap} />
				</div>

				<TweetDisplay
					selectedCity={this.state.selectedCity} 
					sanFransiscoTweets={this.state.sanFransiscoTweets}  
					newYorkCityTweets={this.state.newYorkCityTweets} 
					washingtonDCTweets={this.state.washingtonDCTweets} 
					detroitTweets={this.state.detroitTweets} 
					chicagoTweets={this.state.chicagoTweets} 
					miamiTweets={this.state.miamiTweets} 
					losAngelesTweets={this.state.losAngelesTweets} 
					seattleTweets={this.state.seattleTweets} 
					portlandTweets={this.state.portlandTweets} 
					bostonTweets={this.state.bostonTweets} 
					houstonTweets={this.state.houstonTweets} 
					dallasTweets={this.state.dallasTweets} 
					denverTweets={this.state.denverTweets} 
					atlantaTweets={this.state.atlantaTweets} 
					philadelphiaTweets={this.state.philadelphiaTweets} 
					baltimoreTweets={this.state.baltimoreTweets} 
					newOrleansTweets={this.state.newOrleansTweets}/>

				
			</div>
		)
	}
})

module.exports = App
 

// Tweet Counts that can be added in later.  Mostly for testing purposes.
 // <TweetCountBox 
	// 				sanFransiscoTweetCount={this.state.sanFransiscoTweets.length} 
	// 				newYorkCityTweetCount={this.state.newYorkCityTweets.length} 
	// 				washingtonDCTweetCount={this.state.washingtonDCTweets.length} 
	// 				detroitTweetCount={this.state.detroitTweets.length} 
	// 				chicagoTweetCount={this.state.chicagoTweets.length} 
	// 				miamiTweetCount={this.state.miamiTweets.length} 
	// 				losAngelesTweetCount={this.state.losAngelesTweets.length} 
	// 				seattleTweetCount={this.state.seattleTweets.length} 
	// 				portlandTweetCount={this.state.portlandTweets.length} 
	// 				bostonTweetCount={this.state.bostonTweets.length} 
	// 				houstonTweetCount={this.state.houstonTweets.length} 
	// 				dallasTweetCount={this.state.dallasTweets.length} 
	// 				denverTweetCount={this.state.denverTweets.length} 
	// 				atlantaTweetCount={this.state.atlantaTweets.length} 
	// 				philadelphiaTweetCount={this.state.philadelphiaTweets.length} 
	// 				baltimoreTweetCount={this.state.baltimoreTweets.length} 
	// 				newOrleansTweetCount={this.state.newOrleansTweets.length}
					
	// 				/>
	


	