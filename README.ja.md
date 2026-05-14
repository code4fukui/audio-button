# audio-button

クリックで音声を再生する、ChromeおよびSafari向けの自己完結型カスタムHTML要素。

## 機能
- クリックで音声を再生するカスタムHTML要素を提供
- スタンドアロンのカスタム要素（`<audio-button>`）と、ボタン用の"is"カスタム要素（`<button is="audio-button">`）の両方をサポート
- ボタンにシンプルな枠線、パディング、背景色を適用

## 使い方
スタンドアロンのカスタム要素を使用するには:
```html
<audio-button src="test.mp3">test</audio-button>
```

"is"カスタム要素を使用するには:
```html
<button is="audio-button" src="test.mp3">test</button>
```

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
