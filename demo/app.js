(function(window, undefined) {
        'use strict';
        var React = window.React;
        var HelloWorld = React.createClass({
            render: function() {
                return React.createElement('hello-world', null, '', this.props.name);
            }
        });
        React.render( React.createElement(HelloWorld, null, ' '),
          document.querySelector('body')
        );
}(window));