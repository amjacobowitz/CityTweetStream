var React = require('react');

var ResetButton = React.createClass({
	render: function(){
		return (
			<input 
				type="submit"
				value="Reset"
				onClick={this.props.resetMap} />
		);
	}
});

module.exports = ResetButton;