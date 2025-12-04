import React, {
    useEffect,
    useMemo,
    useState,
    useCallback,
} from 'react';
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    limit,
    onSnapshot,
    doc,
    setDoc,
    getDoc,
} from 'firebase/firestore';
import {
    auth,
    db,
} from './firebase';
import {
    User,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile,
} from 'firebase/auth';
import './App.css';

type Theme = 'light' | 'dark';

type UpgradeId =
    | 'cursor'
    | 'grandma'
    | 'bakery'
    | 'factory'
    | 'portal'
    | 'golden-hand'
    | 'time-machine'
    | 'cookie-farm'
    | 'bank'
    | 'cookie-mine'
    | 'sky-fortress'
    | 'visual-confetti'
    | 'visual-neon'
    | 'visual-rainbow'
    // nouveaux upgrades de clic manuel :
    | 'silk-touch'
    | 'gold-glove'
    | 'quantum-finger'
    | 'crit-click'
    | 'click-frenzy';

type CaseId = 'basic' | 'rare' | 'legendary';

interface UpgradeDefinition {
    id: UpgradeId;
    name: string;
    description: string;
    baseCost: number;
    cps: number;
    clickBonus: number; // bonus plat par clic
    unlockAt: number;
    emoji: string;
    // Champs optionnels pour les upgrades avancés de clic :
    clickPercentOfCps?: number; // ex : 0.01 = 1% du CPS par clic
    critChanceBonus?: number; // +0.05 = +5% de chance de crit
    critMultiplier?: number; // multiplicateur de crit (x5, etc.)
    frenzyDurationSeconds?: number; // durée d’un buff de frénésie
    frenzyClickMultiplier?: number; // multiplicateur de clic pendant frénésie
}

interface CaseDefinition {
    id: CaseId;
    name: string;
    description: string;
    cost: number;
    emoji: string;
    minMultiplier: number;
    maxMultiplier: number;
    jackpotMultiplier: number;
    jackpotChance: number;
    failMultiplier: number;
}

interface WheelSegment {
    id: string;
    label: string;
    description: string;
    weight: number;
    kind: 'cookies' | 'buff';
    cookiesMultiplier: number;
    buffCpsMultiplier?: number;
    buffClickMultiplier?: number;
    buffDurationSeconds?: number;
}

interface ActiveBuff {
    id: string;
    label: string;
    multiplierCps: number;
    multiplierClick: number;
    expiresAt: number;
}

interface GamblingStats {
    casesOpened: number;
    spinsPlayed: number;
    biggestWin: number;
    highRollPlays: number;
    allInCount: number;
    // nouveaux champs pour succès avancés :
    consecutiveLosses: number;
    maxConsecutiveLosses: number;
    allInLosses: number;
    jackpotStreak: number;
    maxJackpotStreak: number;
}

interface LeaderboardEntry {
    id: string;
    playerName: string;
    amount: number;
    date: string; // ISO
    source: 'wheel' | 'case' | 'highroll';
}

interface GameState {
    cookies: number;
    totalCookies: number;
    upgrades: Record<UpgradeId, number>;
    theme: Theme;
    activeBuffs: ActiveBuff[];
    gamblingStats: GamblingStats;
    playerName: string;
    leaderboard: LeaderboardEntry[];
    // nouveaux compteurs pour succès / équilibrage :
    totalClicks: number;
    totalUpgradesPurchased: number;
}

interface Achievement {
    id: string;
    label: string;
    description: string;
    check: (state: GameState, effectiveCps: number) => boolean;
}

interface LastWheelResult {
    label: string;
    delta: number;
    spent: number;
    isJackpot: boolean;
    buffLabel?: string;
}

interface LastCaseResult {
    caseId: CaseId;
    caseName: string;
    reward: number;
    spent: number;
    isJackpot: boolean;
    isLoss: boolean;
}

interface LastHighRollResult {
    bet: number;
    delta: number;
    outcome: 'win' | 'lose';
    allIn: boolean;
}

type OverlayState =
    | null
    | { kind: 'wheel'; result: LastWheelResult }
    | { kind: 'case'; result: LastCaseResult }
    | { kind: 'highroll'; result: LastHighRollResult };

interface GlobalEntry {
    id: string;
    name: string;
    score: number;
    createdAt?: Date;
}

const STORAGE_KEY_PREFIX = 'imtmortels-cookie-clicker-v6';
const COOKIE_KEY_PREFIX = 'imtmortels_cookie_save';
const LAST_SYNCED_BEST_KEY = 'imtmortels_last_synced_best';

const MAX_REASONABLE_COOKIES = 1e15;

const MIN_WHEEL_BET = 100;

const storageKeyForUser = (uid: string) => `${STORAGE_KEY_PREFIX}_${uid}`;
const cookieKeyForUser = (uid: string) => `${COOKIE_KEY_PREFIX}_${uid}`;

const UPGRADE_DEFINITIONS: UpgradeDefinition[] = [
    // AUTOS / BUILDINGS
    {
        id: 'cursor',
        name: 'Curseur automatique',
        description: 'Clique tout seul doucement pour toi.',
        baseCost: 15,
        cps: 0.1,
        clickBonus: 0,
        unlockAt: 0,
        emoji: '🖱️',
    },
    {
        id: 'grandma',
        name: 'Mamie pâtissière',
        description: 'Une mamie prépare des cookies à la chaîne.',
        baseCost: 100,
        cps: 1,
        clickBonus: 0,
        unlockAt: 50,
        emoji: '👵',
    },
    {
        id: 'bakery',
        name: 'Boulangerie',
        description: 'Ta propre boulangerie de quartier.',
        baseCost: 1_100,
        cps: 8,
        clickBonus: 0,
        unlockAt: 500,
        emoji: '🏪',
    },
    {
        id: 'cookie-farm',
        name: 'Ferme à cookies',
        description: 'Des champs entiers dédiés aux cookies.',
        baseCost: 20_000,
        cps: 60,
        clickBonus: 0,
        unlockAt: 5_000,
        emoji: '🌾',
    },
    {
        id: 'factory',
        name: 'Usine à cookies',
        description: 'Industrialise totalement la production.',
        baseCost: 300_000,
        cps: 400,
        clickBonus: 0,
        unlockAt: 50_000,
        emoji: '🏭',
    },
    {
        id: 'bank',
        name: 'Banque à cookies',
        description: 'Les intérêts composés… en cookies.',
        baseCost: 3_000_000,
        cps: 3_000,
        clickBonus: 0,
        unlockAt: 300_000,
        emoji: '🏦',
    },
    {
        id: 'cookie-mine',
        name: 'Mine de cookies lunaires',
        description: 'Exploite des cookies directement sur la lune.',
        baseCost: 40_000_000,
        cps: 70_000,
        clickBonus: 0,
        unlockAt: 3_000_000,
        emoji: '🌙',
    },
    {
        id: 'sky-fortress',
        name: 'Forteresse céleste',
        description: 'Une ville flottante dédiée aux cookies.',
        baseCost: 300_000_000,
        cps: 800_000,
        clickBonus: 0,
        unlockAt: 20_000_000,
        emoji: '🏰',
    },
    {
        id: 'portal',
        name: 'Portail dimensionnel',
        description: 'Ouvre un portail vers le monde des cookies.',
        baseCost: 1_500_000_000,
        cps: 5_000_000,
        clickBonus: 0,
        unlockAt: 200_000_000,
        emoji: '🌀',
    },
    {
        id: 'time-machine',
        name: 'Machine à remonter le temps',
        description: 'Produisait déjà des cookies hier.',
        baseCost: 15_000_000_000,
        cps: 55_000_000,
        clickBonus: 0,
        unlockAt: 2_000_000_000,
        emoji: '⌛',
    },
    // UPGRADE HISTORIQUE DE CLIC
    {
        id: 'golden-hand',
        name: 'Doigt en or',
        description: 'Chaque clic vaut davantage.',
        baseCost: 300,
        cps: 0,
        clickBonus: 1,
        unlockAt: 150,
        emoji: '☝️',
    },
    // NOUVELLES AMÉLIORATIONS DE CLIC MANUEL
    {
        id: 'silk-touch',
        name: 'Toucher de soie',
        description: '+1 cookie par clic. Simple et efficace.',
        baseCost: 500,
        cps: 0,
        clickBonus: 1,
        unlockAt: 300,
        emoji: '🧤',
    },
    {
        id: 'gold-glove',
        name: 'Gant doré',
        description: '+5 cookies par clic.',
        baseCost: 5_000,
        cps: 0,
        clickBonus: 5,
        unlockAt: 2_000,
        emoji: '🥊',
    },
    {
        id: 'quantum-finger',
        name: 'Doigt quantique',
        description: 'Ton clic vaut aussi 1% de ton CPS.',
        baseCost: 50_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 25_000,
        emoji: '🧬',
        clickPercentOfCps: 0.01,
    },
    {
        id: 'crit-click',
        name: 'Clic critique',
        description: '5% de chance par niveau de faire un clic x5.',
        baseCost: 80_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 40_000,
        emoji: '💥',
        critChanceBonus: 0.05,
        critMultiplier: 5,
    },
    {
        id: 'click-frenzy',
        name: 'Frénésie de clic',
        description: 'Active un buff temporaire de clic surpuissant.',
        baseCost: 150_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 75_000,
        emoji: '⚡',
        frenzyDurationSeconds: 25,
        frenzyClickMultiplier: 6,
    },
    // Cosmétiques
    {
        id: 'visual-confetti',
        name: 'Confettis festifs',
        description: 'Confettis sur les gros gains (cosmétique).',
        baseCost: 60_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 20_000,
        emoji: '🎊',
    },
    {
        id: 'visual-neon',
        name: 'Néons du casino',
        description: 'Glow néon sur les cartes du casino (cosmétique).',
        baseCost: 150_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 40_000,
        emoji: '💡',
    },
    {
        id: 'visual-rainbow',
        name: 'Cookie arc-en-ciel',
        description: 'Le cookie et la roue deviennent arc-en-ciel.',
        baseCost: 450_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 150_000,
        emoji: '🌈',
    },
];

// Catégories d'améliorations pour le menu à 3 onglets
type UpgradeCategoryId = 'auto' | 'click' | 'cosmetic';

const UPGRADE_CATEGORIES: {
    id: UpgradeCategoryId;
    label: string;
    description: string;
}[] = [
        {
            id: 'auto',
            label: 'Production automatique',
            description: 'Génère des cookies en continu.',
        },
        {
            id: 'click',
            label: 'Clic manuel',
            description: 'Rend chaque clic plus puissant.',
        },
        {
            id: 'cosmetic',
            label: 'Cosmétiques',
            description: 'Uniquement visuel, pour styliser ton cookie.',
        },
    ];

// Répartition des upgrades par catégorie (en fonction des stats)
const UPGRADE_DEFINITIONS_BY_CATEGORY: Record<
    UpgradeCategoryId,
    UpgradeDefinition[]
