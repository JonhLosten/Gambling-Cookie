// Gestion de la sauvegarde localStorage pour le BDE Cookie Clicker

const STORAGE_KEY = "bde-cookie-clicker-save-v1";

/**
 * Sauvegarde l'état brut du jeu.
 */
export function save(state) {
  try {
    const payload = {
      version: 1,
      timestamp: Date.now(),
      state,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch (err) {
    console.error("Erreur lors de la sauvegarde", err);
    return false;
  }
}

/**
 * Charge l'état du jeu depuis le stockage local.
 */
export function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed.state || null;
  } catch (err) {
    console.error("Erreur lors du chargement", err);
    return null;
  }
}

/**
 * Supprime la sauvegarde.
 */
export function clear() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("Erreur lors de la suppression de la sauvegarde", err);
  }
}

/**
 * Génère une chaîne exportable (base64) pour partager une sauvegarde.
 */
export function exportToString(state) {
  const json = JSON.stringify({ v: 1, s: state });
  return btoa(unescape(encodeURIComponent(json)));
}

/**
 * Importe une sauvegarde depuis une chaîne exportée.
 */
export function importFromString(str) {
  try {
    const json = decodeURIComponent(escape(atob(str.trim())));
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed.s || null;
  } catch (err) {
    console.error("Impossible d'importer la sauvegarde", err);
    return null;
  }
}
