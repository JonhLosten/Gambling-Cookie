// Gestion complète de l'interface utilisateur (DOM) pour le BDE Cookie Clicker.

import { formatNumber, formatInteger } from "./utils.js";
import { BUILDINGS, ACHIEVEMENTS } from "./game.js";
import { BDE_GOALS, computeBdeMetrics } from "./bdeGoals.js";

export class UI {
  constructor({ game, sound, storage }) {
    this.game = game;
    this.sound = sound;
    this.storage = storage;

    this.dom = {};
    this._cacheDom();
    this._bindEvents();

    // Rendu initial
    this.render({ state: game.state, derived: game.derived });
  }

  _cacheDom() {
    const qs = (sel) => document.querySelector(sel);

    this.dom.cookies = qs('[data-bind="cookies"]');
    this.dom.cps = qs('[data-bind="cps"]');
    this.dom.totalCookies = qs('[data-bind="totalCookies"]');
    this.dom.cpc = qs('[data-bind="cpc"]');
    this.dom.prestige = qs('[data-bind="prestige"]');
    this.dom.playtime = qs('[data-bind="playtime"]');
    this.dom.buildingsCps = qs('[data-bind="buildingsCps"]');
    this.dom.upgradesAvailable = qs('[data-bind="upgradesAvailable"]');

    this.dom.bdeParties = qs('[data-bind="bde-parties"]');
    this.dom.bdeProjects = qs('[data-bind="bde-projects"]');
    this.dom.bdeGoodies = qs('[data-bind="bde-goodies"]');
    this.dom.bdeRank = qs('[data-bind="bde-rank"]');

    this.dom.achievementsCount = qs('[data-bind="achievementsCount"]');

    this.dom.buildingsList = qs('[data-list="buildings"]');
    this.dom.upgradesList = qs('[data-list="upgrades"]');
    this.dom.goalsList = qs('[data-list="bde-goals"]');
    this.dom.achievementsList = qs('[data-list="achievements"]');

    this.dom.upgradeEmpty = qs("[data-upgrade-empty]");
    this.dom.achievementEmpty = qs("[data-achievement-empty]");

    this.dom.cookieButton = qs('[data-role="main-cookie"]');

    this.dom.modalImport = qs('[data-modal="import"]');
    this.dom.modalImportText = qs("[data-import-text]");

    this.dom.toastContainer = qs(".toast-container");
    this.dom.floatingLayer = qs(".floating-clicks-layer");

    this.dom.soundLabel = qs("[data-sound-label]");
    this.dom.themeIcon = qs("[data-icon-theme]");
  }

  _bindEvents() {
    if (this.dom.cookieButton) {
      this.dom.cookieButton.addEventListener("pointerdown", (ev) => {
        const gain = this.game.handleClick(1);
        if (this.sound) this.sound.playClick();
        this._spawnFloatingClick(gain, ev.clientX, ev.clientY);
      });
    }

    if (this.dom.buildingsList) {
      this.dom.buildingsList.addEventListener("click", (ev) => {
        const item = ev.target.closest("[data-building-id]");
        if (!item) return;
        const id = item.getAttribute("data-building-id");
        const result = this.game.buyBuilding(id);
        if (result.ok) {
          if (this.sound) this.sound.playPurchase();
        } else if (result.reason === "not-enough") {
          if (this.sound) this.sound.playError();
          this.showToast({
            title: "Pas assez de cookies",
            body: "Continue à cliquer ou achète des bâtiments moins chers.",
            variant: "warning",
            icon: "⚠️",
          });
        }
      });
    }

    if (this.dom.upgradesList) {
      this.dom.upgradesList.addEventListener("click", (ev) => {
        const item = ev.target.closest("[data-upgrade-id]");
        if (!item) return;
        const id = item.getAttribute("data-upgrade-id");
        const result = this.game.buyUpgrade(id);
        if (result.ok) {
          if (this.sound) this.sound.playPurchase();
          this.showToast({
            title: "Amélioration achetée",
            body: "Ta production de cookies vient d'augmenter.",
            variant: "success",
            icon: "⬆️",
          });
        } else if (result.reason === "not-enough") {
          if (this.sound) this.sound.playError();
          this.showToast({
            title: "Cookies insuffisants",
            body: "Tu n'as pas encore assez pour cette amélioration.",
            variant: "warning",
            icon: "⚠️",
          });
        }
      });
    }

    // Boutons d'action génériques
    document.addEventListener("click", (ev) => {
      const actionBtn = ev.target.closest("[data-action]");
      if (!actionBtn) return;
      const action = actionBtn.getAttribute("data-action");
      switch (action) {
        case "toggle-theme":
          this._toggleTheme();
          break;
        case "toggle-sound":
          this._toggleSound();
          break;
        case "save-game":
          this._manualSave();
          break;
        case "export-save":
          this._exportSave();
          break;
        case "import-save":
          this._openImportModal();
          break;
        case "confirm-import":
          this._confirmImport();
          break;
        case "close-modal":
          this._closeImportModal();
          break;
        case "hard-reset":
          this._hardReset();
          break;
        default:
          break;
      }
    });

    // Fermer la modale en cliquant sur le backdrop
    if (this.dom.modalImport) {
      this.dom.modalImport.addEventListener("click", (ev) => {
        if (ev.target === this.dom.modalImport) {
          this._closeImportModal();
        }
      });
    }
  }

