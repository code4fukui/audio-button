# audio-button

1つ以上のオーディオファイルを再生する、Chrome/Safariに対応したカスタムWebコンポーネントです。

## 機能
- クリックするとオーディオファイルを再生する
- 自律カスタム要素 (`<audio-button>`) と、ボタン要素をカスタムする (`<button is="audio-button">`) の2つのバージョンを提供

## 使い方
HTMLに以下のように記述するとすぐに使えます。

```html
<audio-button src="test.mp3">test</audio-button>
```

または

```html
<button is="audio-button" src="test.mp3">test</button>
```

## ライセンス
MIT License