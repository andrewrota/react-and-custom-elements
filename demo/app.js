(function(window, undefined) {
    'use strict';
    var React = window.React;
    var HelloWorld = React.createClass({
        render: function() {
            return React.DOM.h1(null, "Hello, ", this.props.name, "!");
        }
    });
    React.renderComponent(
        HelloWorld({name: 'ReactJs'}),
        document.querySelector('body')
    );
}(window));