  render({ state, derived }) {
    if (!state || !derived) return;

    const bdeMetrics = computeBdeMetrics(state);

    this._renderTop(state, derived);
    this._renderBuildings(state);
    this._renderUpgrades(state);
    this._renderGoals(state);
    this._renderDashboard(state, derived, bdeMetrics);
    this._renderAchievements(state);

    this._syncSettingsUI(state);
  }

  _renderTop(state, derived) {
    if (this.dom.cookies) {
      this.dom.cookies.textContent = formatNumber(state.cookies);
    }
    if (this.dom.cps) {
      this.dom.cps.textContent = `${formatNumber(derived.cookiesPerSecond)} cookies / sec`;
    }
    if (this.dom.totalCookies) {
      this.dom.totalCookies.textContent = formatNumber(state.totalCookies);
    }
    if (this.dom.cpc) {
      this.dom.cpc.textContent = `+${formatNumber(derived.cookiesPerClick)}`;
    }
    if (this.dom.prestige) {
      this.dom.prestige.textContent = formatInteger(state.prestige || 0);
    }
    if (this.dom.playtime) {
      this.dom.playtime.textContent = this._formatPlaytime(state.stats.timePlayedSec || 0);
    }
  }

  _renderBuildings(state) {
    const container = this.dom.buildingsList;
    if (!container) return;
    container.innerHTML = "";

    let totalCpsFromBuildings = 0;

    for (const def of BUILDINGS) {
      const count = state.buildings[def.id]?.count || 0;
      const cost = this.game.getBuildingCost(def.id);
      const owned = count > 0;

      totalCpsFromBuildings += def.baseCps * count;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "list-item list-item-building";
      btn.setAttribute("data-building-id", def.id);

      const affordable = state.cookies >= cost;
      if (!affordable) {
        btn.classList.add("is-disabled");
      }

      btn.innerHTML = `
        <div class="list-item-main">
          <div class="list-item-title">${def.name}</div>
          <div class="list-item-sub">
            ${def.description}
          </div>
        </div>
        <div class="list-item-meta">
          <span class="list-item-cost">${formatNumber(cost)} cookies</span>
          <span class="list-item-count">${owned ? `x${count}` : "Aucun"}</span>
          <span class="list-item-tag">${def.tag}</span>
        </div>
      `;

      container.appendChild(btn);
    }

    if (this.dom.buildingsCps) {
      this.dom.buildingsCps.textContent = `${formatNumber(totalCpsFromBuildings)} cookies / sec`;
    }
  }

  _renderUpgrades(state) {
    const container = this.dom.upgradesList;
    if (!container) return;
    container.innerHTML = "";

    const available = this.game.getAvailableUpgrades();
    if (this.dom.upgradeEmpty) {
      this.dom.upgradeEmpty.style.display = available.length === 0 ? "block" : "none";
    }
    if (this.dom.upgradesAvailable) {
      this.dom.upgradesAvailable.textContent = `${available.length} disponibles`;
    }

    for (const up of available) {
      const affordable = state.cookies >= up.cost;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "list-item list-item-upgrade";
      if (!affordable) btn.classList.add("is-disabled");
      btn.setAttribute("data-upgrade-id", up.id);

      btn.innerHTML = `
        <div class="list-item-main">
          <div class="list-item-title">${up.name}</div>
          <div class="list-item-sub">${up.description}</div>
        </div>
        <div class="list-item-meta">
          <span class="list-item-cost">${formatNumber(up.cost)} cookies</span>
        </div>
      `;

      container.appendChild(btn);
    }
  }

