var React = require('react');

var PausePlayButton = React.createClass({
	getInitialState: function(){
		return ({
			pauseText: ""
		})
	},
	render: function(){
		if (this.props.pauseState === -1){
			var pauseText = "Pause"
		} else {
			var pauseText = "Stream"
		}
		return (
			<input 
				type="submit"
				onClick={this.props.pauseMap}
				value={pauseText}/>
		);
	}
});

module.exports = PausePlayButton;