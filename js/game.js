// Coeur du jeu BDE Cookie Clicker : logique et état du jeu.
// Le code est volontairement modulaire et data-driven pour être facilement modifiable.

import { clamp, deepClone } from "./utils.js";

/**
 * Définition des bâtiments (thématisés BDE).
 * Pour en ajouter ou modifier, il suffit d'éditer ce tableau.
 */
export const BUILDINGS = [
  {
    id: "student",
    name: "Newf",
    description: "+0,1 cookie / sec. Ramène ses potes en soirée.",
    baseCost: 15,
    baseCps: 0.1,
    tag: "Départ",
    order: 1,
  },
  {
    id: "delegate",
    name: "FI3",
    description: "+1 cookie / sec. Relaye l'info du BDE dans sa promo.",
    baseCost: 100,
    baseCps: 1,
    tag: "Communication",
    order: 2,
  },
  {
    id: "club",
    name: "FI4 de merde",
    description: "+5 cookies / sec. Organise ateliers et tournois.",
    baseCost: 550,
    baseCps: 5,
    tag: "Clubs",
    order: 3,
  },
  {
    id: "Tonus",
    name: "Événement BDE",
    description: "+20 cookies / sec. Soirées, LAN, tournois esport...",
    baseCost: 2200,
    baseCps: 20,
    tag: "Événements",
    order: 4,
  },
  {
    id: "Meudeuh",
    name: "Partenaire entreprise",
    description: "+80 cookies / sec. Sponsoring et lots à gagner.",
    baseCost: 9000,
    baseCps: 80,
    tag: "Sponsors",
    order: 5,
  },
  {
    id: "FIP",
    name: "Festival étudiant",
    description: "+320 cookies / sec. Le campus entier s'en souvient.",
    baseCost: 38000,
    baseCps: 320,
    tag: "Grand projet",
    order: 6,
  },
];

const COST_MULTIPLIER = 1.15;

/**
 * Définition des améliorations.
 * Les effets sont appliqués dans computeDerived() en fonction du type.
 */
export const UPGRADES = [
  {
    id: "click-mouse-1",
    name: "Souris gamer RGB",
    description: "Double les cookies par clic.",
    cost: 100,
    type: "click-mult",
    multiplier: 2,
    unlock: (s) => s.stats.totalClicks >= 50,
    order: 1,
  },
  {
    id: "click-mouse-2",
    name: "Tapis ultra-glissant",
    description: "Les cookies par clic sont multipliés par 2.",
    cost: 1200,
    type: "click-mult",
    multiplier: 2,
    unlock: (s) => s.stats.totalClicks >= 500,
    order: 2,
  },
  {
    id: "click-bde-hype",
    name: "Hype BDE",
    description: "Les clics manuels génèrent 50 % de cookies en plus.",
    cost: 5000,
    type: "click-mult",
    multiplier: 1.5,
    unlock: (s) => s.totalCookies >= 20000,
    order: 3,
  },
  {
    id: "cps-coordination",
    name: "Coordination des pôles",
    description: "Les bâtiments produisent 25 % de cookies en plus.",
    cost: 2500,
    type: "cps-mult-global",
    multiplier: 1.25,
    unlock: (s) => s.stats.totalClicks >= 150 && totalBuildings(s) >= 10,
    order: 4,
  },
  {
    id: "cps-com",
    name: "Campagne Instagram",
    description: "Les étudiants motivés produisent 2x plus.",
    cost: 4500,
    type: "building-mult",
    buildingId: "student",
    multiplier: 2,
    unlock: (s) => (s.buildings.student?.count || 0) >= 15,
    order: 5,
  },
  {
    id: "cps-events",
    name: "Aftermovie de folie",
    description: "Les événements BDE produisent 2x plus.",
    cost: 22000,
    type: "building-mult",
    buildingId: "event",
    multiplier: 2,
    unlock: (s) => (s.buildings.event?.count || 0) >= 10,
    order: 6,
  },
  {
    id: "cps-sponsors",
    name: "Contrat premium",
    description: "Les partenaires entreprise produisent 2x plus.",
    cost: 60000,
    type: "building-mult",
    buildingId: "partner",
    multiplier: 2,
    unlock: (s) => (s.buildings.partner?.count || 0) >= 8,
    order: 7,
  },
  {
    id: "meta-prestige",
    name: "Légende du campus",
    description: "Gagne +5 % de production globale par niveau de prestige.",
    cost: 120000,
    type: "prestige-scale",
    multiplierPerPrestige: 0.05,
    unlock: (s) => s.prestige >= 1,
    order: 8,
  },
];

/**
 * Trophées / succès.
 */
