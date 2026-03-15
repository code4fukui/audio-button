# audio-button

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

## Self-contained Custom Element (for Chrome & Safari)

- [audio-button.js](audio-button.js)
- [Sample](https://code4fukui.github.io/audio-button/)

## Button Custom Element (for Chrome)

- [audio-button-is.js](audio-button-is.js)
- [Sample](https://code4fukui.github.io/audio-button/index-is.html)

## Features
- Provides a custom HTML element to play audio on click
- Supports both a standalone custom element and an "is" custom element for button
- Styles the button with a simple border, padding, and background

## Usage
To use the standalone custom element:
```html
<audio-button src="test.mp3">test</audio-button>
```

To use the "is" custom element:
```html
<button is="audio-button" src="test.mp3">test</button>
```

## License
MIT License