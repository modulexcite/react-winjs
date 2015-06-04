/** @jsx React.DOM */

var React = require('react');
var ReactWinJS = require('react-winjs');

// Also see CSS styles in index.html.

var SplitViewButton = React.createClass({
    render: function () {
        return (
            <button
                onClick={this.props.onClick}
                type="button"
                className="win-splitview-button" />
        );
    }
});

module.exports = React.createClass({
    handleTogglePane: function () {
        var splitView = this.refs.splitView.winControl;
        splitView.paneOpened = !splitView.paneOpened;
    },
    handleChangeContent: function (newContent) {
        this.setState({ content: newContent });
        this.refs.splitView.winControl.paneHidden = true;
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
                    <SplitViewButton onClick={this.handleTogglePane} />
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
            <h2 style={{marginLeft: "10px"}}>{this.state.content}</h2>
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