  _renderGoals(state) {
    const container = this.dom.goalsList;
    if (!container) return;
    container.innerHTML = "";

    const total = state.totalCookies || 0;

    const sortedGoals = [...BDE_GOALS].sort((a, b) => (a.order || 0) - (b.order || 0));
    for (const goal of sortedGoals) {
      const completed = total >= goal.targetCookies;
      const progress = Math.min(1, total / goal.targetCookies);

      const li = document.createElement("li");
      li.className = "goal-item";
      if (completed) li.classList.add("is-complete");

      li.innerHTML = `
        <div class="goal-main">
          <div class="goal-title">${goal.icon} ${goal.label}</div>
          <div class="goal-sub">${goal.description}</div>
        </div>
        <div class="goal-side">
          <div class="goal-progress">
            <div class="goal-progress-fill" style="width: ${(progress * 100).toFixed(0)}%"></div>
          </div>
          <div class="goal-status">
            ${formatNumber(total)} / ${formatNumber(goal.targetCookies)} cookies
          </div>
        </div>
      `;

      container.appendChild(li);
    }
  }

  _renderDashboard(state, derived, bdeMetrics) {
    if (this.dom.bdeParties) {
      this.dom.bdeParties.textContent = formatInteger(bdeMetrics.partiesFinanced);
    }
    if (this.dom.bdeProjects) {
      this.dom.bdeProjects.textContent = formatInteger(bdeMetrics.projects);
    }
    if (this.dom.bdeGoodies) {
      this.dom.bdeGoodies.textContent = formatInteger(bdeMetrics.goodies);
    }
    if (this.dom.bdeRank) {
      this.dom.bdeRank.textContent = bdeMetrics.rankLabel;
    }
  }

  _renderAchievements(state) {
    const container = this.dom.achievementsList;
    if (!container) return;
    container.innerHTML = "";

    const all = ACHIEVEMENTS;
    let unlockedCount = 0;

    for (const a of all) {
      if (state.achievements[a.id]) unlockedCount += 1;
    }

    if (this.dom.achievementsCount) {
      this.dom.achievementsCount.textContent = `${unlockedCount} débloqués`;
    }
    if (this.dom.achievementEmpty) {
      this.dom.achievementEmpty.style.display = unlockedCount === 0 ? "block" : "none";
    }

    for (const a of all) {
      const unlocked = !!state.achievements[a.id];
      const div = document.createElement("div");
      div.className = "badge";
      if (!unlocked) div.classList.add("is-locked");
      div.setAttribute("data-achievement-id", a.id);

      div.innerHTML = `
        <div class="badge-icon">${a.icon}</div>
        <div class="badge-text">
          <div class="badge-title">${a.name}</div>
          <div class="badge-sub">${a.description}</div>
        </div>
      `;

      container.appendChild(div);
    }
  }

  _syncSettingsUI(state) {
    const theme = state.settings?.theme || "dark";
    const soundEnabled = state.settings?.soundEnabled ?? true;

    document.body.classList.toggle("theme-light", theme === "light");

    if (this.dom.themeIcon) {
      this.dom.themeIcon.textContent = theme === "light" ? "🌞" : "🌙";
    }
    if (this.dom.soundLabel) {
      this.dom.soundLabel.textContent = soundEnabled ? "Son activé" : "Son coupé";
    }
  }

  _toggleTheme() {
    const current = this.game.state.settings.theme || "dark";
    const next = current === "dark" ? "light" : "dark";
    this.game.state.settings.theme = next;
    this._syncSettingsUI(this.game.state);
  }

  _toggleSound() {
    const enabled = this.sound ? this.sound.toggle() : false;
    this.game.state.settings.soundEnabled = enabled;
    this._syncSettingsUI(this.game.state);

    this.showToast({
      title: enabled ? "Son activé" : "Son coupé",
      body: enabled
        ? "Les clics et récompenses seront accompagnés d'un feedback sonore."
        : "Tu peux réactiver le son à tout moment.",
      variant: "success",
      icon: enabled ? "🔊" : "🔇",
    });
  }

