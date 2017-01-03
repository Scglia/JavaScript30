class SoundKey extends HTMLElement {
  onKeydown (e) {
    if(e.key !== this._key)
      return;

    this._audio.currentTime = 0;
    this._audio.play();
    this.classList.add('playing');
  }

  createdCallback () {
    this._key = this.getElementsByTagName('kbd')[0].innerHTML.toLowerCase();
    this._audio = this.getElementsByTagName('audio')[0];
  }

  attachedCallback () {
    window.addEventListener('keydown', this.onKeydown.bind(this));
    this.addEventListener('transitionend', () => this.classList.remove('playing'));
  }

  detachedCallback () {
  }
}

document.registerElement('sound-key', SoundKey);
