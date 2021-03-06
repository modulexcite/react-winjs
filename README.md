# react-winjs

A React wrapper around WinJS's controls. Implemented using the technique described on [this WinJS wiki page](https://github.com/winjs/winjs/wiki/Using-WinJS-with-React).

A work in progress.

[Documentation](https://github.com/winjs/react-winjs/wiki/Documentation)

Live demos:
  - [Showcase](http://winjs.github.io/react-winjs/examples/showcase/index.html): shows an example usage of each component.
  - [Movies](http://winjs.github.io/react-winjs/examples/movies/index.html): demonstrates a couple of react-winjs components in a small app for looking up movies.

## Installation

```
npm install react-winjs --save
```

## Usage

Include [WinJS 4.0.0-preview](http://try.buildwinjs.com/#get) on your page. For example:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/winjs/4.0.0-preview/css/ui-dark.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/winjs/4.0.0-preview/js/WinJS.js"></script>
```

Then require `react-winjs` and use it:

```jsx
var React = require('react');
var ReactWinJS = require('react-winjs');

var App = React.createClass({
  render: function () {
    return <ReactWinJS.Rating maxRating={3} />;
  }
});

React.render(<App />, document.getElementById("app"));
```

See the [documentation](https://github.com/winjs/react-winjs/wiki/Documentation) and [examples](https://github.com/winjs/react-winjs/tree/master/examples) for more details.

## License

MIT
