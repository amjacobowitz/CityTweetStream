var React = require('react');
require("../../public/style.css");

var TweetCountBox = React.createClass({
	render: function(){
		var sanFransiscoTweetCount = this.props.sanFransiscoTweetCount
		var newYorkCityTweetCount = this.props.newYorkCityTweetCount
		var washingtonDCTweetCount = this.props.washingtonDCTweetCount
		var detroitTweetCount = this.props.detroitTweetCount
		var chicagoTweetCount = this.props.chicagoTweetCount
		var miamiTweetCount = this.props.miamiTweetCount
		var losAngelesTweetCount = this.props.losAngelesTweetCount
		var seattleTweetCount = this.props.seattleTweetCount
		var portlandTweetCount = this.props.portlandTweetCount
		var bostonTweetCount = this.props.bostonTweetCount
		var houstonTweetCount = this.props.houstonTweetCount
		var dallasTweetCount = this.props.dallasTweetCount
		var denverTweetCount = this.props.denverTweetCount
		var atlantaTweetCount = this.props.atlantaTweetCount
		var philadelphiaTweetCount = this.props.philadelphiaTweetCount
		var baltimoreTweetCount = this.props.baltimoreTweetCount
		var newOrleansTweetCount = this.props.baltimoreTweetCount
		
		return (
			<div className="tweetCountBox">
				<p>San Fransisco Tweets: {sanFransiscoTweetCount}</p>
				<p>New York City Tweets: {newYorkCityTweetCount}</p>
				<p>Washington DC Tweets: {washingtonDCTweetCount}</p>
				<p>Detroit Tweets: {detroitTweetCount}</p>
				<p>Chicago Tweets: {chicagoTweetCount}</p>
				<p>Miami Tweets: {miamiTweetCount}</p>
				<p>Los Angeles Tweets: {losAngelesTweetCount}</p>
				<p>Seattle Tweets: {seattleTweetCount}</p>
				<p>Portland Tweets: {portlandTweetCount}</p>
				<p>Boston Tweets: {bostonTweetCount}</p>
				<p>Houston Tweets: {houstonTweetCount}</p>
				<p>Dallas Tweets: {dallasTweetCount}</p>
				<p>Denver Tweets: {denverTweetCount}</p>
				<p>Atlanta Tweets: {atlantaTweetCount}</p>
				<p>Philadelphia Tweets: {philadelphiaTweetCount}</p>
				<p>Baltimore Tweets: {baltimoreTweetCount}</p>
				<p>New Orleans Tweets: {newOrleansTweetCount}</p>
				
			</div>
		)
	}
})

module.exports = TweetCountBox;