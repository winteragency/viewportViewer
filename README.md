# viewportViewer :see_no_evil:

[![Latest Stable Version](https://img.shields.io/npm/v/viewportviewer.svg)](https://www.npmjs.com/package/viewportviewer) [![Total Downloads](https://img.shields.io/npm/dt/viewportviewer.svg)](https://npm-stat.com/charts.html?package=viewportviewer) [![License](https://img.shields.io/github/license/winteragency/viewportviewer.svg)](https://github.com/winteragency/viewportviewer) [![Made by WINTER](https://img.shields.io/badge/made%20by-%E2%9D%84%20WINTER-blue.svg)](https://winteragency.se)

This is a simple drop-in utility to show viewport size in the lower right corner for development.

## Usage

`npm i viewportviewer --save-dev`
`yarn add viewportviewer --dev`

Then include `viewportviewer.js` or `./dist/viewportviewer.min.js` however you prefer.
There's also a basic CSS file you can include for styling, `viewportviewer.css` or `./dist/viewportviewer.min.css`.
Alternatively, you can add your own CSS styling on the `#viewportviewer` selector:

```css
#viewportviewer {
	font-size: 1.1rem;
	font-weight: bold;
	z-index: 9999;
	position: fixed;
	bottom: 0;
	right: 0;
	color: #ffffff;
	background: #071c2c;
	padding: 1.2rem;
	cursor: pointer;
}
```

You can also load the file(s) from unpkg:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/viewportviewer@1.0.0/dist/viewportviewer.min.css">
<script src="https://unpkg.com/viewportviewer@1.0.0/dist/viewportviewer.min.js"></script>
```

Additionally, you can add whatever logic is needed for your stack in order to only run this in development and/or staging.

## License

The MIT License

Copyright (c) 2018, WINTER AGENCY

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