> = {
    auto: [],
    click: [],
    cosmetic: [],
};

for (const upgrade of UPGRADE_DEFINITIONS) {
    if (upgrade.cps > 0) {
        UPGRADE_DEFINITIONS_BY_CATEGORY.auto.push(upgrade);
    } else if (upgrade.clickBonus > 0) {
        UPGRADE_DEFINITIONS_BY_CATEGORY.click.push(upgrade);
    } else {
        UPGRADE_DEFINITIONS_BY_CATEGORY.cosmetic.push(upgrade);
    }
}

const CASE_DEFINITIONS: CaseDefinition[] = [
    {
        id: 'basic',
        name: 'Boîte surprise',
        description: 'Petit loot sympa, parfait pour commencer.',
        cost: 1_000,
        emoji: '📦',
        minMultiplier: 0.9,
        maxMultiplier: 2.2,
        jackpotMultiplier: 10,
        jackpotChance: 0.03,
        failMultiplier: 0.25,
    },
    {
        id: 'rare',
        name: 'Caisse rare',
        description: 'Récompenses plus grosses, mais plus risquées.',
        cost: 7_500,
        emoji: '🧰',
        minMultiplier: 0.8,
        maxMultiplier: 3.0,
        jackpotMultiplier: 16,
        jackpotChance: 0.05,
        failMultiplier: 0.22,
    },
    {
        id: 'legendary',
        name: 'Coffre légendaire',
        description: 'Pour les vrais parieurs : gros risques, gros gains.',
        cost: 50_000,
        emoji: '🗝️',
        minMultiplier: 0.7,
        maxMultiplier: 3.8,
        jackpotMultiplier: 24,
        jackpotChance: 0.06,
        failMultiplier: 0.2,
    },
];

// Roue rééquilibrée : espérance légèrement négative (~0.85-0.9)
const WHEEL_SEGMENTS: WheelSegment[] = [
    {
        id: 'lose-all',
        label: 'Tout perdu',
        description: 'Tu perds ta mise entière.',
        weight: 32,
        kind: 'cookies',
        cookiesMultiplier: 0,
    },
    {
        id: 'lose-half',
        label: '-50 %',
        description: 'Tu ne récupères que la moitié de ta mise.',
        weight: 18,
        kind: 'cookies',
        cookiesMultiplier: 0.5,
    },
    {
        id: 'refund',
        label: 'Remboursé',
        description: 'Tu récupères ta mise.',
        weight: 20,
        kind: 'cookies',
        cookiesMultiplier: 1,
    },
    {
        id: 'small-win',
        label: '+50 %',
        description: 'Petit bénéfice sur ta mise.',
        weight: 14,
        kind: 'cookies',
        cookiesMultiplier: 1.5,
    },
    {
        id: 'double',
        label: 'x2',
        description: 'Tu doubles ta mise.',
        weight: 8,
        kind: 'cookies',
        cookiesMultiplier: 2,
    },
    {
        id: 'jackpot',
        label: 'Jackpot',
        description: 'Énorme pluie de cookies !',
        weight: 2,
        kind: 'cookies',
        cookiesMultiplier: 6,
    },
    {
        id: 'rush-cps',
        label: 'Rush de production',
        description: 'CPS x2 pendant 30 secondes.',
        weight: 5,
        kind: 'buff',
        cookiesMultiplier: 1,
        buffCpsMultiplier: 2,
        buffClickMultiplier: 1,
        buffDurationSeconds: 30,
    },
    {
        id: 'rush-click',
        label: 'Doigt en feu',
        description: 'Cookies par clic x3 pendant 20 secondes.',
        weight: 5,
        kind: 'buff',
        cookiesMultiplier: 1,
        buffCpsMultiplier: 1,
        buffClickMultiplier: 3,
        buffDurationSeconds: 20,
    },
];

const ACHIEVEMENTS: Achievement[] = [
    // Progression cookies
    {
        id: 'first-cookie',
        label: 'Premier cookie !',
        description: 'Clique sur le cookie pour la première fois.',
        check: (state) => state.totalCookies >= 1,
    },
    {
        id: 'hundred-cookies',
        label: 'Petit gourmand',
        description: 'Atteins 100 cookies au total.',
        check: (state) => state.totalCookies >= 100,
    },
    {
        id: 'thousand-cookies',
        label: 'Gros gourmand',
        description: 'Atteins 1 000 cookies au total.',
        check: (state) => state.totalCookies >= 1_000,
    },
    {
        id: 'ten-k-cookies',
        label: 'Maître pâtissier',
        description: 'Atteins 10 000 cookies au total.',
        check: (state) => state.totalCookies >= 10_000,
    },
    {
        id: 'million-cookies',
        label: 'Millionnaire en cookies',
        description: 'Atteins 1 000 000 cookies au total.',
        check: (state) => state.totalCookies >= 1_000_000,
    },
    {
        id: 'billion-cookies',
        label: 'Multi-milliardaire',
        description: 'Atteins 1 000 000 000 cookies au total.',
        check: (state) => state.totalCookies >= 1_000_000_000,
    },
    // Cliques totaux
    {
        id: 'click-100',
        label: 'Tapoteur',
        description: 'Clique 100 fois sur le cookie.',
        check: (state) => (state.totalClicks ?? 0) >= 100,
    },
    {
        id: 'click-1k',
        label: 'Mitraillette à clics',
        description: 'Clique 1 000 fois sur le cookie.',
        check: (state) => (state.totalClicks ?? 0) >= 1_000,
    },
    {
        id: 'click-100k',
        label: 'Doigt bionique',
        description: 'Clique 100 000 fois sur le cookie.',
        check: (state) => (state.totalClicks ?? 0) >= 100_000,
    },
    // Upgrades
    {
        id: 'first-upgrade',
        label: 'Premier investissement',
        description: 'Achète une amélioration.',
        check: (state) =>
            Object.values(state.upgrades).some((quantity) => quantity > 0),
    },
    {
        id: 'upgrade-collector',
        label: 'Collectionneur',
        description: 'Achète au moins 10 améliorations.',
        check: (state) =>
            Object.values(state.upgrades).reduce(
                (sum, q) => sum + (q || 0),
                0,
            ) >= 10,
    },
    {
        id: 'upgrade-tycoon',
        label: 'Tycoon des upgrades',
        description: 'Achète au moins 50 améliorations.',
        check: (state) =>
            Object.values(state.upgrades).reduce(
                (sum, q) => sum + (q || 0),
                0,
            ) >= 50,
    },
    {
        id: 'upgrade-mogul',
        label: 'Mogul du clic',
        description: 'Achète au moins 10 upgrades de clic manuel.',
        check: (state) => {
            const ids: UpgradeId[] = [
                'golden-hand',
                'silk-touch',
                'gold-glove',
                'quantum-finger',
                'crit-click',
                'click-frenzy',
            ];
            const total = ids.reduce(
                (sum, id) => sum + (state.upgrades[id] ?? 0),
                0,
            );
            return total >= 10;
        },
    },
    // CPS
    {
        id: 'ten-cps',
        label: 'Production automatique',
        description: 'Atteins 10 cookies par seconde.',
        check: (_state, effectiveCps) => effectiveCps >= 10,
    },
    {
        id: 'hundred-cps',
        label: 'Usine en marche',
        description: 'Atteins 100 cookies par seconde.',
        check: (_state, effectiveCps) => effectiveCps >= 100,
    },
    {
        id: 'thousand-cps',
        label: 'Dimension industrielle',
        description: 'Atteins 1 000 cookies par seconde.',
        check: (_state, effectiveCps) => effectiveCps >= 1_000,
    },
    // Casino – roue
    {
        id: 'first-spin',
        label: 'Parieur en herbe',
        description: 'Joue une fois à la roue de la chance.',
        check: (state) => state.gamblingStats.spinsPlayed >= 1,
    },
    {
        id: 'spin-10',
        label: 'Tournant sérieux',
        description: 'Joue 10 fois à la roue.',
        check: (state) => state.gamblingStats.spinsPlayed >= 10,
    },
    {
        id: 'spin-50',
        label: 'Fan de la roue',
        description: 'Joue 50 fois à la roue.',
        check: (state) => state.gamblingStats.spinsPlayed >= 50,
    },
    // Casino – lootboxes
    {
        id: 'first-case',
        label: 'Ouvre-boîte',
        description: 'Ouvre ta toute première caisse.',
        check: (state) => state.gamblingStats.casesOpened >= 1,
    },
    {
        id: 'case-addict',
        label: 'Accro aux lootboxes',
        description: 'Ouvre 10 caisses.',
        check: (state) => state.gamblingStats.casesOpened >= 10,
    },
    {
        id: 'case-50',
        label: 'Ouverture compulsive',
        description: 'Ouvre 50 caisses.',
        check: (state) => state.gamblingStats.casesOpened >= 50,
    },
    // High roll
    {
        id: 'high-roller',
        label: 'Gros coup',
        description:
            'Gagne au moins 50 000 cookies en un seul coup de chance.',
        check: (state) => state.gamblingStats.biggestWin >= 50_000,
    },
    {
        id: 'all-in',
        label: 'All-in courageux',
        description: 'Tente au moins un all-in.',
        check: (state) => state.gamblingStats.allInCount >= 1,
    },
    {
        id: 'all-in-lost',
        label: 'All-in suicidaire',
        description: 'Perdre au moins un all-in.',
        check: (state) => state.gamblingStats.allInLosses >= 1,
    },
    // Streaks
    {
        id: 'loss-streak-5',
        label: 'Série noire',
        description: 'Perds 5 coups de casino d’affilée.',
        check: (state) => state.gamblingStats.maxConsecutiveLosses >= 5,
    },
    {
        id: 'loss-streak-10',
        label: 'Malédiction du casino',
        description: 'Perds 10 coups de casino d’affilée.',
        check: (state) => state.gamblingStats.maxConsecutiveLosses >= 10,
    },
    {
        id: 'jackpot-streak-2',
        label: 'Double jackpot',
        description: 'Réalise 2 jackpots casino consécutifs.',
        check: (state) => state.gamblingStats.maxJackpotStreak >= 2,
    },
    // Patience / challenge
    {
        id: 'patience',
        label: 'Patience infinie',
        description:
            'Atteins 1 000 000 de cookies sans jamais aller au casino.',
        check: (state) =>
            state.totalCookies >= 1_000_000 &&
            state.gamblingStats.spinsPlayed === 0 &&
            state.gamblingStats.casesOpened === 0 &&
            state.gamblingStats.highRollPlays === 0,
    },
    {
        id: 'challenge-clean',
        label: 'Casino maîtrisé',
        description:
            'Gagne au moins 100 000 cookies au total en casino sans ruiner ton stock (jamais moins de 0).',
        check: (state) =>
            state.gamblingStats.biggestWin >= 100_000 &&
            state.cookies > 0,
    },
    {
        id: 'total-ruin',
        label: 'Ruine totale',
        description:
            'Perds tout au casino après avoir gagné au moins 50 000 cookies.',
        check: (state) =>
            state.cookies <= 0 && state.gamblingStats.biggestWin >= 50_000,
    },
];

