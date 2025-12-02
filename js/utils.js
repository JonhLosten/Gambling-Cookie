// Utils génériques pour le jeu BDE Cookie Clicker

/**
 * Formate un nombre pour l'affichage (1 234 567 -> 1,23 M).
 * Reste lisible pour les très grands nombres.
 */
export function formatNumber(value) {
  if (!Number.isFinite(value)) return "0";
  const abs = Math.abs(value);
  if (abs < 1000) return Math.round(value).toString();

  const units = [
    { limit: 1e3, suffix: "" },
    { limit: 1e6, suffix: " k" },
    { limit: 1e9, suffix: " M" },
    { limit: 1e12, suffix: " Md" },
    { limit: 1e15, suffix: " B" },
    { limit: 1e18, suffix: " T" },
  ];

  let unit = units[0];
  for (const u of units) {
    if (abs >= u.limit) unit = u;
  }

  const scaled = value / unit.limit;
  const fixed =
    scaled < 10 ? scaled.toFixed(2) : scaled < 100 ? scaled.toFixed(1) : scaled.toFixed(0);
  return fixed.replace(".", ",") + unit.suffix;
}

/**
 * Formate un nombre court, toujours entier.
 */
export function formatInteger(value) {
  return formatNumber(Math.round(value));
}

/**
 * Clamp un nombre dans un intervalle.
 */
export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Retourne un nouvel objet profondément cloné (pour la sauvegarde).
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
