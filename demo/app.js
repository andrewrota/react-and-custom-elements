(function(window, undefined) {
    'use strict';
    var React = window.React;
    var HelloWorld = React.createClass({
        render: function() {
            return React.DOM['hello-world'](null);
        }
    });
    React.renderComponent(
        HelloWorld(),
        document.querySelector('body')
    );
}(window));