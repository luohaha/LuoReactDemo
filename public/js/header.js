var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var AppBar = mui.AppBar;
var IconButton = mui.IconButton;
var FontIcon = mui.FontIcon;
var LeftNav = mui.LeftNav;

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' }
];

var Header = React.createClass({
	getInitialState: function() {
		return {open: false};
	},
	childContextTypes: {
    		muiTheme: React.PropTypes.object
  	},
  	getChildContext: function() {
    		return {
      			muiTheme: ThemeManager.getCurrentTheme()
    		};
  	},
  	leftIconClick: function(event) {
  		if (this.state.open === false) {
  		  	this.refs.leftNav.toggle();
  		  	this.setState({open: true});	
  		}
  	},
  	leftNavClose: function() {
  		this.refs.leftNav.close();
  		this.setState({open: false});
  	},
	render: function() {
		return (
			<div>
			<AppBar
  				title="蜜天气"
  				iconElementLeft={<IconButton tooltip="展开" onClick={this.leftIconClick}>
  							<FontIcon className="muidocs-icon-custom-sort" />
  						</IconButton>} />

  			<LeftNav ref="leftNav" menuItems={menuItems}  docked={this.state.open} header={
  				<AppBar title="选择地区" iconElementLeft={
  						<IconButton tooltip="返回" onClick={this.leftNavClose}>
  							<FontIcon className="muidocs-icon-custom-back" />
  						</IconButton>} />
  			}/>
  			</div>
		);
	}
});

module.exports = Header;