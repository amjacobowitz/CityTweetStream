const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const Twitter = require('twitter');

const config = require('./webpack.config.js');

const compiler = webpack(config)




const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

var sanFransiscoCoords = "-122.18,37.25,-121.18,38.25"
		newYorkCityCoords = ",-74.48,40.27,-73.48,41.27",
		washingtonDCCoords = ",-77.96,38.45,-76.96,39.45",
		detroitCoords = ",-83.52,41.92,-82.52,42.92",
		chicagoCoords = ",-88.15,41.40,-87.15,42.40",
		miamiCoords = ",-80.78,25.32,-79.78,26.32",
		losAngelesCoords = ",-118.90, 33.43,-117.90, 34.43",
		seattleCoords = ",-122.80, 45.95,-121.80, 47.95",
		portlandCoords = ",-123.18, 45.02,-122.18, 46.02",
		bostonCoords = ",-71.53, 41.87,-70.53, 42.87",
		houstonCoords = ",-95.85, 29.47,-94.85, 30.47",
		dallasCoords = ",-97.47, 32.23,-96.47, 33.23",
		denverCoords = ",-105.37, 39.25,-104.37, 40.25",
		atlantaCoords = ",-84.92, 33.15,-83.92, 34.15",
		philadelphiaCoords = ",-75.75, 39.38,-74.75, 40.38",
		baltimoreCoords = ",-77.0,38.5,-76.0,39.5",
		newOrleansCoords = ",-90.75, 29.48,-89.75, 30.48";

var coordinates = sanFransiscoCoords
	.concat(newYorkCityCoords)
	// .concat(washingtonDCCoords)
	.concat(detroitCoords)
	.concat(chicagoCoords)
	.concat(miamiCoords)
	.concat(losAngelesCoords)
	.concat(seattleCoords)
	.concat(portlandCoords)
	.concat(bostonCoords)
	.concat(houstonCoords)
	.concat(dallasCoords)
	.concat(denverCoords)
	.concat(atlantaCoords)
	// .concat(philadelphiaCoords)
	.concat(baltimoreCoords)
	.concat(newOrleansCoords)

server.listen(8080);

io.on('connection', function(socket){

	var client =  new Twitter({
	  consumer_key: 'QN96KR0y2Wlcr6nxStGrdJVZm',
	  consumer_secret: 'K18Dfo1a7jdZJk78KaA5BDSXOJOEvaYnCKMlC3xNZev6JS1xJb',
	  access_token_key: '43416320-Zydvrrn7lxRAFH4jip3AWhmHjvVLsZKDt9cJRXlXA',
	  access_token_secret: 'n1DldIalzG33fsippaMqhdkJuTXf7ghYo7L0iBmHDiZb5'
	});

	var geoBoxedStream = client.stream('statuses/filter', {locations: coordinates});

	geoBoxedStream.on('data', function(tweet) {
		console.log(tweet.place.name);

		if (tweet.place.name){
			var tweetName = tweet.place.name;
		} else {
			var tweetName = '';
		}

		if (tweetName === "San Fransisco" || tweetName === "Sunnyvale" || tweetName === "Oakland" || tweetName === "Mountain View" || tweetName === "San Jose" || tweetName === "Stockton"){

			socket.emit('newTweet', {"sanFransiscoTweet": tweet});

		} else if (tweetName === "New York" || tweetName === "Brooklyn" || tweetName === "Queens" || tweetName === "Manhattan" || tweetName === "Bronx" || tweetName === "Harlem" || tweetName === "Staten Island" || tweetName === "Yonkers" || tweetName === "Times Square"){

			socket.emit('newTweet', {"newYorkCityTweet": tweet});

		} else if (tweetName === "Arlington" || tweetName === "Washington" || tweetName === "Chevy Chase Village" || tweetName === "Virginia" || tweetName === "North Bethesda" || tweetName === "Foggy Bottom" || tweetName === " Reston" || tweetName === "Gaithersburg" || tweetName === "Washington DC"){
			
			socket.emit('newTweet', {"washingtonDCTweet": tweet});
		
		} else if (tweetName === "Detroit" || tweetName === "Michigan" || tweetName === "West Bloomfield" || tweetName === "Bloomfield Hills" || tweetName === "Pontiac" || tweetName === "Windsor"){
			
			socket.emit('newTweet', {"detroitTweet": tweet});
		
		} else if (tweetName === "Chicago" || tweetName === "Illinois"){
			
			socket.emit('newTweet', {"chicagoTweet": tweet});
		
		} else if (tweetName === "Miami" || tweetName === "Florida"){
			
			socket.emit('newTweet', {"miamiTweet": tweet});
		
		} else if (tweetName === "Los Angeles"){
			
			socket.emit('newTweet', {"losAngelesTweet": tweet});
		
		} else if (tweetName === "Seattle"){
			
			socket.emit('newTweet', {"seattleTweet": tweet});
		
		} else if (tweetName === "Portland" || tweetName === "Oregon"){
			
			socket.emit('newTweet', {"portlandTweet": tweet});
		
		} else if (tweetName === "Boston" || tweetName === "Massasachusetts"){
			
			socket.emit('newTweet', {"bostonTweet": tweet});
		
		} else if (tweetName === "Houston"){
			
			socket.emit('newTweet', {"houstonTweet": tweet});
		
		} else if (tweetName === "Dallas"){
			
			socket.emit('newTweet', {"dallasTweet": tweet});
		
		} else if (tweetName === "Denver" || tweetName === "Colorado" || tweetName === "Boulder"){
			
			socket.emit('newTweet', {"denverTweet": tweet});
		
		} else if (tweetName === "Atlanta"  || tweetName === "Georgia"){
			
			socket.emit('newTweet', {"atlantaTweet": tweet});
		
		} else if (tweetName === "Baltimore"){
			
			socket.emit('newTweet', {"baltimoreTweet": tweet});
		
		} else if (tweetName === "New Orleans" || tweetName === "Louisiana"){
			
			socket.emit('newTweet', {"newOrleansTweet": tweet});
		
		}
	});
	
});


app.set('port', (process.env.PORT || 3000));


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(webpackHotMiddleware(compiler))
app.use(webpackDevMiddleware(compiler, {
	noInfo: true
}));

app.listen(app.get('port'), () => {
	console.log("Server listening on port " + app.get('port'));
});

