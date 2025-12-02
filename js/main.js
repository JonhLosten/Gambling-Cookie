// Point d'entrée du BDE Cookie Clicker : initialisation du jeu, de l'UI et de la sauvegarde.

import { Game } from "./game.js";
import { SoundManager } from "./audio.js";
import * as storage from "./storage.js";
import { UI } from "./ui.js";

window.addEventListener("DOMContentLoaded", () => {
  const savedState = storage.load();
  const game = new Game();

  if (savedState) {
    game.hydrate(savedState);
  }

  const sound = new SoundManager(game.state.settings.soundEnabled);
  const ui = new UI({ game, sound, storage });

  // Branche les callbacks du jeu vers l'UI
  game.onStateChange = (payload) => {
    ui.render(payload);
  };

  game.onAchievementUnlocked = (achievement) => {
    ui.showAchievementToast(achievement);
  };

  game.start();

  // Auto-sauvegarde légère
  let lastAutoSave = performance.now();
  setInterval(() => {
    const now = performance.now();
    if (now - lastAutoSave > 15000) {
      storage.save(game.state);
      lastAutoSave = now;
    }
  }, 5000);

  // Expose l'instance pour le debug dans la console
  window.bdeCookieGame = game;
});
