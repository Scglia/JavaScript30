class SoundKey extends HTMLElement {
  onKeydown (e) {
    if(e.key !== this._key)
      return;

    this._audio.currentTime = 0;
    this._audio.play();
    this.classList.add('playing');
  }

  onTransitionend (e) {
    this.classList.remove('playing');
  }

  createdCallback () {
    this._key = this.getElementsByTagName('kbd')[0].innerHTML.toLowerCase();
    this._audio = this.getElementsByTagName('audio')[0];
    this.onKeydown = this.onKeydown.bind(this);
  }

  attachedCallback () {
    window.addEventListener('keydown', this.onKeydown);
    this.addEventListener('transitionend', this.onTransitionend);
  }

  detachedCallback () {
    window.removeEventListener('keydown', this.onKeydown);
    this.removeEventListener('transitionend', this.onTransitionend);
  }
}

document.registerElement('sound-key', SoundKey);
