var React = require('react')
var ScrollArea = require('react-scrollbar')

var TweetDisplay = React.createClass({
	render: function(){

		var cityName = this.props.selectedCity

		switch(cityName) {
		    case "San Fransisco":
		        var cityForTweet="sanFransiscoTweet";
		        var tweets = this.props.sanFransiscoTweets;
		        break;
		    case "Washington DC":
		        var cityForTweet="washingtonDCTweet";
		        var tweets = this.props.washingtonDCTweets;
		        break;
		    case "New York City":
		        var cityForTweet="newYorkCityTweet";
		        var tweets = this.props.newYorkCityTweets;
		        break;
		    case "Detroit":
		        var cityForTweet="detroitTweet";
		        var tweets = this.props.detroitTweets;
		        break;
		    case "Chicago":
		        var cityForTweet="chicagoTweet";
		        var tweets = this.props.chicagoTweets;
		        break;
		    case "Miami":
		        var cityForTweet="miamiTweet";
		        var tweets = this.props.miamiTweets;
		        break;
		    case "Los Angeles":
		        var cityForTweet="losAngelesTweet";
		        var tweets = this.props.losAngelesTweets;
		        break;
		    case "Seattle":
		        var cityForTweet="seattleTweet";
		        var tweets = this.props.seattleTweets;
		        break;
		    case "Portland":
		        var cityForTweet="portlandTweet";
		        var tweets = this.props.portlandTweets;
		        break;
		    case "Boston":
		        var cityForTweet="bostonTweet";
		        var tweets = this.props.bostonTweets;
		        break;
		    case "Houston":
		        var cityForTweet="houstonTweet";
		        var tweets = this.props.houstonTweets;
		        break;
		    case "Dallas":
		        var cityForTweet="dallasTweet";
		        var tweets = this.props.dallasTweets;
		        break;
		    case "Denver":
		        var cityForTweet="denverTweet";
		        var tweets = this.props.denverTweets;
		        break;
		    case "Atlanta":
		        var cityForTweet="atlantaTweet";
		        var tweets = this.props.atlantaTweets;
		        break;
		    case "Philadelphia":
		        var cityForTweet="philadelphiaTweet";
		        var tweets = this.props.philadelphiaTweets;
		        break;
		    case "Baltimore":
		        var cityForTweet="baltimoreTweet";
		        var tweets = this.props.baltimoreTweets;
		        break;
		    case "New Orleans":
		        var cityForTweet="newOrleansTweet";
		        var tweets = this.props.newOrleansTweets;
		        break;
		    default:
		        var cityForTweet=null;
		        var tweets = [];
		}

		return(
			<div className={"tweet-display-wrapper"}>
				<h2 className={"tweet-display-title"}>{cityName}</h2>
				<ScrollArea className={"tweet-display"} speed={0.8}>
					<ul>
						{ tweets.map(function(tweet){
							return <p >{tweet[cityForTweet].text}</p>
						})
						}
					</ul>
				</ScrollArea>
			</div>
		)
	}
})

module.exports = TweetDisplay;