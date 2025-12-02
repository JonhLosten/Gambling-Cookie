# BDE Cookie Clicker

Un mini Cookie Clicker moderne, pensé pour être intégré sur le site de ton BDE.

- UI entièrement retravaillée (layout en 3 colonnes, dashboard BDE, toasts, feedback visuel).
- Code séparé en modules :
  - `js/game.js` : logique et équilibre du jeu (bâtiments, upgrades, prestige…)
  - `js/ui.js` : gestion de l’interface et des événements
  - `js/audio.js` : sons (clic, achats, trophées)
  - `js/storage.js` : sauvegarde localStorage + export/import
  - `js/bdeGoals.js` : objectifs et métriques liées au BDE
  - `js/utils.js` : fonctions utilitaires
- Sauvegarde automatique + boutons de sauvegarde manuelle / export / import.
- Système de prestige simple pour donner une boucle de méta-progression.
- Thème clair/sombre, son activable/désactivable.
- Dashboard orienté BDE : soirées financées, projets, goodies, rang étudiant.

## Lancer le jeu en local

1. Place le dossier dans n’importe quel serveur statique (ou utilise l’extension « Live Server » sur VS Code).
2. Ouvre `index.html` dans ton navigateur.
3. Clique sur le gros cookie pour commencer à produire des cookies.

> ⚠️ Les modules ES (`type="module"`) exigent un vrai serveur HTTP,
> l’ouverture directe du fichier `index.html` via `file://` peut ne pas fonctionner
> selon les navigateurs.

## Personnaliser pour ton BDE

### Couleurs & thèmes

Tout est centralisé dans `css/styles.css` via les variables CSS :

```css
:root {
  --color-bg: #050816;
  --color-accent: #ff8a3c;
  /* ... */
}
```

Adapte-les aux couleurs de ton BDE.

### Bâtiments

Les définitions des bâtiments se trouvent au début de `js/game.js` :

```js
export const BUILDINGS = [
  {
    id: "student",
    name: "Étudiant motivé",
    description: "+0,1 cookie / sec. Ramène ses potes en soirée.",
    baseCost: 15,
    baseCps: 0.1,
    tag: "Départ",
  },
  // ...
];
```

Tu peux :

- changer les noms, descriptions et coûts ;
- ajouter de nouveaux bâtiments en ajoutant une entrée dans le tableau.

### Améliorations (upgrades)

Toujours dans `js/game.js`, la constante `UPGRADES` définit les améliorations :

- `type: "click-mult"` → multiplie les cookies par clic.
- `type: "cps-mult-global"` → multiplie les cookies / sec de tous les bâtiments.
- `type: "building-mult"` → multiplie un bâtiment spécifique.
- `type: "prestige-scale"` → bonus basé sur le prestige.

Chaque upgrade a une fonction `unlock(state)` qui indique quand elle devient disponible.

### Objectifs BDE & dashboard

Dans `js/bdeGoals.js`, tu peux adapter :

- les différents objectifs (`BDE_GOALS`) ;
- le calcul des métriques BDE (`computeBdeMetrics`).

Ces valeurs alimentent le dashboard de la colonne de droite.

### Intégration avec ton site BDE

En bas de la page, dans le `<footer>`, tu trouveras des liens :

```html
<a href="#" class="footer-link" data-link="bde-events">Événements</a>
<a href="#" class="footer-link" data-link="bde-partners">Partenaires</a>
<a href="#" class="footer-link" data-link="bde-join">Rejoindre le BDE</a>
```

Remplace les `href="#"` par les URLs de ton site (page événements, partenaires, formulaire pour rejoindre le BDE, etc.).

## Sauvegarde & prestige

- Une sauvegarde automatique est réalisée régulièrement.
- Tu peux aussi sauvegarder manuellement, exporter et importer une partie.
- Le bouton « Réinitialiser » permet de faire une montée de prestige :
  - des points de prestige sont gagnés en fonction du total de cookies produits ;
  - le prestige augmente la production globale via certaines améliorations.

---

Le projet est pensé pour être lisible et évolutif : n’hésite pas à modifier les données
ou ajouter tes propres fonctionnalités (classement en ligne, intégration BDE, etc.).