export const ACHIEVEMENTS = [
  {
    id: "first-click",
    name: "Premier clic",
    description: "Clique sur le cookie pour la première fois.",
    icon: "🖱️",
    condition: (s) => s.stats.totalClicks >= 1,
  },
  {
    id: "hundred-clicks",
    name: "Cliqueur en série",
    description: "Atteins 100 clics.",
    icon: "🔥",
    condition: (s) => s.stats.totalClicks >= 100,
  },
  {
    id: "thousand-cookies",
    name: "Premiers fonds",
    description: "Produis 1 000 cookies au total.",
    icon: "💰",
    condition: (s) => s.totalCookies >= 1000,
  },
  {
    id: "ten-buildings",
    name: "Mini campus",
    description: "Possède au moins 10 bâtiments.",
    icon: "🏫",
    condition: (s) => totalBuildings(s) >= 10,
  },
  {
    id: "fifty-buildings",
    name: "Campus animé",
    description: "Possède au moins 50 bâtiments.",
    icon: "🏙️",
    condition: (s) => totalBuildings(s) >= 50,
  },
  {
    id: "first-prestige",
    name: "Reboot BDE",
    description: "Effectue ta première montée de prestige.",
    icon: "🔁",
    condition: (s) => s.prestige >= 1,
  },
];

/**
 * Crée l'état initial du jeu.
 */
export function createDefaultState() {
  const buildings = {};
  for (const def of BUILDINGS) {
    buildings[def.id] = { count: 0 };
  }

  return {
    cookies: 0,
    totalCookies: 0,
    totalResets: 0,
    prestige: 0,
    buildings,
    upgrades: {},
    achievements: {},
    stats: {
      totalClicks: 0,
      manualCookies: 0,
      timePlayedSec: 0,
    },
    settings: {
      soundEnabled: true,
      theme: "dark",
    },
  };
}

/**
 * Merge une sauvegarde avec l'état par défaut afin d'ajouter les nouveaux champs sans casser l'ancienne.
 */
export function mergeWithDefault(saved) {
  const base = createDefaultState();
  if (!saved || typeof saved !== "object") return base;

  const merged = {
    ...base,
    ...saved,
    stats: {
      ...base.stats,
      ...(saved.stats || {}),
    },
    settings: {
      ...base.settings,
      ...(saved.settings || {}),
    },
    buildings: {
      ...base.buildings,
      ...(saved.buildings || {}),
    },
    upgrades: {
      ...base.upgrades,
      ...(saved.upgrades || {}),
    },
    achievements: {
      ...base.achievements,
      ...(saved.achievements || {}),
    },
  };

  // S'assure que chaque bâtiment existe
  for (const def of BUILDINGS) {
    if (!merged.buildings[def.id]) merged.buildings[def.id] = { count: 0 };
  }

  return merged;
}

/**
 * Calcule les valeurs dérivées (cookies/sec, cookies/clic, etc.) à partir de l'état.
 */
export function computeDerived(state) {
  let baseClick = 1;
  let baseCps = 0;

  for (const def of BUILDINGS) {
    const count = state.buildings[def.id]?.count || 0;
    baseCps += def.baseCps * count;
  }

  let clickMultiplier = 1;
  let cpsMultiplier = 1;
  const buildingMultipliers = {};

  for (const def of BUILDINGS) {
    buildingMultipliers[def.id] = 1;
  }

  for (const up of UPGRADES) {
    if (!state.upgrades[up.id]) continue;

    switch (up.type) {
      case "click-mult":
        clickMultiplier *= up.multiplier;
        break;
      case "cps-mult-global":
        cpsMultiplier *= up.multiplier;
        break;
      case "building-mult":
        if (up.buildingId && buildingMultipliers[up.buildingId] != null) {
          buildingMultipliers[up.buildingId] *= up.multiplier;
        }
        break;
      case "prestige-scale": {
        const bonus = (up.multiplierPerPrestige || 0) * (state.prestige || 0);
        cpsMultiplier *= 1 + bonus;
        clickMultiplier *= 1 + bonus;
        break;
      }
      default:
        break;
    }
  }

  // Recalcule le cps avec les multiplicateurs de bâtiment
  let cpsWithMultipliers = 0;
  for (const def of BUILDINGS) {
    const count = state.buildings[def.id]?.count || 0;
    cpsWithMultipliers += def.baseCps * count * (buildingMultipliers[def.id] || 1);
  }

  const cps = cpsWithMultipliers * cpsMultiplier;
  const cpc = baseClick * clickMultiplier;

  return {
    cookiesPerClick: cpc,
    cookiesPerSecond: cps,
  };
}

function totalBuildings(state) {
  return Object.values(state.buildings || {}).reduce(
    (sum, b) => sum + (b.count || 0),
    0
  );
}

/**
 * Classe principale de gestion du jeu.
 */
export class Game {
  constructor(options = {}) {
    this.state = createDefaultState();
    this.derived = computeDerived(this.state);

    this.onStateChange = options.onStateChange || (() => {});
    this.onAchievementUnlocked = options.onAchievementUnlocked || (() => {});

    this._lastTickMs = performance.now();
    this._tickTimer = null;
  }

  /**
   * Démarre la boucle de jeu.
   */
  start() {
    if (this._tickTimer) return;
    this._lastTickMs = performance.now();
    this._tickTimer = setInterval(() => this._tick(), 1000 / 20); // 20 fois par seconde
  }

