# audio-button

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A self-contained custom HTML element to play audio on click, for Chrome and Safari.

## Features
- Provides a custom HTML element to play audio on click
- Supports both a standalone custom element (`<audio-button>`) and an "is" custom element for button (`<button is="audio-button">`)
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
MIT License — see [LICENSE](LICENSE).