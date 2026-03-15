# audio-button

1つ以上のオーディオファイルを再生するカスタムWebコンポーネントです。Chrome、Safariに対応しています。

## デモ
- [自律カスタム要素](https://code4fukui.github.io/audio-button/)
- [ボタンカスタム要素](https://code4fukui.github.io/audio-button/index-is.html)

## 機能
- クリックするとオーディオファイルを再生するカスタムWebコンポーネント
- 自律カスタム要素 (`<audio-button>`) と、ボタン要素をカスタムする (`<button is="audio-button">`) の2つのバージョン

## 使い方
HTMLに以下のように記述すると使用できます。

```html
<audio-button src="test.mp3">test</audio-button>
```

または

```html
<button is="audio-button" src="test.mp3">test</button>
```

## ライセンス
MIT License