  stop() {
    if (this._tickTimer) {
      clearInterval(this._tickTimer);
      this._tickTimer = null;
    }
  }

  /**
   * Hydrate le jeu avec un état sauvegardé.
   */
  hydrate(savedState) {
    this.state = mergeWithDefault(savedState);
    this.derived = computeDerived(this.state);
    this._emitChange();
  }

  /**
   * Boucle principale : génère les cookies par seconde et met à jour le temps de jeu.
   */
  _tick() {
    const now = performance.now();
    let dt = (now - this._lastTickMs) / 1000;
    this._lastTickMs = now;

    // Clamp pour éviter de produire une quantité énorme après un long alt-tab
    dt = clamp(dt, 0, 60);

    const generated = this.derived.cookiesPerSecond * dt;
    if (generated > 0) {
      this.state.cookies += generated;
      this.state.totalCookies += generated;
    }

    this.state.stats.timePlayedSec += dt;

    this._afterStateUpdate();
  }

  /**
   * Gère un clic sur le cookie principal.
   */
  handleClick(count = 1) {
    const gain = this.derived.cookiesPerClick * count;
    this.state.cookies += gain;
    this.state.totalCookies += gain;
    this.state.stats.manualCookies += gain;
    this.state.stats.totalClicks += count;

    this._afterStateUpdate();
    return gain;
  }

  /**
   * Achat d'un bâtiment.
   */
  buyBuilding(id) {
    const def = BUILDINGS.find((b) => b.id === id);
    if (!def) return { ok: false, reason: "unknown" };

    const cost = this.getBuildingCost(id);
    if (this.state.cookies < cost) {
      return { ok: false, reason: "not-enough" };
    }

    this.state.cookies -= cost;
    const building = this.state.buildings[id] || { count: 0 };
    building.count += 1;
    this.state.buildings[id] = building;

    this._afterStateUpdate();
    return { ok: true, cost };
  }

  /**
   * Achat d'une amélioration.
   */
  buyUpgrade(id) {
    const def = UPGRADES.find((u) => u.id === id);
    if (!def) return { ok: false, reason: "unknown" };

    if (this.state.upgrades[id]) {
      return { ok: false, reason: "owned" };
    }

    const cost = def.cost;
    if (this.state.cookies < cost) {
      return { ok: false, reason: "not-enough" };
    }

    this.state.cookies -= cost;
    this.state.upgrades[id] = true;

    // Recalcule les dérivées immédiatement
    this.derived = computeDerived(this.state);
    this._checkAchievements();
    this._emitChange();

    return { ok: true, cost };
  }

  /**
   * Réinitialise entièrement la partie avec possibilité de gagner du prestige.
   * Retourne le nombre de points de prestige gagnés.
   */
  hardReset(withPrestige = true) {
    let gainedPrestige = 0;
    if (withPrestige) {
      gainedPrestige = this._computePrestigeGain();
      this.state.prestige = (this.state.prestige || 0) + gainedPrestige;
    }

    const settings = deepClone(this.state.settings);
    const prestige = this.state.prestige;
    const totalResets = (this.state.totalResets || 0) + 1;

    this.state = createDefaultState();
    this.state.settings = settings;
    this.state.prestige = prestige;
    this.state.totalResets = totalResets;

    this.derived = computeDerived(this.state);
    this._emitChange();

    return gainedPrestige;
  }

  /**
   * Estime les points de prestige gagnés sur une réinitialisation.
   * Formule volontairement simple pour rester lisible.
   */
  _computePrestigeGain() {
    const total = this.state.totalCookies || 0;
    if (total < 100000) return 0;
    return Math.floor(Math.pow(total / 100000, 0.6));
  }

  /**
   * Retourne les améliorations actuellement disponibles à l'achat.
   */
  getAvailableUpgrades() {
    return UPGRADES.filter(
      (u) => !this.state.upgrades[u.id] && u.unlock(this.state)
    ).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  getAllUpgrades() {
    return UPGRADES.slice();
  }

  getAllAchievements() {
    return ACHIEVEMENTS.slice();
  }

  getBuildingCost(id) {
    const def = BUILDINGS.find((b) => b.id === id);
    if (!def) return Infinity;
    const count = this.state.buildings[id]?.count || 0;
    return def.baseCost * Math.pow(COST_MULTIPLIER, count);
  }

  /**
   * Mise à jour centrale appelée après toute modification d'état.
   */
  _afterStateUpdate() {
    this.derived = computeDerived(this.state);
    this._checkAchievements();
    this._emitChange();
  }

  _checkAchievements() {
    for (const a of ACHIEVEMENTS) {
      if (this.state.achievements[a.id]) continue;
      if (a.condition(this.state)) {
        this.state.achievements[a.id] = true;
        this.onAchievementUnlocked(a);
      }
    }
  }

  _emitChange() {
    this.onStateChange({
      state: this.state,
      derived: this.derived,
    });
  }
}
