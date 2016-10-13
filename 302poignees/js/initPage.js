var navBarNameStyle = {
    position: "absolute",
    right: "20px",
    top: "10px"
};

var styleSide = {

};

var styleGraph = {

};

var styleMain = {
  height: "800px",
  backgroundColor: "#c1c1c1",
  marginTop: "57px"
};

var styleSidePanel = {
  paddingTop: "20px"
}

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
          <div style={styleSidePanel}>
            <div className="panel panel-default">
              <div className="panel-body">
                <b>Choose a file or use the random feature.</b>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                <b>File Input</b>
                <br/><br/>
                <div id="checkbox-file" className="checkArray">
                  <input type="checkbox" name="checkbox-file"/>
                </div>
                <br/>
                <input id="files" name="files[]" type="file"/>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                <button type="submit" className="btn btn-lg btn-primary center-block">Go</button>
              </div>
            </div>
          </div>
        );
    }
});

var MainContent = React.createClass({
    render: function() {
        return (
            <div className="text-center" style={styleMain}>
                <div style={styleSide} className="col-md-3">
                    <SideBar/>
                </div>
                <div style={styleGraph} className="col-md-9">
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

$("[name='checkbox-file']").bootstrapSwitch();
