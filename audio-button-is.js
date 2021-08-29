class AudioButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener("click", () => {
      const audio = new Audio();
      audio.src = this.getAttribute("src");
      audio.play();
    });
  }
};

customElements.define("audio-button", AudioButton, { extends: "button" });
