var React = require('react');
var mui = require('material-ui');
var Header = require('./header.js');
var Detail = require('./detail.js');
var ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT); 
var AppBar = mui.AppBar;
var IconButton = mui.IconButton;
var FlatButton = mui.FlatButton;
var FontIcon  = mui.FontIcon;

var Index = React.createClass({
	childContextTypes: {
    		muiTheme: React.PropTypes.object
  	},
  	getChildContext: function() {
    		return {
      			muiTheme: ThemeManager.getCurrentTheme()
    		};
  	},
	render: function() {
		return (
			<div>
			<Header />
			<Detail />
			</div>
		);
	}
});

  setInterval(function() {
   React.render(
   	<Index />,
    	document.getElementById('container')
  );
}, 50);