  _manualSave() {
    const ok = this.storage.save(this.game.state);
    if (ok) {
      this.showToast({
        title: "Partie sauvegardée",
        body: "Tes progrès sont enregistrés sur ce navigateur.",
        variant: "success",
        icon: "💾",
      });
    } else {
      this.showToast({
        title: "Erreur de sauvegarde",
        body: "Impossible d'enregistrer la partie. Vérifie ton navigateur.",
        variant: "danger",
        icon: "❌",
      });
    }
  }

  _exportSave() {
    const code = this.storage.exportToString(this.game.state);

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          this.showToast({
            title: "Sauvegarde copiée",
            body: "Le code de ta sauvegarde est dans le presse-papiers.",
            variant: "success",
            icon: "📋",
          });
        })
        .catch(() => {
          window.prompt("Copie manuellement ce code :", code);
        });
    } else {
      window.prompt("Copie manuellement ce code :", code);
    }
  }

  _openImportModal() {
    if (!this.dom.modalImport) return;
    this.dom.modalImport.classList.remove("hidden");
    if (this.dom.modalImportText) {
      this.dom.modalImportText.value = "";
      this.dom.modalImportText.focus();
    }
  }

  _closeImportModal() {
    if (!this.dom.modalImport) return;
    this.dom.modalImport.classList.add("hidden");
  }

  _confirmImport() {
    if (!this.dom.modalImportText) return;
    const text = this.dom.modalImportText.value.trim();
    if (!text) {
      this.showToast({
        title: "Champ vide",
        body: "Colle un code de sauvegarde avant d'importer.",
        variant: "warning",
        icon: "⚠️",
      });
      return;
    }

    const imported = this.storage.importFromString(text);
    if (!imported) {
      this.showToast({
        title: "Import impossible",
        body: "Le code ne semble pas valide.",
        variant: "danger",
        icon: "❌",
      });
      return;
    }

    this.game.hydrate(imported);
    this._closeImportModal();
    this.showToast({
      title: "Sauvegarde importée",
      body: "Bonne reprise de ta partie !",
      variant: "success",
      icon: "✅",
    });
  }

  _hardReset() {
    const confirmed = window.confirm(
      "Tu es sur le point de réinitialiser ta partie.\n" +
        "Tu obtiendras du prestige en fonction des cookies produits.\n\n" +
        "Continuer ?"
    );
    if (!confirmed) return;

    const gained = this.game.hardReset(true);
    if (gained > 0) {
      this.showToast({
        title: "Montée de prestige",
        body: `Tu gagnes ${formatInteger(gained)} points de prestige !`,
        variant: "success",
        icon: "⭐",
      });
      if (this.sound) this.sound.playAchievement();
    } else {
      this.showToast({
        title: "Réinitialisation",
        body: "Partie relancée. Produis plus de cookies pour obtenir du prestige.",
        variant: "warning",
        icon: "🔁",
      });
    }
  }

  showAchievementToast(achievement) {
    this.showToast({
      title: `Trophée : ${achievement.name}`,
      body: achievement.description,
      variant: "success",
      icon: achievement.icon || "🏅",
    });
    if (this.sound) this.sound.playAchievement();
  }

  showToast({ title, body, variant = "success", icon = "✨" }) {
    if (!this.dom.toastContainer) return;
    const el = document.createElement("div");
    el.className = `toast toast--${variant}`;

    el.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-body">${body}</div>
      </div>
    `;

    this.dom.toastContainer.appendChild(el);

    setTimeout(() => {
      el.style.animation = "toast-out 180ms ease-out forwards";
      setTimeout(() => {
        el.remove();
      }, 200);
    }, 2800);
  }

  _spawnFloatingClick(amount, clientX, clientY) {
    if (!this.dom.floatingLayer) return;
    const el = document.createElement("span");
    el.className = "floating-click";
    el.textContent = `+${formatInteger(amount)}`;

    const randomOffsetX = (Math.random() - 0.5) * 40;
    const randomOffsetY = (Math.random() - 0.5) * 10;

    el.style.left = `${clientX + randomOffsetX}px`;
    el.style.top = `${clientY + randomOffsetY}px`;

    this.dom.floatingLayer.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }

  _formatPlaytime(timeSec) {
    const totalSeconds = Math.floor(timeSec);
    const minutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const m = minutes % 60;

    if (hours > 0) {
      return `${hours} h ${m.toString().padStart(2, "0")} min`;
    }
    return `${minutes} min`;
  }
}
