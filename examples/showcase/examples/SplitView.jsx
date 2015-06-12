/** @jsx React.DOM */

var React = require('react');
var ReactWinJS = require('react-winjs');

module.exports = React.createClass({
    handleTogglePane: function () {
        var splitView = this.refs.splitView.winControl;
        splitView.paneOpened = !splitView.paneOpened;
    },
    handleChangeContent: function (newContent) {
        this.setState({ content: newContent });
        this.refs.splitView.winControl.paneOpened = false;
    },
    getInitialState: function () {
        return {
            content: "Home"
        };
    },
    render: function () {
        var paneComponent = (
            <div>
                <div>
                    <ReactWinJS.SplitViewPaneToggle onInvoked={this.handleTogglePane} />
                </div>

                <ReactWinJS.NavBarCommand
                    label="Home"
                    icon="home"
                    onClick={this.handleChangeContent.bind(null, "Home")} />
                <ReactWinJS.NavBarCommand
                    label="Favorite"
                    icon="favorite"
                    onClick={this.handleChangeContent.bind(null, "Favorite")} />
                <ReactWinJS.NavBarCommand
                    label="Settings"
                    icon="settings"
                    onClick={this.handleChangeContent.bind(null, "Settings")} />
            </div>
        );
        var contentComponent = (
            <h2 className="win-h2" style={{marginLeft: "10px"}}>{this.state.content}</h2>
        );

        return (
            <ReactWinJS.SplitView
                ref="splitView"
                style={{height: "300px"}}
                paneComponent={paneComponent}
                contentComponent={contentComponent} />
        );
    }
});