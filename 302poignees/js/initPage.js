var navBarNameStyle = {
    position: "absolute",
    right: "20px",
    top: "10px"
};

var styleSide = {
    "backgroundColor": "orange",
    "height": "800px"
};

var styleGraph = {
    "backgroundColor": "green",
    "height": "800px"
};

var styleMain = {
    "paddingTop": "57px"
};

var NavBar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
		        <div className="container center-block" id="banner_title">
			        <h3 className="text-center">[302poignees]</h3>
		        </div>
		        <p style={navBarNameStyle} className="navbar-text text-right">villev_h</p>
	        </nav>
      );
    }
});

var SideBar = React.createClass({
    render: function() {
        return (
            <h1>Sidebar</h1>
        );
    }
});

var MainContent = React.createClass({
    render: function() {
        return (
            <div style={styleMain}>
                <div style={styleSide} className="col-md-2">
                    <SideBar/>
                </div>
                <div style={styleGraph} className="col-md-10">
                </div>
            </div>
        );
    }
});

var Root = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <MainContent/>
            </div>
        )
    }
});

ReactDOM.render(<Root />, document.getElementById('root'));