const DEFAULT_PLAYER_NAME = 'Invité';

const sanitizePlayerName = (rawName?: string | null): string => {
    const cleaned = (rawName ?? '')
        .replace(/[^\p{L}\p{N} _-]/gu, '')
        .replace(/\s+/g, ' ')
        .trim();
    const trimmed = cleaned.slice(0, 16);
    return trimmed || DEFAULT_PLAYER_NAME;
};

const defaultGameState: GameState = {
    cookies: 0,
    totalCookies: 0,
    upgrades: {
        cursor: 0,
        grandma: 0,
        bakery: 0,
        factory: 0,
        portal: 0,
        'golden-hand': 0,
        'time-machine': 0,
        'cookie-farm': 0,
        bank: 0,
        'cookie-mine': 0,
        'sky-fortress': 0,
        'visual-confetti': 0,
        'visual-neon': 0,
        'visual-rainbow': 0,
        'silk-touch': 0,
        'gold-glove': 0,
        'quantum-finger': 0,
        'crit-click': 0,
        'click-frenzy': 0,
    },
    theme: 'dark',
    activeBuffs: [],
    gamblingStats: {
        casesOpened: 0,
        spinsPlayed: 0,
        biggestWin: 0,
        highRollPlays: 0,
        allInCount: 0,
        consecutiveLosses: 0,
        maxConsecutiveLosses: 0,
        allInLosses: 0,
        jackpotStreak: 0,
        maxJackpotStreak: 0,
    },
    playerName: DEFAULT_PLAYER_NAME,
    leaderboard: [],
    totalClicks: 0,
    totalUpgradesPurchased: 0,
};

function formatNumber(value: number, decimals = 1): string {
    if (!Number.isFinite(value)) return '0';

    if (Math.abs(value) < 1000) {
        const rounded =
            Math.abs(value) < 10 ? value.toFixed(decimals) : value.toFixed(0);
        return rounded.replace('.', ',');
    }

    const units = ['', 'k', 'M', 'Md', 'T'];
    let unitIndex = 0;
    let n = value;

    while (Math.abs(n) >= 1000 && unitIndex < units.length - 1) {
        n /= 1000;
        unitIndex += 1;
    }

    return `${n.toFixed(decimals).replace('.', ',')} ${units[unitIndex]}`;
}

function pickWeighted<T extends { weight: number }>(items: T[]): T {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    const roll = Math.random() * totalWeight;
    let acc = 0;
    for (const item of items) {
        acc += item.weight;
        if (roll <= acc) {
            return item;
        }
    }
    return items[items.length - 1];
}

function computeBaseCps(state: GameState): number {
    return UPGRADE_DEFINITIONS.reduce((acc, def) => {
        const quantity = state.upgrades[def.id] ?? 0;
        return acc + def.cps * quantity;
    }, 0);
}

function computeEffectiveCps(state: GameState): number {
    const base = computeBaseCps(state);
    if (state.activeBuffs.length === 0) return base;
    const multiplier = state.activeBuffs.reduce(
        (acc, buff) => acc * (buff.multiplierCps || 1),
        1,
    );
    return base * multiplier;
}

function computeCookiesPerClick(state: GameState): number {
    const flatBonus =
        1 +
        UPGRADE_DEFINITIONS.reduce((acc, def) => {
            const quantity = state.upgrades[def.id] ?? 0;
            return acc + def.clickBonus * quantity;
        }, 0);

    const cps = computeEffectiveCps(state);

    const percentBonus = UPGRADE_DEFINITIONS.reduce((acc, def) => {
        const quantity = state.upgrades[def.id] ?? 0;
        if (!def.clickPercentOfCps) return acc;
        return acc + def.clickPercentOfCps * quantity;
    }, 0);

    let baseClick = flatBonus + cps * percentBonus;

    if (state.activeBuffs.length > 0) {
        const clickMultiplier = state.activeBuffs.reduce(
            (acc, buff) => acc * (buff.multiplierClick || 1),
            1,
        );
        baseClick *= clickMultiplier;
    }

    return baseClick;
}

function readCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`));
    return match ? decodeURIComponent(match.split('=')[1]) : null;
}

function safeMergeGameState(rawState: unknown): GameState {
    const parsed = rawState as Partial<GameState> & { lastSaved?: number };
    const sanitizedUpgrades = Object.entries(parsed.upgrades ?? {}).reduce(
        (acc, [key, value]) => {
            if (!Number.isFinite(value)) return acc;
            const numeric = Math.max(0, Math.floor(value));
            acc[key as UpgradeId] = numeric;
            return acc;
        },
        { ...defaultGameState.upgrades },
    );

    const clampNumber = (value: number, max = MAX_REASONABLE_COOKIES) =>
        Math.min(max, Math.max(0, Number.isFinite(value) ? value : 0));

    const merged: GameState = {
        ...defaultGameState,
        ...parsed,
        cookies: clampNumber(parsed.cookies ?? defaultGameState.cookies),
        totalCookies: clampNumber(
            parsed.totalCookies ?? defaultGameState.totalCookies,
        ),
        upgrades: sanitizedUpgrades,
        activeBuffs: (parsed.activeBuffs ?? []).filter(
            (buff) => buff.expiresAt > Date.now() && buff.expiresAt < Date.now() + 86_400_000,
        ),
        gamblingStats: {
            ...defaultGameState.gamblingStats,
            ...(parsed.gamblingStats ?? {}),
        },
        playerName: sanitizePlayerName(
            parsed.playerName ?? defaultGameState.playerName,
        ),
        leaderboard: (parsed.leaderboard ?? []).slice(0, 50),
        totalClicks: clampNumber(parsed.totalClicks ?? 0, 1e9),
        totalUpgradesPurchased: clampNumber(
            parsed.totalUpgradesPurchased ?? 0,
            1e9,
        ),
    };

    const lastSaved = (rawState as { lastSaved?: number }).lastSaved;
    if (typeof lastSaved === 'number') {
        const elapsedSeconds = Math.min(
            86_400,
            Math.max(0, (Date.now() - lastSaved) / 1000),
        );
        const cps = computeBaseCps(merged);
        const gained = Math.max(0, Math.min(MAX_REASONABLE_COOKIES, cps * elapsedSeconds));

        return {
            ...merged,
            cookies: clampNumber(merged.cookies + gained),
            totalCookies: clampNumber(merged.totalCookies + gained),
            activeBuffs: merged.activeBuffs.filter(
                (buff) => buff.expiresAt > Date.now(),
            ),
        };
    }

    return merged;
}

function loadGameState(uid: string | null): GameState {
    if (typeof window === 'undefined' || !uid) return { ...defaultGameState };

    const storageKey = storageKeyForUser(uid);
    const cookieKey = cookieKeyForUser(uid);

    try {
        const local = window.localStorage.getItem(storageKey);
        if (local) {
            const parsed = JSON.parse(local);
            return safeMergeGameState(parsed);
        }
    } catch (error) {
        console.error('Erreur de chargement depuis localStorage :', error);
    }

    try {
        const cookieValue = readCookie(cookieKey);
        if (cookieValue) {
            const parsed = JSON.parse(cookieValue);
            return safeMergeGameState(parsed);
        }
    } catch (error) {
        console.error('Erreur de chargement depuis cookie :', error);
    }

    return { ...defaultGameState };
}

function persistGame(state: GameState, uid: string | null) {
    if (typeof window === 'undefined' || !uid) return;

    const safeState = {
        ...state,
        playerName: sanitizePlayerName(state.playerName),
    };

    const payload = {
        ...safeState,
        lastSaved: Date.now(),
    };

    const storageKey = storageKeyForUser(uid);
    const cookieKey = cookieKeyForUser(uid);

    try {
        localStorage.setItem(storageKey, JSON.stringify(payload));
    } catch (error) {
        console.error('Erreur de sauvegarde localStorage :', error);
    }

    try {
        if (typeof document !== 'undefined') {
            document.cookie = `${cookieKey}=${encodeURIComponent(
                JSON.stringify(payload),
            )};path=/;max-age=31536000`;
        }
    } catch (error) {
        console.error('Erreur de sauvegarde cookie :', error);
    }
}

async function pushWinToGlobalLeaderboard(
    user: User | null,
    playerName: string,
    amount: number,
) {
    if (!user) return;

    const safeName = sanitizePlayerName(playerName);
    const safeScore = Math.max(0, Math.round(amount));

    if (!safeScore) return;
    if (!Number.isFinite(safeScore) || safeScore > MAX_REASONABLE_COOKIES) return;

    try {
        await addDoc(collection(db, 'leaderboard'), {
            name: safeName,
            userId: user.uid,
            score: safeScore,
            createdAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Erreur envoi leaderboard :', error);
    }
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
}

function pruneExpiredBuffs(buffs: ActiveBuff[]): ActiveBuff[] {
    const now = Date.now();
    return buffs.filter((b) => b.expiresAt > now);
}

type InfoTabId = 'upgrades' | 'achievements' | 'leaderboard';

function App() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [authEmail, setAuthEmail] = useState('');
    const [authPassword, setAuthPassword] = useState('');
    const [authMessage, setAuthMessage] = useState('');
    const [cloudMessage, setCloudMessage] = useState('');
    const [game, setGame] = useState<GameState>({ ...defaultGameState });

    const [globalLeaderboard, setGlobalLeaderboard] = useState<GlobalEntry[]>(
        [],
    );
    const [lastSyncedBestWin, setLastSyncedBestWin] = useState<number>(() => {
        if (typeof window === 'undefined') return 0;
        const raw = window.localStorage.getItem(LAST_SYNCED_BEST_KEY);
        const value = raw ? Number(raw) : 0;
        return Number.isFinite(value) && value > 0 ? value : 0;
    });

    const [isCookiePressed, setIsCookiePressed] = useState(false);
    const [isWheelSpinning, setIsWheelSpinning] = useState(false);
    const [openingCaseId, setOpeningCaseId] = useState<CaseId | null>(null);
    const [lastWheelResult, setLastWheelResult] =
        useState<LastWheelResult | null>(null);
    const [lastCaseResult, setLastCaseResult] =
        useState<LastCaseResult | null>(null);
    const [lastHighRoll, setLastHighRoll] =
        useState<LastHighRollResult | null>(null);
    const [wheelBet, setWheelBet] = useState<number>(500);
    const [overlay, setOverlay] = useState<OverlayState>(null);
    const [lockMessage, setLockMessage] = useState(
        'Connecte-toi pour jouer.',
    );

    const [selectedUpgradeCategory, setSelectedUpgradeCategory] =
        useState<UpgradeCategoryId>('auto');

    const [activeInfoTab, setActiveInfoTab] =
        useState<InfoTabId>('upgrades');

    const [playerNameDraft, setPlayerNameDraft] = useState(
        sanitizePlayerName(game.playerName),
    );
    const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false);
    const [isAuthNudgeDismissed, setIsAuthNudgeDismissed] = useState(false);

    const isLocked = !currentUser;

    const ensureConnected = useCallback(() => {
        if (!currentUser) {
            setLockMessage('Connecte-toi pour jouer.');
            setAuthMessage('Connexion requise pour jouer.');
            setIsAuthPanelOpen(true);
            return false;
        }
        return true;
    }, [currentUser]);

    const handleSignup = async (event?: React.SyntheticEvent) => {
        event?.preventDefault();
        setAuthMessage('');
        try {
            const cred = await createUserWithEmailAndPassword(
                auth,
                authEmail.trim(),
                authPassword,
            );
            const displayName = sanitizePlayerName(playerNameDraft);
            await updateProfile(cred.user, { displayName });
            setAuthMessage('Compte créé et connecté.');
        } catch (error: any) {
            setAuthMessage(error?.message ?? 'Erreur de création de compte.');
        }
    };

    const handleLogin = async (event?: React.SyntheticEvent) => {
        event?.preventDefault();
        setAuthMessage('');
        try {
            await signInWithEmailAndPassword(
                auth,
                authEmail.trim(),
                authPassword,
            );
            setAuthMessage('Connexion réussie.');
        } catch (error: any) {
            setAuthMessage(error?.message ?? 'Connexion impossible.');
        }
    };

    const handlePasswordReset = async () => {
        if (!authEmail.trim()) {
            setAuthMessage('Saisis ton email pour réinitialiser.');
            return;
        }
        try {
            await sendPasswordResetEmail(auth, authEmail.trim());
            setAuthMessage('Email de réinitialisation envoyé.');
        } catch (error: any) {
            setAuthMessage(error?.message ?? 'Erreur de réinitialisation.');
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setAuthMessage('Déconnecté.');
    };

    const handleCloudSave = useCallback(
        async (silent = false) => {
            if (!ensureConnected() || !currentUser) return;
            try {
                await setDoc(doc(db, 'cloudSaves', currentUser.uid), {
                    userId: currentUser.uid,
                    updatedAt: serverTimestamp(),
                    state: game,
                });
                if (!silent) setCloudMessage('Sauvegarde cloud effectuée.');
            } catch (error: any) {
                if (!silent)
                    setCloudMessage(
                        error?.message ?? 'Erreur lors de la sauvegarde cloud.',
                    );
            }
        },
        [currentUser, ensureConnected, game],
    );

    const handleCloudLoad = useCallback(async () => {
        if (!ensureConnected() || !currentUser) return;
        const snap = await getDoc(doc(db, 'cloudSaves', currentUser.uid));
        if (!snap.exists()) {
            setCloudMessage('Aucune sauvegarde cloud disponible.');
            return;
        }
        const data = snap.data() as { state?: GameState };
        const cloudState = data?.state ? safeMergeGameState(data.state) : null;
        if (cloudState) {
            setGame(cloudState);
            setCloudMessage('Sauvegarde cloud chargée.');
        }
    }, [currentUser, ensureConnected]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            if (!user) {
                setGame({ ...defaultGameState });
                setCloudMessage('Connecte-toi pour jouer.');
                setIsAuthNudgeDismissed(false);
                return;
            }

            const localState = loadGameState(user.uid);
            const cloudDoc = await getDoc(doc(db, 'cloudSaves', user.uid));
            let nextState = { ...localState };

            if (cloudDoc.exists()) {
                const data = cloudDoc.data() as { state?: GameState };
                const cloudState = data?.state ? safeMergeGameState(data.state) : null;
                if (cloudState && cloudState.totalCookies > localState.totalCookies) {
                    const useCloud = window.confirm(
                        'Une sauvegarde cloud plus récente existe. Charger le cloud ?',
                    );
                    if (useCloud) {
                        nextState = cloudState;
                        setCloudMessage('Sauvegarde cloud chargée.');
                    } else {
                        setCloudMessage('Cloud ignoré, cache local conservé.');
                    }
                }
            }

            const displayName = sanitizePlayerName(
                user.displayName ?? nextState.playerName,
            );
            setGame({ ...nextState, playerName: displayName });
            setPlayerNameDraft(displayName ?? DEFAULT_PLAYER_NAME);
            setAuthEmail('');
            setAuthPassword('');
            setAuthMessage('Connecté.');
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (currentUser) {
            setIsAuthPanelOpen(false);
        }
    }, [currentUser]);

    const effectiveCps = useMemo(() => computeEffectiveCps(game), [game]);
    const cookiesPerClick = useMemo(
        () => computeCookiesPerClick(game),
        [game],
    );

    const hasConfettiFx = game.upgrades['visual-confetti'] > 0;
    const hasNeonFx = game.upgrades['visual-neon'] > 0;
    const hasRainbowFx = game.upgrades['visual-rainbow'] > 0;

    const appClassName = [
        'app',
        `app--${game.theme}`,
        hasConfettiFx ? 'app--confetti' : '',
        hasNeonFx ? 'app--neon' : '',
        hasRainbowFx ? 'app--rainbow' : '',
    ]
        .filter(Boolean)
        .join(' ');

    const todayKey = useMemo(
        () => new Date().toISOString().slice(0, 10),
        [],
    );

    const todayTopWins = useMemo(
        () =>
            [...game.leaderboard]
                .filter((entry) => entry.date.startsWith(todayKey))
                .sort((a, b) => b.amount - a.amount)
                .slice(0, 5),
        [game.leaderboard, todayKey],
    );

    const allTimeTopWins = useMemo(
        () =>
            [...game.leaderboard]
                .sort((a, b) => b.amount - a.amount)
                .slice(0, 10),
        [game.leaderboard],
    );

    const globalTop3 = useMemo(
        () => globalLeaderboard.slice(0, 3),
        [globalLeaderboard],
    );
    const globalRest = useMemo(
        () => globalLeaderboard.slice(3),
        [globalLeaderboard],
    );

    // Production automatique
    useEffect(() => {
        const interval = window.setInterval(() => {
            setGame((prev) => {
                const activeBuffs = pruneExpiredBuffs(prev.activeBuffs);
                const stateWithBuffs: GameState =
                    activeBuffs === prev.activeBuffs
                        ? prev
                        : { ...prev, activeBuffs };

                const cps = computeEffectiveCps(stateWithBuffs);
                if (cps <= 0) return stateWithBuffs;

                const deltaSeconds = 0.2;
                const gained = cps * deltaSeconds;

                return {
                    ...stateWithBuffs,
                    cookies: stateWithBuffs.cookies + gained,
                    totalCookies: stateWithBuffs.totalCookies + gained,
                };
            });
        }, 200);

        return () => window.clearInterval(interval);
    }, []);

    // Sauvegarde
    useEffect(() => {
        persistGame(game, currentUser?.uid ?? null);
    }, [game, currentUser?.uid]);

    useEffect(() => {
        if (!currentUser) return;
        const interval = window.setInterval(() => {
            void handleCloudSave(true);
        }, 180_000);

        const beforeUnload = () => {
            void handleCloudSave(true);
        };

        window.addEventListener('beforeunload', beforeUnload);

        return () => {
            window.clearInterval(interval);
            window.removeEventListener('beforeunload', beforeUnload);
        };
    }, [currentUser, handleCloudSave]);

    // Thème global
    useEffect(() => {
        if (typeof document === 'undefined') return;
        document.documentElement.dataset.theme = game.theme;
    }, [game.theme]);

    useEffect(() => {
        setPlayerNameDraft(sanitizePlayerName(game.playerName));
    }, [game.playerName]);

    // Sync meilleur gain local -> Firestore
    useEffect(() => {
        const best = game.gamblingStats.biggestWin;
        if (!currentUser) return;
        if (best <= 0 || best === lastSyncedBestWin) return;

        const maxReasonable = Math.max(1e6, game.totalCookies * 10);
        if (!Number.isFinite(best) || best > maxReasonable) {
            return;
        }

        setLastSyncedBestWin(best);
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.setItem(LAST_SYNCED_BEST_KEY, String(best));
            } catch {
                // ignore
            }
        }

        void pushWinToGlobalLeaderboard(currentUser, game.playerName, best);
    }, [
        currentUser,
        game.gamblingStats.biggestWin,
        game.playerName,
        game.totalCookies,
        lastSyncedBestWin,
    ]);

    // Listener Firestore unique pour le leaderboard global
    useEffect(() => {
        const lbRef = collection(db, 'leaderboard');
        const q = query(lbRef, orderBy('score', 'desc'), limit(20));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const entries: GlobalEntry[] = snapshot.docs.map((doc) => {
                const data = doc.data() as any;
                return {
                    id: doc.id,
                    name: data.name ?? '???',
                    score: data.score ?? 0,
                    createdAt: data.createdAt?.toDate
                        ? data.createdAt.toDate()
                        : undefined,
                };
            });
            setGlobalLeaderboard(entries);
        });

        return () => unsubscribe();
    }, []);

    const handleCookieClick = () => {
        if (!ensureConnected()) return;
        setGame((prev) => {
            const baseGain = computeCookiesPerClick(prev);
            let gain = baseGain;

            // Clic critique
            const critUpgrades = prev.upgrades['crit-click'] ?? 0;
            if (critUpgrades > 0) {
                const def = UPGRADE_DEFINITIONS.find(
                    (u) => u.id === 'crit-click',
                );
                const perLevel = def?.critChanceBonus ?? 0.05;
                const critMultiplier = def?.critMultiplier ?? 5;
                const chance = clamp(perLevel * critUpgrades, 0, 0.5);
                if (Math.random() < chance) {
                    gain *= critMultiplier;
                }
            }

            return {
                ...prev,
                cookies: prev.cookies + gain,
                totalCookies: prev.totalCookies + gain,
                totalClicks: (prev.totalClicks ?? 0) + 1,
            };
        });

        setIsCookiePressed(true);
        window.setTimeout(() => setIsCookiePressed(false), 120);
    };

    const applyFrenzyBuffIfNeeded = useCallback(
        (upgrade: UpgradeDefinition, prev: GameState): GameState => {
            if (upgrade.id !== 'click-frenzy') return prev;
            if (
                !upgrade.frenzyDurationSeconds ||
                !upgrade.frenzyClickMultiplier
            )
                return prev;

            const now = Date.now();
            const buff: ActiveBuff = {
                id: `frenzy-${now}`,
                label: 'Frénésie de clic',
                multiplierCps: 1,
                multiplierClick: upgrade.frenzyClickMultiplier,
                expiresAt: now + upgrade.frenzyDurationSeconds * 1000,
            };

            const activeBuffs = pruneExpiredBuffs(prev.activeBuffs);
            return {
                ...prev,
                activeBuffs: [...activeBuffs, buff],
            };
        },
        [],
    );

    const handleBuyUpgrade = (upgrade: UpgradeDefinition) => {
        if (!ensureConnected()) return;
        setGame((prev) => {
            if (prev.totalCookies < upgrade.unlockAt) return prev;

            const quantity = prev.upgrades[upgrade.id] ?? 0;
            const cost = upgrade.baseCost * Math.pow(1.17, quantity);

            if (prev.cookies < cost) return prev;

            let next: GameState = {
                ...prev,
                cookies: prev.cookies - cost,
                upgrades: {
                    ...prev.upgrades,
                    [upgrade.id]: quantity + 1,
                },
                totalUpgradesPurchased: prev.totalUpgradesPurchased + 1,
            };

            next = applyFrenzyBuffIfNeeded(upgrade, next);

            return next;
        });
    };

    const handleReset = () => {
        if (
            window.confirm(
                'Réinitialiser complètement ta partie ? Tu perdras tous tes cookies et améliorations.',
            )
        ) {
            setGame((prev) => ({
                ...defaultGameState,
                theme: prev.theme,
                playerName: prev.playerName,
            }));
            setLastWheelResult(null);
            setLastCaseResult(null);
            setLastHighRoll(null);
            setOverlay(null);
            setLastSyncedBestWin(0);
        }
    };

    const toggleTheme = () => {
        setGame((prev) => ({
            ...prev,
            theme: prev.theme === 'dark' ? 'light' : 'dark',
        }));
    };

    const handleSavePlayerName = () => {
        if (!ensureConnected()) return;
        const safeName = sanitizePlayerName(playerNameDraft);
        setGame((prev) => ({
            ...prev,
            playerName: safeName,
        }));
        if (currentUser) {
            void updateProfile(currentUser, { displayName: safeName });
        }
    };

    const currentWheelMaxBet = Math.max(0, Math.floor(game.cookies));

    const handleWheelSpin = () => {
        if (!ensureConnected()) return;
        if (isWheelSpinning) return;
        if (currentWheelMaxBet < MIN_WHEEL_BET) return;

        setIsWheelSpinning(true);

        let spinResult: LastWheelResult | null = null;
        const segment = pickWeighted(WHEEL_SEGMENTS);

        setGame((prev) => {
            const maxBet = Math.floor(prev.cookies);
            const normalizedBet = clamp(
                Math.floor(wheelBet),
                MIN_WHEEL_BET,
                maxBet,
            );

            if (normalizedBet <= 0 || maxBet <= 0) {
                spinResult = null;
                return prev;
            }

            let cookies = prev.cookies - normalizedBet;
            let buffs = pruneExpiredBuffs(prev.activeBuffs);

            cookies += normalizedBet * segment.cookiesMultiplier;

            let buffLabel: string | undefined;

            if (
                segment.kind === 'buff' &&
                segment.buffDurationSeconds &&
                (segment.buffCpsMultiplier || segment.buffClickMultiplier)
            ) {
                const now = Date.now();
                const buff: ActiveBuff = {
                    id: `buff-${segment.id}-${now}`,
                    label: segment.label,
                    multiplierCps: segment.buffCpsMultiplier ?? 1,
                    multiplierClick: segment.buffClickMultiplier ?? 1,
                    expiresAt: now + segment.buffDurationSeconds * 1000,
                };
                buffs = [...buffs, buff];
                buffLabel = buff.label;
            }

            const delta = cookies - prev.cookies;

            let biggestWin = prev.gamblingStats.biggestWin;
            let leaderboard = prev.leaderboard;

            const isWin = delta > 0;
            const isJackpot = segment.id === 'jackpot';

            let consecutiveLosses = isWin
                ? 0
                : prev.gamblingStats.consecutiveLosses + 1;
            const maxConsecutiveLosses = Math.max(
                prev.gamblingStats.maxConsecutiveLosses,
                consecutiveLosses,
            );

            const jackpotStreak = isJackpot
                ? prev.gamblingStats.jackpotStreak + 1
                : 0;
            const maxJackpotStreak = Math.max(
                prev.gamblingStats.maxJackpotStreak,
                jackpotStreak,
            );

            if (delta > 0) {
                biggestWin = Math.max(biggestWin, delta);
                const entry: LeaderboardEntry = {
                    id: `wheel-${Date.now()}-${Math.random()
                        .toString(36)
                        .slice(2)}`,
                    playerName: prev.playerName || DEFAULT_PLAYER_NAME,
                    amount: delta,
                    date: new Date().toISOString(),
                    source: 'wheel',
                };
                leaderboard = [...leaderboard, entry]
                    .sort((a, b) => b.amount - a.amount)
                    .slice(0, 50);
            }

            spinResult = {
                label: segment.label,
                delta,
                spent: normalizedBet,
                isJackpot,
                buffLabel,
            };

            return {
                ...prev,
                cookies,
                activeBuffs: buffs,
                gamblingStats: {
                    ...prev.gamblingStats,
                    spinsPlayed: prev.gamblingStats.spinsPlayed + 1,
                    biggestWin,
                    consecutiveLosses,
                    maxConsecutiveLosses,
                    jackpotStreak,
                    maxJackpotStreak,
                },
                leaderboard,
            };
        });

        if (spinResult) {
            setLastWheelResult(spinResult);
            setOverlay({ kind: 'wheel', result: spinResult });
        }

        window.setTimeout(() => setIsWheelSpinning(false), 900);
    };

    const handleOpenCase = (caseDef: CaseDefinition) => {
        if (!ensureConnected()) return;
        if (openingCaseId) return;
        if (game.cookies < caseDef.cost) return;

        setOpeningCaseId(caseDef.id);

        window.setTimeout(() => {
            let caseResult: LastCaseResult | null = null;

            setGame((prev) => {
                if (prev.cookies < caseDef.cost) {
                    caseResult = null;
                    return prev;
                }

                const bet = caseDef.cost;
                let cookies = prev.cookies - bet;

                const roll = Math.random();
                let rewardMultiplier: number;
                let isJackpot = false;
                let isLoss = false;

                if (roll < caseDef.jackpotChance) {
                    rewardMultiplier = caseDef.jackpotMultiplier;
                    isJackpot = true;
                } else if (roll < caseDef.jackpotChance + 0.2) {
                    rewardMultiplier = caseDef.failMultiplier;
                    isLoss = true;
                } else {
                    const r = Math.random();
                    rewardMultiplier =
                        caseDef.minMultiplier +
                        r *
                        (caseDef.maxMultiplier - caseDef.minMultiplier);
                }

                const reward = bet * rewardMultiplier;
                cookies += reward;

                const delta = cookies - prev.cookies;

                let biggestWin = prev.gamblingStats.biggestWin;
                let leaderboard = prev.leaderboard;

                const isWin = delta > 0;

                let consecutiveLosses = isWin
                    ? 0
                    : prev.gamblingStats.consecutiveLosses + 1;
                const maxConsecutiveLosses = Math.max(
                    prev.gamblingStats.maxConsecutiveLosses,
                    consecutiveLosses,
                );

                const jackpotStreak = isJackpot
                    ? prev.gamblingStats.jackpotStreak + 1
                    : 0;
                const maxJackpotStreak = Math.max(
                    prev.gamblingStats.maxJackpotStreak,
                    jackpotStreak,
                );

                if (delta > 0) {
                    biggestWin = Math.max(biggestWin, delta);
                    const entry: LeaderboardEntry = {
                        id: `case-${Date.now()}-${Math.random()
                            .toString(36)
                            .slice(2)}`,
                        playerName: prev.playerName || DEFAULT_PLAYER_NAME,
                        amount: delta,
                        date: new Date().toISOString(),
                        source: 'case',
                    };
                    leaderboard = [...leaderboard, entry]
                        .sort((a, b) => b.amount - a.amount)
                        .slice(0, 50);
                }

                caseResult = {
                    caseId: caseDef.id,
                    caseName: caseDef.name,
                    reward,
                    spent: bet,
                    isJackpot,
                    isLoss,
                };

                return {
                    ...prev,
                    cookies,
                    gamblingStats: {
                        ...prev.gamblingStats,
                        casesOpened: prev.gamblingStats.casesOpened + 1,
                        biggestWin,
                        consecutiveLosses,
                        maxConsecutiveLosses,
                        jackpotStreak,
                        maxJackpotStreak,
                    },
                    leaderboard,
                };
            });

            if (caseResult) {
                setLastCaseResult(caseResult);
                setOverlay({ kind: 'case', result: caseResult });
            }

            setOpeningCaseId(null);
        }, 650);
    };

    const handleHighRoll = (allIn: boolean) => {
        if (!ensureConnected()) return;
        let highRollResult: LastHighRollResult | null = null;

        setGame((prev) => {
            const maxBet = Math.floor(prev.cookies);
            if (maxBet <= 0) {
                highRollResult = null;
                return prev;
            }

            const baseBet = Math.max(1_000, Math.floor(prev.cookies * 0.25));
            const bet = allIn ? maxBet : clamp(baseBet, 1_000, maxBet);

            if (bet <= 0) {
                highRollResult = null;
                return prev;
            }

            // High roll légèrement perdant en moyenne
            const winProb = allIn ? 0.44 : 0.47;
            const win = Math.random() < winProb;

            const cookies = win ? prev.cookies + bet : prev.cookies - bet;
            const delta = cookies - prev.cookies;

            let biggestWin = prev.gamblingStats.biggestWin;
            let leaderboard = prev.leaderboard;

            const isWin = win && delta > 0;

            let consecutiveLosses = isWin
                ? 0
                : prev.gamblingStats.consecutiveLosses + 1;
            const maxConsecutiveLosses = Math.max(
                prev.gamblingStats.maxConsecutiveLosses,
                consecutiveLosses,
            );

            let jackpotStreak = 0;
            const maxJackpotStreak = prev.gamblingStats.maxJackpotStreak;

            let allInLosses = prev.gamblingStats.allInLosses;
            if (allIn && !win) {
                allInLosses += 1;
            }

            if (isWin) {
                biggestWin = Math.max(biggestWin, delta);
                const entry: LeaderboardEntry = {
                    id: `highroll-${Date.now()}-${Math.random()
                        .toString(36)
                        .slice(2)}`,
                    playerName: prev.playerName || DEFAULT_PLAYER_NAME,
                    amount: delta,
                    date: new Date().toISOString(),
                    source: 'highroll',
                };
                leaderboard = [...leaderboard, entry]
                    .sort((a, b) => b.amount - a.amount)
                    .slice(0, 50);
            }

            highRollResult = {
                bet,
                delta,
                outcome: win ? 'win' : 'lose',
                allIn,
            };

            return {
                ...prev,
                cookies,
                gamblingStats: {
                    ...prev.gamblingStats,
                    highRollPlays: prev.gamblingStats.highRollPlays + 1,
                    allInCount: prev.gamblingStats.allInCount + (allIn ? 1 : 0),
                    biggestWin,
                    consecutiveLosses,
                    maxConsecutiveLosses,
                    jackpotStreak,
                    maxJackpotStreak,
                    allInLosses,
                },
                leaderboard,
            };
        });

        if (highRollResult) {
            setLastHighRoll(highRollResult);
            setOverlay({ kind: 'highroll', result: highRollResult });
        }
    };

    const unlockedAchievements = useMemo(
        () => ACHIEVEMENTS.filter((ach) => ach.check(game, effectiveCps)),
        [game, effectiveCps],
    );
    const unlockedAchievementIds = new Set(
        unlockedAchievements.map((a) => a.id),
    );

    const closeOverlay = () => setOverlay(null);

    return (
        <div className={appClassName}>
            {/* HEADER : logo + titre + joueur + actions */}
            <header className="app-header">
                <div className="app-header-left">
                    <div className="app-logo-circle">
                        <span className="app-logo">🍪</span>
                    </div>
                    <div className="app-title">
                        <h1>IMTMORTELS COOKIE CASINO</h1>
                        <p>
                            Clique, upgrade et tente ta chance au casino de
                            cookies. Tout est virtuel, garde ça fun et sain. ✨
                        </p>
                    </div>
                </div>

                <div className="app-actions">
                    <button
                        type="button"
                        className="ghost-button auth-toggle"
                        onClick={() => setIsAuthPanelOpen(true)}
                    >
                        {currentUser
                            ? `👤 ${game.playerName || 'Profil'}`
                            : '🔐 Connexion / Inscription'}
                    </button>
                    <div className="player-chip">
                        <span className="player-chip-label">Joueur</span>
                        <span className="player-chip-name">
                            {game.playerName || DEFAULT_PLAYER_NAME}
                        </span>
                        <button
                            type="button"
                            className="player-chip-edit"
                            onClick={() => {
                                setPlayerNameDraft(
                                    game.playerName || DEFAULT_PLAYER_NAME,
                                );
                                setIsAuthPanelOpen(true);
                            }}
                        >
                            ✏️
                        </button>
                    </div>

                    <button
                        type="button"
                        className="ghost-button"
                        onClick={toggleTheme}
                    >
                        {game.theme === 'dark'
                            ? '☀️ Mode clair'
                            : '🌙 Mode sombre'}
                    </button>
                    <button
                        type="button"
                        className="ghost-button ghost-button--danger"
                        onClick={handleReset}
                    >
                        🔁 Reset
                    </button>
                </div>
            </header>

            {isLocked && (
                <div className="lock-banner">
                    🔒 {lockMessage}
                </div>
            )}

            <main className="app-main">
                {/* ZONE HAUTE : cookie à gauche, carte info à droite */}
                <section className="top-layout">
                    {/* Colonne gauche : cookie cliquable + stats de base */}
                    <section className="top-layout-left">
                        <div className="cookie-panel">
                            <div className="cookie-card">
                                <div className="cookie-aura" />
                                <div className="cookie-main">
                                    <button
                                        type="button"
                                        className={`cookie-button ${isCookiePressed
                                                ? 'cookie-button--pressed'
                                                : ''
                                            }`}
                                        onClick={handleCookieClick}
                                        disabled={isLocked}
                                    >
                                        <div className="cookie-ring">
                                            <div className="cookie-ring-inner">
                                                <div className="cookie">
                                                    <div className="cookie-chip cookie-chip--1" />
                                                    <div className="cookie-chip cookie-chip--2" />
                                                    <div className="cookie-chip cookie-chip--3" />
                                                    <div className="cookie-chip cookie-chip--4" />
                                                    <div className="cookie-gloss" />
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="cookie-stats">
                                        <p className="cookie-main-count">
                                            {formatNumber(game.cookies, 1)}{' '}
                                            cookies
                                        </p>
                                        <p className="cookie-sub">
                                            {formatNumber(
                                                cookiesPerClick,
                                                2,
                                            )}{' '}
                                            par clic ·{' '}
                                            {formatNumber(
                                                effectiveCps,
                                                2,
                                            )}{' '}
                                            / sec
                                        </p>
                                        <p className="cookie-sub cookie-sub--secondary">
                                            Total généré :{' '}
                                            {formatNumber(
                                                game.totalCookies,
                                                1,
                                            )}{' '}
                                            cookies
                                        </p>
                                    </div>

                                    {game.activeBuffs.length > 0 && (
                                        <div className="buffs-bar">
                                            {game.activeBuffs.map((buff) => (
                                                <span
                                                    key={buff.id}
                                                    className="buff-pill"
                                                >
                                                    <span className="buff-pill-emoji">
                                                        ⚡
                                                    </span>
                                                    <span className="buff-pill-label">
                                                        {buff.label}
                                                    </span>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Colonne droite : carte d'info (Top3 + onglets) */}
                    <section className="top-layout-right">
                        <section
                            className={`info-panel ${activeInfoTab === 'leaderboard'
                                    ? 'info-panel--leaderboard'
                                    : ''
                                }`}
                        >
                            {/* Bandeau Top 3 (visible sauf en mode classement fusionné) */}
                            {activeInfoTab !== 'leaderboard' && (
                                <div className="info-top3">
                                    <div className="info-top3-heading">
                                        <h2 className="info-top3-title">
                                            Top 3 joueurs
                                        </h2>
                                        <p className="info-top3-subtitle">
                                            Basé sur les meilleurs gains en un
                                            seul coup de casino.
                                        </p>
                                    </div>
                                    <ol className="top3-list">
                                        {globalTop3.length === 0 ? (
                                            <li className="top3-empty">
                                                Aucun joueur global encore dans
                                                le classement. Fonce 🎰
                                            </li>
                                        ) : (
                                            globalTop3.map(
                                                (entry, index) => (
                                                    <li
                                                        key={entry.id}
                                                        className={`top3-item top3-item--${index + 1
                                                            }`}
                                                    >
                                                        <span className="top3-rank">
                                                            {index === 0
                                                                ? '👑'
                                                                : index === 1
                                                                    ? '🥈'
                                                                    : '🥉'}
                                                        </span>
                                                        <div className="top3-text">
                                                            <span className="top3-name">
                                                                {entry.name}
                                                            </span>
                                                            <span className="top3-score">
                                                                {formatNumber(
                                                                    entry.score,
                                                                    1,
                                                                )}{' '}
                                                                cookies
                                                            </span>
                                                        </div>
                                                    </li>
                                                ),
                                            )
                                        )}
                                    </ol>
                                </div>
                            )}

                            {/* Menu d'onglets */}
                            <div className="info-tabs">
                                <button
                                    type="button"
                                    className={`info-tab ${activeInfoTab === 'upgrades'
                                            ? 'info-tab--active'
                                            : ''
                                        }`}
                                    onClick={() =>
                                        setActiveInfoTab('upgrades')
                                    }
                                >
                                    Améliorations
                                </button>
                                <button
                                    type="button"
                                    className={`info-tab ${activeInfoTab === 'achievements'
                                            ? 'info-tab--active'
                                            : ''
                                        }`}
                                    onClick={() =>
                                        setActiveInfoTab('achievements')
                                    }
                                >
                                    Succès
                                </button>
                                <button
                                    type="button"
                                    className={`info-tab ${activeInfoTab === 'leaderboard'
                                            ? 'info-tab--active'
                                            : ''
                                        }`}
                                    onClick={() =>
                                        setActiveInfoTab('leaderboard')
                                    }
                                >
                                    Classement général
                                </button>
                            </div>

                            {/* Contenu des onglets */}
                            <div
                                className={`info-content ${activeInfoTab === 'leaderboard'
                                        ? 'info-content--leaderboard'
                                        : ''
                                    }`}
                            >
                                {/* Onglet AMÉLIORATIONS */}
                                {activeInfoTab === 'upgrades' && (
                                    <div className="info-upgrades">
                                        <p className="info-section-intro">
                                            Investis tes cookies dans des boosts
                                            permanents. Les bâtiments produisent
                                            en continu, les clics deviennent
                                            monstrueux.
                                        </p>

                                        <div className="upgrade-tabs">
                                            {UPGRADE_CATEGORIES.map(
                                                (category) => (
                                                    <button
                                                        key={category.id}
                                                        type="button"
                                                        className={`upgrade-tab${selectedUpgradeCategory ===
                                                                category.id
                                                                ? ' upgrade-tab--active'
                                                                : ''
                                                            }`}
                                                        onClick={() =>
                                                            setSelectedUpgradeCategory(
                                                                category.id,
                                                            )
                                                        }
                                                    >
                                                        <span className="upgrade-tab-label">
                                                            {category.label}
                                                        </span>
                                                        <span className="upgrade-tab-description">
                                                            {
                                                                category.description
                                                            }
                                                        </span>
                                                    </button>
                                                ),
                                            )}
                                        </div>

                                        <div className="shop-list-wrapper">
                                            {UPGRADE_DEFINITIONS_BY_CATEGORY[
                                                selectedUpgradeCategory
                                            ].some(
                                                (upgrade) =>
                                                    game.totalCookies >=
                                                    upgrade.unlockAt,
                                            ) ? (
                                                <div className="shop-list">
                                                    {UPGRADE_DEFINITIONS_BY_CATEGORY[
                                                        selectedUpgradeCategory
                                                    ]
                                                        .filter(
                                                            (upgrade) =>
                                                                game.totalCookies >=
                                                                upgrade.unlockAt,
                                                        )
                                                        .map((upgrade) => {
                                                            const quantity =
                                                                game.upgrades[
                                                                upgrade.id
                                                                ] ?? 0;
                                                            const cost =
                                                                upgrade.baseCost *
                                                                Math.pow(
                                                                    1.15,
                                                                    quantity,
                                                                );
                                                            const affordable =
                                                                game.cookies >=
                                                                cost;

                                                            return (
                                                                <button
                                                                    key={
                                                                        upgrade.id
                                                                    }
                                                                    type="button"
                                                                    className={`shop-item${affordable
                                                                            ? ' shop-item--affordable'
                                                                            : ''
                                                                        }`}
                                                                    onClick={() =>
                                                                        handleBuyUpgrade(
                                                                            upgrade,
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        isLocked ||
                                                                        !affordable
                                                                    }
                                                                >
                                                                    <div className="shop-item-main">
                                                                        <div className="shop-item-icon">
                                                                            {
                                                                                upgrade.emoji
                                                                            }
                                                                        </div>
                                                                        <div className="shop-item-text">
                                                                            <span className="shop-item-name">
                                                                                {
                                                                                    upgrade.name
                                                                                }
                                                                            </span>
                                                                            <span className="shop-item-description">
                                                                                {
                                                                                    upgrade.description
                                                                                }
                                                                            </span>
                                                                            <div className="shop-item-effects">
                                                                                {upgrade.cps >
                                                                                    0 && (
                                                                                        <span>
                                                                                            +
                                                                                            {
                                                                                                upgrade.cps
                                                                                            }{' '}
                                                                                            /s
                                                                                        </span>
                                                                                    )}
                                                                                {upgrade.clickBonus >
                                                                                    0 && (
                                                                                        <span>
                                                                                            +
                                                                                            {
                                                                                                upgrade.clickBonus
                                                                                            }{' '}
                                                                                            par
                                                                                            clic
                                                                                        </span>
                                                                                    )}
                                                                                {upgrade.cps ===
                                                                                    0 &&
                                                                                    upgrade.clickBonus ===
                                                                                    0 && (
                                                                                        <span>
                                                                                            Cosmétique
                                                                                            uniquement
                                                                                            ✨
                                                                                        </span>
                                                                                    )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="shop-item-meta">
                                                                        <span className="shop-item-cost">
                                                                            {formatNumber(
                                                                                cost,
                                                                                1,
                                                                            )}{' '}
                                                                            cookies
                                                                        </span>
                                                                        <span className="shop-item-qty">
                                                                            x
                                                                            {
                                                                                quantity
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            );
                                                        })}
                                                </div>
                                            ) : (
                                                <p className="shop-empty">
                                                    Clique encore un peu pour
                                                    débloquer des améliorations
                                                    dans cette catégorie. 💡
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Onglet SUCCÈS */}
                                {activeInfoTab === 'achievements' && (
                                    <div className="info-achievements">
                                        <div className="info-achievements-header">
                                            <h3>Succès</h3>
                                            <p className="achievements-count">
                                                {unlockedAchievements.length} /{' '}
                                                {ACHIEVEMENTS.length} débloqués
                                            </p>
                                        </div>
                                        <p className="info-section-intro">
                                            Débloque des succès en cliquant,
                                            investissant et en testant le
                                            casino. Rien n’est monétisé, c’est
                                            juste pour le fun et le challenge.
                                        </p>

                                        <div className="achievements-list">
                                            {ACHIEVEMENTS.map((ach) => {
                                                const unlocked =
                                                    unlockedAchievementIds.has(
                                                        ach.id,
                                                    );
                                                return (
                                                    <div
                                                        key={ach.id}
                                                        className={`achievement ${unlocked
                                                                ? 'achievement--unlocked'
                                                                : 'achievement--locked'
                                                            }`}
                                                    >
                                                        <span className="achievement-dot" />
                                                        <div className="achievement-text">
                                                            <span className="achievement-label">
                                                                {ach.label}
                                                            </span>
                                                            <span className="achievement-description">
                                                                {
                                                                    ach.description
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Onglet CLASSEMENT GÉNÉRAL (fusion Top3 + classement) */}
                                {activeInfoTab === 'leaderboard' && (
                                    <div className="info-leaderboard">
                                        <div className="leaderboard-top3-block">
                                            <h3 className="leaderboard-title">
                                                Classement global du casino
                                            </h3>
                                            <p className="leaderboard-subtitle">
                                                Basé sur le meilleur gain en un
                                                seul coup (roue, lootbox ou
                                                high roll).
                                            </p>

                                            <div className="leaderboard-podium">
                                                <div className="podium-column podium-column--silver">
                                                    {globalTop3[1] && (
                                                        <>
                                                            <span className="podium-rank">
                                                                🥈
                                                            </span>
                                                            <span className="podium-name">
                                                                {
                                                                    globalTop3[1]
                                                                        .name
                                                                }
                                                            </span>
                                                            <span className="podium-score">
                                                                {formatNumber(
                                                                    globalTop3[1]
                                                                        .score,
                                                                    1,
                                                                )}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="podium-column podium-column--gold">
                                                    {globalTop3[0] && (
                                                        <>
                                                            <span className="podium-rank">
                                                                🥇
                                                            </span>
                                                            <span className="podium-name">
                                                                {
                                                                    globalTop3[0]
                                                                        .name
                                                                }
                                                            </span>
                                                            <span className="podium-score">
                                                                {formatNumber(
                                                                    globalTop3[0]
                                                                        .score,
                                                                    1,
                                                                )}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="podium-column podium-column--bronze">
                                                    {globalTop3[2] && (
                                                        <>
                                                            <span className="podium-rank">
                                                                🥉
                                                            </span>
                                                            <span className="podium-name">
                                                                {
                                                                    globalTop3[2]
                                                                        .name
                                                                }
                                                            </span>
                                                            <span className="podium-score">
                                                                {formatNumber(
                                                                    globalTop3[2]
                                                                        .score,
                                                                    1,
                                                                )}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="leaderboard-scroll">
                                            <div className="leaderboard-block">
                                                <h4 className="leaderboard-block-title">
                                                    Suite du classement global
                                                </h4>
                                                {globalRest.length === 0 ? (
                                                    <p className="leaderboard-empty">
                                                        Personne d&apos;autre
                                                        n&apos;a encore percé
                                                        le classement global.
                                                    </p>
                                                ) : (
                                                    <ul className="leaderboard-list">
                                                        {globalRest.map(
                                                            (
                                                                entry,
                                                                index,
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        entry.id
                                                                    }
                                                                    className="leaderboard-row"
                                                                >
                                                                    <span className="leaderboard-rank">
                                                                        #
                                                                        {index +
                                                                            4}
                                                                    </span>
                                                                    <span className="leaderboard-name">
                                                                        {
                                                                            entry.name
                                                                        }
                                                                    </span>
                                                                    <span className="leaderboard-amount">
                                                                        {formatNumber(
                                                                            entry.score,
                                                                            1,
                                                                        )}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}
                                            </div>

                                            <div className="leaderboard-block">
                                                <h4 className="leaderboard-block-title">
                                                    Top gains du jour (local)
                                                </h4>
                                                {todayTopWins.length === 0 ? (
                                                    <p className="leaderboard-empty">
                                                        Aucun gros gain local
                                                        aujourd&apos;hui. À toi
                                                        de jouer ✨
                                                    </p>
                                                ) : (
                                                    <ul className="leaderboard-list">
                                                        {todayTopWins.map(
                                                            (
                                                                entry,
                                                                index,
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        entry.id
                                                                    }
                                                                    className="leaderboard-row"
                                                                >
                                                                    <span className="leaderboard-rank">
                                                                        #
                                                                        {index +
                                                                            1}
                                                                    </span>
                                                                    <span className="leaderboard-name">
                                                                        {
                                                                            entry.playerName
                                                                        }
                                                                    </span>
                                                                    <span className="leaderboard-amount">
                                                                        {formatNumber(
                                                                            entry.amount,
                                                                            1,
                                                                        )}
                                                                    </span>
                                                                    <span className="leaderboard-source">
                                                                        {entry.source ===
                                                                            'wheel'
                                                                            ? 'Roue'
                                                                            : entry.source ===
                                                                                'case'
                                                                                ? 'Caisse'
                                                                                : 'High roll'}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}
                                            </div>

                                            <div className="leaderboard-block">
                                                <h4 className="leaderboard-block-title">
                                                    Records absolus (local)
                                                </h4>
                                                {allTimeTopWins.length ===
                                                    0 ? (
                                                    <p className="leaderboard-empty">
                                                        Pas encore de record
                                                        enregistré sur ce
                                                        navigateur.
                                                    </p>
                                                ) : (
                                                    <ul className="leaderboard-list">
                                                        {allTimeTopWins.map(
                                                            (
                                                                entry,
                                                                index,
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        entry.id
                                                                    }
                                                                    className="leaderboard-row"
                                                                >
                                                                    <span className="leaderboard-rank">
                                                                        #
                                                                        {index +
                                                                            1}
                                                                    </span>
                                                                    <span className="leaderboard-name">
                                                                        {
                                                                            entry.playerName
                                                                        }
                                                                    </span>
                                                                    <span className="leaderboard-amount">
                                                                        {formatNumber(
                                                                            entry.amount,
                                                                            1,
                                                                        )}
                                                                    </span>
                                                                    <span className="leaderboard-source">
                                                                        {entry.source ===
                                                                            'wheel'
                                                                            ? 'Roue'
                                                                            : entry.source ===
                                                                                'case'
                                                                                ? 'Caisse'
                                                                                : 'High roll'}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}
                                                <p className="leaderboard-note">
                                                    Classement stocké uniquement
                                                    dans ton navigateur.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </section>
                </section>

                {/* ZONE BASSE : CASINO pleine largeur */}
                <section className="casino-section">
                    <header className="casino-header">
                        <div>
                            <h2 className="section-title">
                                Casino des cookies
                            </h2>
                            <p className="section-subtitle">
                                Roue, lootboxes et coups de poker. L&apos;espérance
                                est légèrement contre toi : parie uniquement
                                pour t&apos;amuser.
                            </p>
                        </div>
                    </header>

                    <div className="casino-grid">
                        {/* Roue de la chance */}
                        <div
                            className={`casino-card casino-card--wheel ${hasNeonFx ? 'casino-card--neon' : ''
                                }`}
                        >
                            <div className="casino-card-header">
                                <h3>Roue de la chance</h3>
                                <p className="casino-helper">
                                    Mise min. {MIN_WHEEL_BET} cookies
                                </p>
                            </div>

                            <div className="wheel-controls">
                                <input
                                    type="number"
                                    className="wheel-input"
                                    min={MIN_WHEEL_BET}
                                    value={wheelBet}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) =>
                                        setWheelBet(
                                            Math.max(
                                                MIN_WHEEL_BET,
                                                Number(e.target.value) || 0,
                                            ),
                                        )
                                    }
                                />
                                <button
                                    type="button"
                                    className="primary-button"
                                    onClick={handleWheelSpin}
                                    disabled={
                                        isLocked ||
                                        isWheelSpinning ||
                                        game.cookies < MIN_WHEEL_BET
                                    }
                                >
                                    {isWheelSpinning
                                        ? 'La roue tourne...'
                                        : 'Spin 🎰'}
                                </button>
                            </div>
                            {lastWheelResult && (
                                <p className="casino-last-result">
                                    Résultat : {lastWheelResult.label} ·{' '}
                                    {lastWheelResult.delta >= 0 ? '+' : ''}
                                    {formatNumber(
                                        lastWheelResult.delta,
                                        1,
                                    )}{' '}
                                    cookies
                                    {lastWheelResult.buffLabel && (
                                        <>
                                            {' · '}Buff :{' '}
                                            {lastWheelResult.buffLabel}
                                        </>
                                    )}
                                </p>
                            )}
                        </div>

                        {/* Lootboxes */}
                        <div
                            className={`casino-card casino-card--cases ${hasNeonFx ? 'casino-card--neon' : ''
                                }`}
                        >
                            <div className="casino-card-header">
                                <h3>Lootboxes</h3>
                                <p className="casino-helper">
                                    Des boîtes surprises plus ou moins risquées.
                                </p>
                            </div>

                            <div className="cases-list">
                                {CASE_DEFINITIONS.map((c) => {
                                    const disabled =
                                        isLocked ||
                                        game.cookies < c.cost ||
                                        openingCaseId === c.id;
                                    const opening = openingCaseId === c.id;

                                    return (
                                        <button
                                            key={c.id}
                                            type="button"
                                            className={`case-card ${disabled
                                                    ? 'case-card--disabled'
                                                    : ''
                                                }`}
                                            disabled={disabled}
                                            onClick={() => handleOpenCase(c)}
                                        >
                                            <div className="case-main">
                                                <span className="case-emoji">
                                                    {c.emoji}
                                                </span>
                                                <div>
                                                    <div className="case-name">
                                                        {c.name}
                                                    </div>
                                                    <div className="case-desc">
                                                        {c.description}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="case-meta">
                                                <span>
                                                    Coût :{' '}
                                                    {formatNumber(c.cost, 0)}
                                                </span>
                                                <span>
                                                    Jack :{' '}
                                                    {c.jackpotMultiplier}x (
                                                    {Math.round(
                                                        c.jackpotChance * 100,
                                                    )}
                                                    %)
                                                </span>
                                            </div>
                                            {opening && (
                                                <div className="case-opening">
                                                    Ouverture...
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            {lastCaseResult && (
                                <p className="casino-last-result">
                                    Dernière caisse :{' '}
                                    {lastCaseResult.caseName} ·{' '}
                                    {lastCaseResult.isJackpot
                                        ? 'JACKPOT 🎉 '
                                        : lastCaseResult.isLoss
                                            ? 'Aïe... 😬 '
                                            : ''}
                                    {lastCaseResult.reward >= 0 ? '+' : ''}
                                    {formatNumber(
                                        lastCaseResult.reward,
                                        1,
                                    )}{' '}
                                    cookies
                                </p>
                            )}
                        </div>

                        {/* High roll */}
                        <div
                            className={`casino-card casino-card--highroll ${hasNeonFx ? 'casino-card--neon' : ''
                                }`}
                        >
                            <div className="casino-card-header">
                                <h3>Coup de poker</h3>
                                <p className="casino-helper">
                                    Mise élevée ou ALL-IN. Les chances ne sont
                                    pas de ton côté. 💀
                                </p>
                            </div>

                            <div className="highroll-actions">
                                <button
                                    type="button"
                                    className="secondary-button"
                                    disabled={isLocked || game.cookies < 1_000}
                                    onClick={() => handleHighRoll(false)}
                                >
                                    Mise forte
                                </button>
                                <button
                                    type="button"
                                    className="danger-button"
                                    disabled={isLocked || game.cookies < 1_000}
                                    onClick={() => handleHighRoll(true)}
                                >
                                    ALL-IN 💀
                                </button>
                            </div>
                            {lastHighRoll && (
                                <p className="casino-last-result">
                                    {lastHighRoll.allIn
                                        ? 'ALL-IN'
                                        : 'Mise'}{' '}
                                    :{' '}
                                    {formatNumber(
                                        lastHighRoll.bet,
                                        1,
                                    )}{' '}
                                    ·{' '}
                                    {lastHighRoll.outcome === 'win'
                                        ? 'Victoire 🎉'
                                        : 'Défaite 😬'}{' '}
                                    (
                                    {lastHighRoll.delta >= 0 ? '+' : ''}
                                    {formatNumber(
                                        lastHighRoll.delta,
                                        1,
                                    )}{' '}
                                    cookies)
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="casino-stats">
                        <h3>Stats casino</h3>
                        <div className="casino-stats-grid">
                            <div className="casino-stat">
                                <span>Roue jouée</span>
                                <strong>
                                    {game.gamblingStats.spinsPlayed} fois
                                </strong>
                            </div>
                            <div className="casino-stat">
                                <span>Lootboxes ouvertes</span>
                                <strong>
                                    {game.gamblingStats.casesOpened}
                                </strong>
                            </div>
                            <div className="casino-stat">
                                <span>High rolls</span>
                                <strong>
                                    {game.gamblingStats.highRollPlays}
                                </strong>
                            </div>
                            <div className="casino-stat">
                                <span>All-in tentés</span>
                                <strong>
                                    {game.gamblingStats.allInCount}
                                </strong>
                            </div>
                            <div className="casino-stat">
                                <span>Série de pertes max</span>
                                <strong>
                                    {
                                        game.gamblingStats
                                            .maxConsecutiveLosses
                                    }
                                </strong>
                            </div>
                            <div className="casino-stat">
                                <span>Meilleur coup</span>
                                <strong>
                                    {formatNumber(
                                        game.gamblingStats.biggestWin,
                                        1,
                                    )}{' '}
                                    cookies
                                </strong>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {!currentUser && !isAuthPanelOpen && !isAuthNudgeDismissed && (
                <div className="auth-nudge">
                    <button
                        type="button"
                        className="auth-nudge__close"
                        aria-label="Fermer le rappel d'inscription"
                        onClick={() => setIsAuthNudgeDismissed(true)}
                    >
                        ✕
                    </button>
                    <div>
                        <div className="auth-nudge__title">
                            Connecte-toi pour jouer
                        </div>
                        <div className="auth-nudge__text">
                            Tes clics, upgrades et paris nécessitent un compte
                            gratuit.
                        </div>
                    </div>
                    <button
                        type="button"
                        className="primary-button auth-nudge__button"
                        onClick={() => setIsAuthPanelOpen(true)}
                    >
                        Ouvrir
                    </button>
                </div>
            )}

            <div
                className={`auth-widget ${
                    isAuthPanelOpen ? 'auth-widget--open' : ''
                }`}
            >
                <div className="auth-widget__header">
                    <div>
                        <div className="auth-widget__title">
                            {currentUser
                                ? 'Profil & sauvegarde cloud'
                                : 'Connexion / inscription'}
                        </div>
                        <div className="auth-widget__subtitle">
                            {currentUser
                                ? 'Gère ton pseudo et ta sauvegarde sécurisée.'
                                : 'Aucun jeu hors ligne : connecte-toi pour cliquer et jouer.'}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="ghost-button auth-widget__close"
                        onClick={() => setIsAuthPanelOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                <div className="auth-widget__body">
                    <div className="auth-widget__inputs">
                        <input
                            className="auth-input"
                            type="email"
                            placeholder="Email"
                            value={authEmail}
                            onChange={(e) => setAuthEmail(e.target.value)}
                        />
                        <input
                            className="auth-input"
                            type="password"
                            placeholder="Mot de passe"
                            value={authPassword}
                            onChange={(e) => setAuthPassword(e.target.value)}
                        />
                    </div>

                    <div className="auth-widget__actions">
                        <button
                            type="button"
                            className="primary-button"
                            onClick={handleLogin}
                            disabled={!authEmail || !authPassword}
                        >
                            Connexion
                        </button>
                        <button
                            type="button"
                            className="secondary-button"
                            onClick={handleSignup}
                            disabled={!authEmail || !authPassword}
                        >
                            Créer un compte
                        </button>
                        <button
                            type="button"
                            className="ghost-button"
                            onClick={handlePasswordReset}
                            disabled={!authEmail}
                        >
                            Mot de passe oublié
                        </button>
                    </div>

                    <div className="auth-widget__status">{authMessage}</div>

                    {currentUser && (
                        <>
                            <div className="auth-widget__profile">
                                <div className="auth-widget__label">Pseudo public</div>
                                <div className="auth-widget__name-row">
                                    <input
                                        className="auth-input"
                                        type="text"
                                        maxLength={16}
                                        value={playerNameDraft}
                                        onChange={(e) =>
                                            setPlayerNameDraft(e.target.value)
                                        }
                                    />
                                    <button
                                        type="button"
                                        className="ghost-button"
                                        onClick={handleSavePlayerName}
                                        disabled={!playerNameDraft.trim()}
                                    >
                                        Mettre à jour
                                    </button>
                                </div>
                            </div>
                            <div className="auth-widget__cloud">
                                <button
                                    type="button"
                                    className="ghost-button"
                                    onClick={() => handleCloudSave(false)}
                                >
                                    Sauvegarde cloud
                                </button>
                                <button
                                    type="button"
                                    className="ghost-button"
                                    onClick={handleCloudLoad}
                                >
                                    Charger depuis le cloud
                                </button>
                                <button
                                    type="button"
                                    className="ghost-button ghost-button--danger"
                                    onClick={handleLogout}
                                >
                                    Se déconnecter
                                </button>
                            </div>
                            {cloudMessage && (
                                <div className="auth-widget__status">
                                    {cloudMessage}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Overlay résultat casino */}
            {overlay && (
                <div className="overlay-backdrop">
                    <div className="overlay-card">
                        {overlay.kind === 'wheel' && (
                            <>
                                <h2>Résultat de la roue</h2>
                                <p className="overlay-main">
                                    {overlay.result.label} · Mise :{' '}
                                    {formatNumber(
                                        overlay.result.spent,
                                        1,
                                    )}{' '}
                                    · Gain net :{' '}
                                    {overlay.result.delta >= 0 ? '+' : ''}
                                    {formatNumber(
                                        overlay.result.delta,
                                        1,
                                    )}{' '}
                                    cookies
                                </p>
                                {overlay.result.isJackpot && (
                                    <p className="overlay-sub">
                                        🎉 JACKPOT de cookies !
                                    </p>
                                )}
                                {overlay.result.buffLabel && (
                                    <p className="overlay-sub">
                                        Buff obtenu :{' '}
                                        {overlay.result.buffLabel}
                                    </p>
                                )}
                            </>
                        )}

                        {overlay.kind === 'case' && (
                            <>
                                <h2>Résultat de la caisse</h2>
                                <p className="overlay-main">
                                    {overlay.result.caseName} · Mise :{' '}
                                    {formatNumber(
                                        overlay.result.spent,
                                        1,
                                    )}{' '}
                                    · Récompense :{' '}
                                    {formatNumber(
                                        overlay.result.reward,
                                        1,
                                    )}{' '}
                                    cookies
                                </p>
                                {overlay.result.isJackpot && (
                                    <p className="overlay-sub">
                                        🎉 JACKPOT dans la lootbox !
                                    </p>
                                )}
                                {overlay.result.isLoss && (
                                    <p className="overlay-sub">
                                        Aïe… petit rappel des probabilités du
                                        casino.
                                    </p>
                                )}
                            </>
                        )}

                        {overlay.kind === 'highroll' && (
                            <>
                                <h2>Coup de poker</h2>
                                <p className="overlay-main">
                                    {overlay.result.allIn
                                        ? 'ALL-IN'
                                        : 'Mise élevée'}
                                    {' · '}Mise :{' '}
                                    {formatNumber(
                                        overlay.result.bet,
                                        1,
                                    )}{' '}
                                    · Résultat :{' '}
                                    {overlay.result.outcome === 'win'
                                        ? 'Victoire 🎉'
                                        : 'Défaite 😬'}{' '}
                                    (
                                    {overlay.result.delta >= 0 ? '+' : ''}
                                    {formatNumber(
                                        overlay.result.delta,
                                        1,
                                    )}{' '}
                                    cookies)
                                </p>
                            </>
                        )}

                        <div className="overlay-actions">
                            <button
                                type="button"
                                className="secondary-button"
                                onClick={closeOverlay}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
