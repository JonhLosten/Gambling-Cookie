// Objectifs et métriques spécifiques au BDE

export const BDE_GOALS = [
  {
    id: "soiree-rentree",
    label: "Financer la soirée de rentrée",
    description: "Atteins 1 000 cookies pour débloquer ta première soirée.",
    targetCookies: 1000,
    icon: "🎉",
    order: 1,
  },
  {
    id: "goodies-starter-pack",
    label: "Lancer le pack de goodies",
    description: "Atteins 5 000 cookies pour financer les premiers t-shirts et tote bags.",
    targetCookies: 5000,
    icon: "👕",
    order: 2,
  },
  {
    id: "we-integration",
    label: "Week-end d'intégration",
    description: "Atteins 25 000 cookies pour organiser un week-end d'intégration mémorable.",
    targetCookies: 25000,
    icon: "🏕️",
    order: 3,
  },
  {
    id: "travel-ski",
    label: "Voyage au ski",
    description: "Atteins 100 000 cookies pour financer un voyage au ski.",
    targetCookies: 100000,
    icon: "🎿",
    order: 4,
  },
  {
    id: "gala-bde",
    label: "Gala du BDE",
    description: "Atteins 500 000 cookies pour organiser un gala digne d'une école de prestige.",
    targetCookies: 500000,
    icon: "🏛️",
    order: 5,
  },
];

/**
 * Calcule des métriques fun liées au BDE à partir de la progression du joueur.
 */
export function computeBdeMetrics(state) {
  const total = state?.totalCookies || 0;
  const prestige = state?.prestige || 0;

  const partiesFinanced = Math.floor(total / 2500);
  const projects = Math.floor(total / 7000);
  const goodies = Math.floor(total / 500);

  return {
    partiesFinanced,
    projects,
    goodies,
    rankLabel: getRankLabel(prestige),
  };
}

function getRankLabel(prestige) {
  if (prestige >= 10) return "Alumni BDE";
  if (prestige >= 7) return "Membre du bureau";
  if (prestige >= 4) return "Responsable pôle";
  if (prestige >= 2) return "Membre actif";
  if (prestige >= 1) return "Équipier";
  return "Licence 1";
}
