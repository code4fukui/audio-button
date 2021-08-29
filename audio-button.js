class AudioButton extends HTMLElement {
  constructor() {
    super();
    Object.assign(this.style, {
      "border": "1px solid black",
      "padding": ".2em .5em",
      "border-radius": ".2em",
      "background-color": "#eee",
    });
    this.addEventListener("click", () => {
      const audio = new Audio();
      audio.src = this.getAttribute("src");
      audio.play();
    });
  }
};

customElements.define("audio-button", AudioButton);
