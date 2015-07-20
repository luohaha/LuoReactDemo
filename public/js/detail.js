var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardMedia = mui.CardMedia;
var CardText = mui.CardText;
var CardTitle = mui.CardTitle;

var Detail = React.createClass({
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
  <Card>
          <CardHeader
            title="Demo Url Based Avatar"
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"/>
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
          <CardTitle title="Title" subtitle="Subtitle"/>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
  </Card>
  		);
  	}
});

module.exports = Detail;