// Gestion simple du son (Web Audio API) pour les interactions du jeu.

export class SoundManager {
  constructor(enabled = true) {
    this.enabled = enabled;
    this.ctx = null;
  }

  setEnabled(enabled) {
    this.enabled = !!enabled;
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  _ensureContext() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      console.warn("AudioContext non disponible dans ce navigateur.");
      return;
    }
    this.ctx = new AudioCtx();
  }

  _playTone(freq = 440, duration = 0.08, type = "triangle", volume = 0.22) {
    if (!this.enabled) return;
    this._ensureContext();
    if (!this.ctx) return;

    // Certains navigateurs nécessitent une interaction utilisateur avant de pouvoir jouer un son.
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    osc.start(now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.stop(now + duration + 0.03);
  }

  playClick() {
    this._playTone(220, 0.06, "triangle", 0.28);
  }

  playPurchase() {
    this._playTone(420, 0.12, "sine", 0.26);
  }

  playError() {
    this._playTone(120, 0.16, "sawtooth", 0.22);
  }

  playAchievement() {
    this._playTone(440, 0.12, "triangle", 0.25);
    setTimeout(() => this._playTone(660, 0.14, "triangle", 0.22), 90);
  }
}
