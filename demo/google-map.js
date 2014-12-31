(function(window, undefined) {
        'use strict';
        var React = window.React;
        var GoogleMap = React.createClass({
            render: function() {
                return React.createElement('google-map', {latitude: '41.8369', longitude: '-87.6847', ref: 'map'}, '', this.props.name);
            }
        });
        React.render( React.createElement(GoogleMap, null, ' '),
          document.querySelector('body')
        );
        GoogleMap
}(window));