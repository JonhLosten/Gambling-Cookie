import { useEffect, useMemo, useState } from 'react';
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
    | 'visual-rainbow';

interface UpgradeDefinition {
    id: UpgradeId;
    name: string;
    description: string;
    baseCost: number;
    cps: number;
    clickBonus: number;
    unlockAt: number;
    emoji: string;
}

type CaseId = 'basic' | 'rare' | 'legendary';

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

const STORAGE_KEY = 'imtmortels-cookie-clicker-v6';
const COOKIE_KEY = 'imtmortels_cookie_save';

const UPGRADE_DEFINITIONS: UpgradeDefinition[] = [
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
        baseCost: 13_000,
        cps: 65,
        clickBonus: 0,
        unlockAt: 5_000,
        emoji: '🌾',
    },
    {
        id: 'factory',
        name: 'Usine à cookies',
        description: 'Industrialise totalement la production.',
        baseCost: 120_000,
        cps: 470,
        clickBonus: 0,
        unlockAt: 50_000,
        emoji: '🏭',
    },
    {
        id: 'bank',
        name: 'Banque à cookies',
        description: 'Les intérêts composés… en cookies.',
        baseCost: 1_400_000,
        cps: 4_000,
        clickBonus: 0,
        unlockAt: 300_000,
        emoji: '🏦',
    },
    {
        id: 'cookie-mine',
        name: 'Mine de cookies lunaires',
        description: 'Exploite des cookies directement sur la lune.',
        baseCost: 20_000_000,
        cps: 90_000,
        clickBonus: 0,
        unlockAt: 3_000_000,
        emoji: '🌙',
    },
    {
        id: 'sky-fortress',
        name: 'Forteresse céleste',
        description: 'Une ville flottante dédiée à la production de cookies.',
        baseCost: 200_000_000,
        cps: 1_000_000,
        clickBonus: 0,
        unlockAt: 20_000_000,
        emoji: '🏰',
    },
    {
        id: 'portal',
        name: 'Portail dimensionnel',
        description: 'Ouvre un portail vers le monde des cookies.',
        baseCost: 1_000_000_000,
        cps: 6_000_000,
        clickBonus: 0,
        unlockAt: 200_000_000,
        emoji: '🌀',
    },
    {
        id: 'time-machine',
        name: 'Machine à remonter le temps',
        description: 'Produisait déjà des cookies hier.',
        baseCost: 12_000_000_000,
        cps: 65_000_000,
        clickBonus: 0,
        unlockAt: 2_000_000_000,
        emoji: '⌛',
    },
    {
        id: 'golden-hand',
        name: 'Doigt en or',
        description: 'Chaque clic vaut beaucoup plus.',
        baseCost: 200,
        cps: 0,
        clickBonus: 1,
        unlockAt: 100,
        emoji: '☝️',
    },
    // Cosmétiques : modifient l’apparence et les animations
    {
        id: 'visual-confetti',
        name: 'Confettis festifs',
        description: 'Ajoute des confettis sur les gros gains (cosmétique).',
        baseCost: 50_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 20_000,
        emoji: '🎊',
    },
    {
        id: 'visual-neon',
        name: 'Néons du casino',
        description: 'Glow néon sur les cartes du casino (cosmétique).',
        baseCost: 120_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 40_000,
        emoji: '💡',
    },
    {
        id: 'visual-rainbow',
        name: 'Cookie arc-en-ciel',
        description: 'Le cookie et la roue deviennent arc-en-ciel (cosmétique).',
        baseCost: 400_000,
        cps: 0,
        clickBonus: 0,
        unlockAt: 150_000,
        emoji: '🌈',
    },
];

const CASE_DEFINITIONS: CaseDefinition[] = [
    {
        id: 'basic',
        name: 'Boîte surprise',
        description: 'Petit loot sympa, parfait pour commencer.',
        cost: 1_000,
        emoji: '📦',
        minMultiplier: 0.8,
        maxMultiplier: 2.5,
        jackpotMultiplier: 10,
        jackpotChance: 0.04,
        failMultiplier: 0.3,
    },
    {
        id: 'rare',
        name: 'Caisse rare',
        description: 'Récompenses plus grosses, mais plus risqué.',
        cost: 7_500,
        emoji: '🧰',
        minMultiplier: 0.7,
        maxMultiplier: 3.5,
        jackpotMultiplier: 18,
        jackpotChance: 0.06,
        failMultiplier: 0.25,
    },
    {
        id: 'legendary',
        name: 'Coffre légendaire',
        description: 'Pour les vrais parieurs : gros risques, gros gains.',
        cost: 50_000,
        emoji: '🗝️',
        minMultiplier: 0.6,
        maxMultiplier: 4,
        jackpotMultiplier: 25,
        jackpotChance: 0.08,
        failMultiplier: 0.2,
    },
];

const MIN_WHEEL_BET = 100;

const WHEEL_SEGMENTS: WheelSegment[] = [
    {
        id: 'lose',
        label: 'Perdu',
        description: 'Tu perds ta mise en cookies.',
        weight: 24,
        kind: 'cookies',
        cookiesMultiplier: 0,
    },
    {
        id: 'refund',
        label: 'Remboursé',
        description: 'Tu récupères exactement ta mise.',
        weight: 12,
        kind: 'cookies',
        cookiesMultiplier: 1,
    },
    {
        id: 'small-win',
        label: '+50 %',
        description: 'Petit bénéfice sur ta mise.',
        weight: 8,
        kind: 'cookies',
        cookiesMultiplier: 1.5,
    },
    {
        id: 'double',
        label: 'x2',
        description: 'Tu doubles ta mise.',
        weight: 5,
        kind: 'cookies',
        cookiesMultiplier: 2,
    },
    {
        id: 'jackpot',
        label: 'Jackpot',
        description: 'Énorme pluie de cookies !',
        weight: 1,
        kind: 'cookies',
        cookiesMultiplier: 4,
    },
    {
        id: 'rush-cps',
        label: 'Rush de production',
        description: 'CPS x2 pendant 30 secondes.',
        weight: 6,
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
        weight: 6,
        kind: 'buff',
        cookiesMultiplier: 1,
        buffCpsMultiplier: 1,
        buffClickMultiplier: 3,
        buffDurationSeconds: 20,
    },
];

const ACHIEVEMENTS: Achievement[] = [
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
        description: 'Achète au moins 10 améliorations au total.',
        check: (state) =>
            Object.values(state.upgrades).reduce((sum, q) => sum + (q || 0), 0) >= 10,
    },
    {
        id: 'upgrade-tycoon',
        label: 'Tycoon des upgrades',
        description: 'Achète au moins 50 améliorations au total.',
        check: (state) =>
            Object.values(state.upgrades).reduce((sum, q) => sum + (q || 0), 0) >= 50,
    },
    {
        id: 'ten-cps',
        label: 'Production automatique',
        description: 'Atteins 10 cookies par seconde.',
        check: (_state, effectiveCps) => effectiveCps >= 10,
    },
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
    {
        id: 'high-roller',
        label: 'Gros coup',
        description: 'Gagne au moins 50 000 cookies en un seul coup de chance.',
        check: (state) => state.gamblingStats.biggestWin >= 50_000,
    },
    {
        id: 'all-in',
        label: 'All-in courageux',
        description: 'Tente au moins un all-in dans le casino.',
        check: (state) => state.gamblingStats.allInCount >= 1,
    },
];

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
    },
    theme: 'dark',
    activeBuffs: [],
    gamblingStats: {
        casesOpened: 0,
        spinsPlayed: 0,
        biggestWin: 0,
        highRollPlays: 0,
        allInCount: 0,
    },
    playerName: '',
    leaderboard: [],
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
    let roll = Math.random() * totalWeight;

    for (const item of items) {
        if (roll < item.weight) return item;
        roll -= item.weight;
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
    const baseClick =
        1 +
        UPGRADE_DEFINITIONS.reduce((acc, def) => {
            const quantity = state.upgrades[def.id] ?? 0;
            return acc + def.clickBonus * quantity;
        }, 0);

    if (state.activeBuffs.length === 0) return baseClick;

    const multiplier = state.activeBuffs.reduce(
        (acc, buff) => acc * (buff.multiplierClick || 1),
        1,
    );

    return baseClick * multiplier;
}

function readCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`));
    return match ? decodeURIComponent(match.split('=')[1]) : null;
}

function loadGameState(): GameState {
    if (typeof window === 'undefined') return { ...defaultGameState };

    const safeMerge = (rawState: unknown): GameState => {
        const parsed = rawState as Partial<GameState> & { lastSaved?: number };
        const merged: GameState = {
            ...defaultGameState,
            ...parsed,
            upgrades: {
                ...defaultGameState.upgrades,
                ...(parsed.upgrades ?? {}),
            },
            activeBuffs: parsed.activeBuffs ?? [],
            gamblingStats: {
                ...defaultGameState.gamblingStats,
                ...(parsed.gamblingStats ?? {}),
            },
            playerName: parsed.playerName ?? '',
            leaderboard: parsed.leaderboard ?? [],
        };

        const lastSaved = (rawState as { lastSaved?: number }).lastSaved;
        if (typeof lastSaved === 'number') {
            const elapsedSeconds = (Date.now() - lastSaved) / 1000;
            const cps = computeBaseCps(merged);
            const gained = Math.max(0, cps * elapsedSeconds);

            return {
                ...merged,
                cookies: merged.cookies + gained,
                totalCookies: merged.totalCookies + gained,
                activeBuffs: merged.activeBuffs.filter(
                    (buff) => buff.expiresAt > Date.now(),
                ),
            };
        }

        return merged;
    };

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return safeMerge(JSON.parse(raw));
    } catch (error) {
        console.error('Erreur lors du chargement localStorage :', error);
    }

    try {
        const cookieValue = readCookie(COOKIE_KEY);
        if (cookieValue) return safeMerge(JSON.parse(cookieValue));
    } catch (error) {
        console.error('Erreur lors du chargement via cookie :', error);
    }

    return { ...defaultGameState };
}

function persistGame(state: GameState) {
    if (typeof window === 'undefined') return;

    const payload = {
        ...state,
        lastSaved: Date.now(),
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
        console.error('Erreur de sauvegarde localStorage :', error);
    }

    try {
        if (typeof document !== 'undefined') {
            document.cookie = `${COOKIE_KEY}=${encodeURIComponent(
                JSON.stringify(payload),
            )};path=/;max-age=31536000`;
        }
    } catch (error) {
        console.error('Erreur de sauvegarde dans les cookies :', error);
    }
}

function App() {
    const [game, setGame] = useState<GameState>(() => loadGameState());
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

    const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
    const [playerNameDraft, setPlayerNameDraft] = useState(game.playerName || '');

    const baseCps = useMemo(() => computeBaseCps(game), [game]);
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
                .slice(0, 5),
        [game.leaderboard],
    );

    // Production automatique
    useEffect(() => {
        const interval = window.setInterval(() => {
            setGame((prev) => {
                const now = Date.now();
                const activeBuffs = prev.activeBuffs.filter(
                    (buff) => buff.expiresAt > now,
                );

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
        persistGame(game);
    }, [game]);

    // Thème global
    useEffect(() => {
        if (typeof document === 'undefined') return;
        document.documentElement.dataset.theme = game.theme;
    }, [game.theme]);

    // Pseudo au premier lancement
    useEffect(() => {
        if (!game.playerName) {
            setIsPlayerModalOpen(true);
        }
    }, [game.playerName]);

    const handleCookieClick = () => {
        setGame((prev) => {
            const gain = computeCookiesPerClick(prev);
            return {
                ...prev,
                cookies: prev.cookies + gain,
                totalCookies: prev.totalCookies + gain,
            };
        });

        setIsCookiePressed(true);
        window.setTimeout(() => setIsCookiePressed(false), 120);
    };

    const handleBuyUpgrade = (upgrade: UpgradeDefinition) => {
        setGame((prev) => {
            const quantity = prev.upgrades[upgrade.id] ?? 0;
            const cost = upgrade.baseCost * Math.pow(1.15, quantity);

            if (prev.cookies < cost) return prev;

            return {
                ...prev,
                cookies: prev.cookies - cost,
                upgrades: {
                    ...prev.upgrades,
                    [upgrade.id]: quantity + 1,
                },
            };
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
        }
    };

    const toggleTheme = () => {
        setGame((prev) => ({
            ...prev,
            theme: prev.theme === 'dark' ? 'light' : 'dark',
        }));
    };

    const handleSavePlayerName = () => {
        const trimmed = playerNameDraft.trim();
        const safeName = trimmed || 'Joueur';
        setGame((prev) => ({
            ...prev,
            playerName: safeName,
        }));
        setIsPlayerModalOpen(false);
    };

    const currentWheelMaxBet = Math.max(0, Math.floor(game.cookies));

    const handleWheelSpin = () => {
        if (isWheelSpinning) return;
        if (currentWheelMaxBet < MIN_WHEEL_BET) return;

        setIsWheelSpinning(true);

        let spinResult: LastWheelResult | null = null;
        const segment = pickWeighted(WHEEL_SEGMENTS);

        setGame((prev) => {
            const maxBet = Math.floor(prev.cookies);
            const normalizedBet = Math.max(
                MIN_WHEEL_BET,
                Math.min(Math.floor(wheelBet), maxBet),
            );

            if (normalizedBet <= 0 || maxBet <= 0) {
                spinResult = null;
                return prev;
            }

            let cookies = prev.cookies - normalizedBet;
            let buffs = prev.activeBuffs;

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

            if (delta > 0) {
                biggestWin = Math.max(biggestWin, delta);
                const entry: LeaderboardEntry = {
                    id: `wheel-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    playerName: prev.playerName || 'Invité',
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
                isJackpot: segment.id === 'jackpot',
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
                } else if (roll < caseDef.jackpotChance + 0.15) {
                    rewardMultiplier = caseDef.failMultiplier;
                    isLoss = true;
                } else {
                    const r = Math.random();
                    rewardMultiplier =
                        caseDef.minMultiplier +
                        r * (caseDef.maxMultiplier - caseDef.minMultiplier);
                }

                const reward = bet * rewardMultiplier;
                cookies += reward;

                const delta = cookies - prev.cookies;

                let biggestWin = prev.gamblingStats.biggestWin;
                let leaderboard = prev.leaderboard;

                if (delta > 0) {
                    biggestWin = Math.max(biggestWin, delta);
                    const entry: LeaderboardEntry = {
                        id: `case-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                        playerName: prev.playerName || 'Invité',
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
        let highRollResult: LastHighRollResult | null = null;

        setGame((prev) => {
            const maxBet = Math.floor(prev.cookies);
            if (maxBet <= 0) {
                highRollResult = null;
                return prev;
            }

            const bet = allIn
                ? maxBet
                : Math.max(1_000, Math.min(maxBet, Math.floor(prev.cookies * 0.25)));

            if (bet <= 0) {
                highRollResult = null;
                return prev;
            }

            const win = Math.random() < 0.5;
            const cookies = win ? prev.cookies + bet : prev.cookies - bet;
            const delta = cookies - prev.cookies;

            let biggestWin = prev.gamblingStats.biggestWin;
            let leaderboard = prev.leaderboard;

            if (win && delta > 0) {
                biggestWin = Math.max(biggestWin, delta);
                const entry: LeaderboardEntry = {
                    id: `highroll-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    playerName: prev.playerName || 'Invité',
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
    const unlockedAchievementIds = new Set(unlockedAchievements.map((a) => a.id));

    const closeOverlay = () => setOverlay(null);

    return (
        <div className={appClassName}>
            <header className="app-header">
                <div className="app-title">
                    <span className="app-logo">🍪</span>
                    <div>
                        <h1>Imtmortels Cookie Casino</h1>
                        <p>
                            Clique, upgrade, teste des mécaniques de casino… mais ici tout
                            reste virtuel. Utilise-le comme démo, pas comme habitude.
                        </p>
                    </div>
                </div>

                <div className="app-actions">
                    <div className="player-chip">
                        <span className="player-chip-label">Joueur</span>
                        <span className="player-chip-name">
                            {game.playerName || 'Invité'}
                        </span>
                        <button
                            type="button"
                            className="player-chip-edit"
                            onClick={() => {
                                setPlayerNameDraft(game.playerName || '');
                                setIsPlayerModalOpen(true);
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
                        {game.theme === 'dark' ? '☀️ Mode clair' : '🌙 Mode sombre'}
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

            <main className="game-layout">
                {/* Colonne gauche : cookie + succès */}
                <section className="cookie-panel">
                    <div className="cookie-card">
                        <div className="cookie-aura" />
                        <div className="cookie-wrapper">
                            <button
                                type="button"
                                className={`cookie-button ${isCookiePressed ? 'cookie-button--pressed' : ''
                                    }`}
                                onClick={handleCookieClick}
                            >
                                <div className="cookie-ring">
                                    <div className="cookie-ring-inner" />
                                </div>
                                <div className="cookie">
                                    <div className="cookie-chip cookie-chip--1" />
                                    <div className="cookie-chip cookie-chip--2" />
                                    <div className="cookie-chip cookie-chip--3" />
                                    <div className="cookie-chip cookie-chip--4" />
                                    <div className="cookie-gloss" />
                                </div>
                            </button>
                            <p className="cookie-helper">
                                Clique pour générer des cookies, investis-les dans les
                                améliorations puis explore les jeux du casino cookie. ✨
                            </p>
                        </div>

                        <div className="stats-card">
                            <div className="stat">
                                <span className="stat-label">Cookies</span>
                                <span className="stat-value">
                                    {formatNumber(game.cookies, 1)}
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat-label">Total produit</span>
                                <span className="stat-value">
                                    {formatNumber(game.totalCookies, 1)}
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat-label">Par clic</span>
                                <span className="stat-value">
                                    +{formatNumber(cookiesPerClick, 1)}
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat-label">Par seconde</span>
                                <span className="stat-value">
                                    {formatNumber(effectiveCps, 1)} /s
                                </span>
                                <span className="stat-sub">
                                    Base : {formatNumber(baseCps, 1)} /s
                                </span>
                            </div>
                        </div>

                        {game.activeBuffs.length > 0 && (
                            <div className="buffs-bar">
                                {game.activeBuffs.map((buff) => {
                                    const remaining = Math.max(
                                        0,
                                        Math.round((buff.expiresAt - Date.now()) / 1000),
                                    );

                                    return (
                                        <div key={buff.id} className="buff-pill">
                                            <span>{buff.label}</span>
                                            <span className="buff-pill-timer">⏱ {remaining}s</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <section className="achievements-card">
                        <h2 className="section-title">Succès</h2>
                        <div className="achievements-list">
                            {ACHIEVEMENTS.map((ach) => {
                                const unlocked = unlockedAchievementIds.has(ach.id);
                                return (
                                    <div
                                        key={ach.id}
                                        className={`achievement ${unlocked ? 'achievement--unlocked' : 'achievement--locked'
                                            }`}
                                    >
                                        <span className="achievement-dot" />
                                        <div className="achievement-text">
                                            <span className="achievement-label">{ach.label}</span>
                                            <span className="achievement-description">
                                                {ach.description}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </section>

                {/* Colonne droite : shop + casino + leaderboard */}
                <section className="right-column">
                    <section className="shop-panel">
                        <h2 className="section-title">Améliorations</h2>
                        <p className="section-subtitle">
                            Investis tes cookies pour booster ta production ou débloquer des
                            effets visuels. Le prix augmente à chaque achat.
                        </p>

                        <div className="shop-list">
                            {UPGRADE_DEFINITIONS.filter(
                                (upgrade) => game.totalCookies >= upgrade.unlockAt,
                            ).map((upgrade) => {
                                const quantity = game.upgrades[upgrade.id] ?? 0;
                                const cost = upgrade.baseCost * Math.pow(1.15, quantity);
                                const affordable = game.cookies >= cost;

                                return (
                                    <button
                                        type="button"
                                        key={upgrade.id}
                                        className={`shop-item ${affordable ? 'shop-item--affordable' : ''
                                            }`}
                                        onClick={() => handleBuyUpgrade(upgrade)}
                                        disabled={!affordable}
                                    >
                                        <div className="shop-item-main">
                                            <span className="shop-item-emoji">{upgrade.emoji}</span>
                                            <div className="shop-item-text">
                                                <span className="shop-item-name">{upgrade.name}</span>
                                                <span className="shop-item-description">
                                                    {upgrade.description}
                                                </span>
                                                <div className="shop-item-effects">
                                                    {upgrade.cps > 0 && (
                                                        <span>+{upgrade.cps} /s</span>
                                                    )}
                                                    {upgrade.clickBonus > 0 && (
                                                        <span>+{upgrade.clickBonus} par clic</span>
                                                    )}
                                                    {upgrade.cps === 0 &&
                                                        upgrade.clickBonus === 0 && (
                                                            <span>Cosmétique uniquement ✨</span>
                                                        )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shop-item-meta">
                                            <span className="shop-item-cost">
                                                {formatNumber(cost, 1)} cookies
                                            </span>
                                            <span className="shop-item-qty">x{quantity}</span>
                                        </div>
                                    </button>
                                );
                            })}

                            {UPGRADE_DEFINITIONS.every(
                                (upgrade) => game.totalCookies < upgrade.unlockAt,
                            ) && (
                                    <p className="shop-empty">
                                        Clique encore un peu pour débloquer ta première amélioration.{' '}
                                        💡
                                    </p>
                                )}
                        </div>
                    </section>

                    <section className="casino-section">
                        <h2 className="section-title">Casino cookie</h2>
                        <p className="section-subtitle">
                            Tous les jeux utilisent des cookies virtuels. Aucune mise réelle
                            ici, c’est un bac à sable pour comprendre les mécaniques.
                        </p>

                        <div className="casino-grid">
                            {/* ROUE DE LA CHANCE */}
                            <div className="casino-card">
                                <div className="casino-card-header">
                                    <span className="casino-card-emoji">🎰</span>
                                    <div>
                                        <h3 className="casino-card-title">Roue de la chance</h3>
                                        <p className="casino-card-subtitle">
                                            Choisis ta mise, lance la roue et tente des jackpots ou
                                            des boosts temporaires.
                                        </p>
                                    </div>
                                </div>

                                <div className="wheel-layout">
                                    <div className="wheel-wrapper">
                                        <div
                                            className={`wheel ${isWheelSpinning ? 'wheel--spinning' : ''
                                                }`}
                                        >
                                            <div className="wheel-inner" />
                                        </div>
                                        <div className="wheel-pointer" />
                                    </div>
                                    <div className="wheel-actions">
                                        <div className="wheel-bet-row">
                                            <label className="wheel-bet-label">
                                                Mise :
                                                <input
                                                    type="number"
                                                    className="wheel-bet-input"
                                                    min={MIN_WHEEL_BET}
                                                    max={currentWheelMaxBet}
                                                    value={
                                                        currentWheelMaxBet === 0
                                                            ? ''
                                                            : Math.min(
                                                                wheelBet || 0,
                                                                currentWheelMaxBet,
                                                            )
                                                    }
                                                    onChange={(e) =>
                                                        setWheelBet(
                                                            Number.isNaN(Number(e.target.value))
                                                                ? MIN_WHEEL_BET
                                                                : Number(e.target.value),
                                                        )
                                                    }
                                                    placeholder={MIN_WHEEL_BET.toString()}
                                                />
                                                <span className="wheel-bet-unit">cookies</span>
                                            </label>
                                            <div className="wheel-bet-buttons">
                                                <button
                                                    type="button"
                                                    className="mini-chip"
                                                    onClick={() =>
                                                        setWheelBet(
                                                            Math.min(
                                                                Math.max(MIN_WHEEL_BET, 500),
                                                                currentWheelMaxBet,
                                                            ),
                                                        )
                                                    }
                                                >
                                                    500
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mini-chip"
                                                    onClick={() =>
                                                        setWheelBet(
                                                            Math.min(
                                                                Math.max(MIN_WHEEL_BET, 5_000),
                                                                currentWheelMaxBet,
                                                            ),
                                                        )
                                                    }
                                                >
                                                    5k
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mini-chip"
                                                    onClick={() =>
                                                        setWheelBet(
                                                            Math.min(
                                                                Math.max(MIN_WHEEL_BET, 50_000),
                                                                currentWheelMaxBet,
                                                            ),
                                                        )
                                                    }
                                                >
                                                    50k
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mini-chip mini-chip--danger"
                                                    disabled={currentWheelMaxBet < MIN_WHEEL_BET}
                                                    onClick={() =>
                                                        setWheelBet(
                                                            Math.max(MIN_WHEEL_BET, currentWheelMaxBet),
                                                        )
                                                    }
                                                >
                                                    All-in
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="primary-button"
                                            onClick={handleWheelSpin}
                                            disabled={
                                                isWheelSpinning ||
                                                currentWheelMaxBet < MIN_WHEEL_BET
                                            }
                                        >
                                            {isWheelSpinning ? '...' : 'Lancer la roue'}
                                        </button>
                                        <p className="wheel-price">
                                            Mise min : {MIN_WHEEL_BET} cookies · Solde max :{' '}
                                            {formatNumber(currentWheelMaxBet, 0)}
                                        </p>
                                        <ul className="wheel-odds">
                                            <li>Perte totale de la mise possible</li>
                                            <li>Remboursé ou petit bénéfice</li>
                                            <li>Jackpot rare mais massif</li>
                                            <li>Boosts temporaires (CPS / clic)</li>
                                        </ul>
                                    </div>
                                </div>

                                {lastWheelResult && (
                                    <p
                                        className={`casino-result ${lastWheelResult.delta >= 0
                                                ? 'casino-result--positive'
                                                : 'casino-result--negative'
                                            }`}
                                    >
                                        Résultat : {lastWheelResult.label} · Mise :{' '}
                                        {formatNumber(lastWheelResult.spent, 1)} ·{' '}
                                        {lastWheelResult.delta >= 0 ? '+' : ''}
                                        {formatNumber(lastWheelResult.delta, 1)} cookies
                                        {lastWheelResult.buffLabel
                                            ? ` · Buff : ${lastWheelResult.buffLabel}`
                                            : ''}
                                    </p>
                                )}
                            </div>

                            {/* CASES / LOOTBOXES */}
                            <div className="casino-card">
                                <div className="casino-card-header">
                                    <span className="casino-card-emoji">🎁</span>
                                    <div>
                                        <h3 className="casino-card-title">Openings de caisses</h3>
                                        <p className="casino-card-subtitle">
                                            Choisis une caisse, paye son prix et découvre ton loot :
                                            petites pertes, bons multiplicateurs ou jackpot.
                                        </p>
                                    </div>
                                </div>

                                <div className="case-list">
                                    {CASE_DEFINITIONS.map((caseDef) => {
                                        const affordable = game.cookies >= caseDef.cost;
                                        const isOpening = openingCaseId === caseDef.id;

                                        return (
                                            <button
                                                key={caseDef.id}
                                                type="button"
                                                className={`case-card ${affordable ? 'case-card--affordable' : ''
                                                    } ${isOpening ? 'case-card--opening' : ''}`}
                                                onClick={() => handleOpenCase(caseDef)}
                                                disabled={!affordable || isOpening}
                                            >
                                                <div className="case-main">
                                                    <span className="case-emoji">{caseDef.emoji}</span>
                                                    <div className="case-text">
                                                        <span className="case-name">{caseDef.name}</span>
                                                        <span className="case-description">
                                                            {caseDef.description}
                                                        </span>
                                                        <div className="case-odds">
                                                            <span>
                                                                Jackpot :{' '}
                                                                {Math.round(
                                                                    caseDef.jackpotChance * 100,
                                                                )}
                                                                %
                                                            </span>
                                                            <span>
                                                                Payout moyen ≈{' '}
                                                                {Math.round(
                                                                    ((caseDef.minMultiplier +
                                                                        caseDef.maxMultiplier) /
                                                                        2) *
                                                                    100,
                                                                )}
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="case-meta">
                                                    <span className="case-cost">
                                                        {formatNumber(caseDef.cost, 0)} cookies
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {lastCaseResult && (
                                    <p
                                        className={`casino-result ${lastCaseResult.reward - lastCaseResult.spent >= 0
                                                ? 'casino-result--positive'
                                                : 'casino-result--negative'
                                            }`}
                                    >
                                        Dernière caisse : {lastCaseResult.caseName} · Gain :{' '}
                                        {formatNumber(lastCaseResult.reward, 1)} cookies (
                                        {lastCaseResult.reward - lastCaseResult.spent >= 0
                                            ? '+'
                                            : ''}
                                        {formatNumber(
                                            lastCaseResult.reward - lastCaseResult.spent,
                                            1,
                                        )}{' '}
                                        net){' '}
                                        {lastCaseResult.isJackpot
                                            ? '🎉 JACKPOT !'
                                            : lastCaseResult.isLoss
                                                ? '😬 Pas ouf...'
                                                : ''}
                                    </p>
                                )}
                            </div>

                            {/* COUP DE POKER / ALL-IN */}
                            <div className="casino-card">
                                <div className="casino-card-header">
                                    <span className="casino-card-emoji">🃏</span>
                                    <div>
                                        <h3 className="casino-card-title">Coup de poker</h3>
                                        <p className="casino-card-subtitle">
                                            50% de chances de doubler, 50% de tout perdre. Mode
                                            normal ou all-in, toujours en cookies virtuels.
                                        </p>
                                    </div>
                                </div>

                                <div className="highroll-layout">
                                    <div className="highroll-actions">
                                        <button
                                            type="button"
                                            className="secondary-button"
                                            onClick={() => handleHighRoll(false)}
                                            disabled={game.cookies < 1_000}
                                        >
                                            Coup de poker (mise élevée)
                                        </button>
                                        <button
                                            type="button"
                                            className="secondary-button secondary-button--danger"
                                            onClick={() => handleHighRoll(true)}
                                            disabled={game.cookies <= 0}
                                        >
                                            All-in 50 / 50
                                        </button>
                                        <p className="highroll-note">
                                            Mise standard ≈ 25% de ton solde (min 1 000 cookies).
                                            All-in : tu mises absolument tout.
                                        </p>
                                    </div>
                                </div>

                                {lastHighRoll && (
                                    <p
                                        className={`casino-result ${lastHighRoll.delta >= 0
                                                ? 'casino-result--positive'
                                                : 'casino-result--negative'
                                            }`}
                                    >
                                        Coup de poker{' '}
                                        {lastHighRoll.allIn ? 'ALL-IN' : 'standard'} · Mise :{' '}
                                        {formatNumber(lastHighRoll.bet, 1)} · Résultat :{' '}
                                        {lastHighRoll.outcome === 'win' ? 'Victoire 🎉' : 'Perdu 😬'}{' '}
                                        ({lastHighRoll.delta >= 0 ? '+' : ''}
                                        {formatNumber(lastHighRoll.delta, 1)} cookies)
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="casino-stats">
                            <div className="casino-stat">
                                <span className="casino-stat-label">Spins joués</span>
                                <span className="casino-stat-value">
                                    {game.gamblingStats.spinsPlayed}
                                </span>
                            </div>
                            <div className="casino-stat">
                                <span className="casino-stat-label">Caisses ouvertes</span>
                                <span className="casino-stat-value">
                                    {game.gamblingStats.casesOpened}
                                </span>
                            </div>
                            <div className="casino-stat">
                                <span className="casino-stat-label">Coups de poker</span>
                                <span className="casino-stat-value">
                                    {game.gamblingStats.highRollPlays}
                                </span>
                            </div>
                            <div className="casino-stat">
                                <span className="casino-stat-label">All-in tentés</span>
                                <span className="casino-stat-value">
                                    {game.gamblingStats.allInCount}
                                </span>
                            </div>
                            <div className="casino-stat">
                                <span className="casino-stat-label">Plus gros gain</span>
                                <span className="casino-stat-value">
                                    {formatNumber(game.gamblingStats.biggestWin, 1)} cookies
                                </span>
                            </div>
                        </div>

                        <section className="leaderboard-section">
                            <div className="leaderboard-card">
                                <h3 className="leaderboard-title">Top gains du jour</h3>
                                {todayTopWins.length === 0 ? (
                                    <p className="leaderboard-empty">
                                        Aucun gros gain enregistré aujourd&apos;hui. À toi de
                                        briller ✨
                                    </p>
                                ) : (
                                    <ul className="leaderboard-list">
                                        {todayTopWins.map((entry, index) => (
                                            <li key={entry.id} className="leaderboard-row">
                                                <span className="leaderboard-rank">
                                                    {index === 0
                                                        ? '🥇'
                                                        : index === 1
                                                            ? '🥈'
                                                            : index === 2
                                                                ? '🥉'
                                                                : `#${index + 1}`}
                                                </span>
                                                <span className="leaderboard-name">
                                                    {entry.playerName}
                                                </span>
                                                <span className="leaderboard-amount">
                                                    {formatNumber(entry.amount, 1)}
                                                </span>
                                                <span className="leaderboard-source">
                                                    {entry.source === 'wheel'
                                                        ? 'Roue'
                                                        : entry.source === 'case'
                                                            ? 'Caisse'
                                                            : 'Coup de poker'}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="leaderboard-card">
                                <h3 className="leaderboard-title">Records absolus (local)</h3>
                                {allTimeTopWins.length === 0 ? (
                                    <p className="leaderboard-empty">
                                        Pas encore de record enregistré sur ce navigateur.
                                    </p>
                                ) : (
                                    <>
                                        <div className="leaderboard-podium">
                                            <div className="podium-column podium-column--silver">
                                                {allTimeTopWins[1] && (
                                                    <>
                                                        <div className="podium-medal">🥈</div>
                                                        <div className="podium-name">
                                                            {allTimeTopWins[1].playerName}
                                                        </div>
                                                        <div className="podium-amount">
                                                            {formatNumber(allTimeTopWins[1].amount, 1)}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <div className="podium-column podium-column--gold">
                                                {allTimeTopWins[0] && (
                                                    <>
                                                        <div className="podium-medal">🥇</div>
                                                        <div className="podium-name">
                                                            {allTimeTopWins[0].playerName}
                                                        </div>
                                                        <div className="podium-amount">
                                                            {formatNumber(allTimeTopWins[0].amount, 1)}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <div className="podium-column podium-column--bronze">
                                                {allTimeTopWins[2] && (
                                                    <>
                                                        <div className="podium-medal">🥉</div>
                                                        <div className="podium-name">
                                                            {allTimeTopWins[2].playerName}
                                                        </div>
                                                        <div className="podium-amount">
                                                            {formatNumber(allTimeTopWins[2].amount, 1)}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <ul className="leaderboard-list">
                                            {allTimeTopWins.map((entry, index) => (
                                                <li key={entry.id} className="leaderboard-row">
                                                    <span className="leaderboard-rank">
                                                        {index === 0
                                                            ? '🥇'
                                                            : index === 1
                                                                ? '🥈'
                                                                : index === 2
                                                                    ? '🥉'
                                                                    : `#${index + 1}`}
                                                    </span>
                                                    <span className="leaderboard-name">
                                                        {entry.playerName}
                                                    </span>
                                                    <span className="leaderboard-amount">
                                                        {formatNumber(entry.amount, 1)}
                                                    </span>
                                                    <span className="leaderboard-source">
                                                        {entry.source === 'wheel'
                                                            ? 'Roue'
                                                            : entry.source === 'case'
                                                                ? 'Caisse'
                                                                : 'Coup de poker'}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <p className="leaderboard-note">
                                    Classement stocké uniquement dans ton navigateur (pas de
                                    serveur, pas de compte).
                                </p>
                            </div>
                        </section>
                    </section>
                </section>
            </main>

            <footer className="app-footer">
                <span>
                    Fait avec ❤️ en React · Cookies virtuels uniquement · Pense à faire
                    des pauses.
                </span>
            </footer>

            {/* Modal pseudo joueur */}
            {isPlayerModalOpen && (
                <div className="overlay overlay--visible">
                    <div
                        className="overlay-backdrop"
                        onClick={() => setIsPlayerModalOpen(false)}
                    />
                    <div className="overlay-dialog">
                        <h2>Choisis ton pseudo</h2>
                        <p>
                            Ton nom sera utilisé dans le classement local de ce navigateur.
                        </p>
                        <input
                            type="text"
                            className="player-input"
                            value={playerNameDraft}
                            onChange={(e) => setPlayerNameDraft(e.target.value)}
                            maxLength={20}
                            placeholder="Ex : RoiDuCookie"
                        />
                        <div className="overlay-actions">
                            <button
                                type="button"
                                className="secondary-button"
                                onClick={() => setIsPlayerModalOpen(false)}
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                className="primary-button"
                                onClick={handleSavePlayerName}
                            >
                                Valider
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay résultat casino */}
            {overlay && (
                <div className="overlay overlay--visible">
                    <div className="overlay-backdrop" onClick={closeOverlay} />
                    <div className="overlay-dialog overlay-dialog--result">
                        {overlay.kind === 'wheel' && (
                            <>
                                <h2>Résultat de la roue</h2>
                                <div className="overlay-wheel">
                                    <div className="wheel wheel--overlay">
                                        <div className="wheel-inner" />
                                    </div>
                                    <div className="wheel-pointer wheel-pointer--overlay" />
                                </div>
                                <p className="overlay-main">
                                    {overlay.result.label} · Mise :{' '}
                                    {formatNumber(overlay.result.spent, 1)} ·{' '}
                                    {overlay.result.delta >= 0 ? '+' : ''}
                                    {formatNumber(overlay.result.delta, 1)} cookies
                                </p>
                                {overlay.result.buffLabel && (
                                    <p className="overlay-sub">
                                        Buff activé : {overlay.result.buffLabel}
                                    </p>
                                )}
                            </>
                        )}

                        {overlay.kind === 'case' && (
                            <>
                                <h2>Résultat de la caisse</h2>
                                <div className="overlay-case-rail">
                                    <div className="overlay-case-strip">
                                        <div className="overlay-case-item overlay-case-item--bad">
                                            x0,3
                                        </div>
                                        <div className="overlay-case-item">x0,8</div>
                                        <div className="overlay-case-item">x1,2</div>
                                        <div className="overlay-case-item">x2</div>
                                        <div className="overlay-case-item overlay-case-item--jackpot">
                                            JACKPOT
                                        </div>
                                        <div className="overlay-case-item">x1,5</div>
                                        <div className="overlay-case-item overlay-case-item--bad">
                                            x0,3
                                        </div>
                                    </div>
                                    <div className="overlay-case-cursor" />
                                </div>
                                <p className="overlay-main">
                                    {overlay.result.caseName} · Gain :{' '}
                                    {formatNumber(overlay.result.reward, 1)} cookies (
                                    {overlay.result.reward - overlay.result.spent >= 0 ? '+' : ''}
                                    {formatNumber(
                                        overlay.result.reward - overlay.result.spent,
                                        1,
                                    )}{' '}
                                    net)
                                </p>
                                {overlay.result.isJackpot && (
                                    <p className="overlay-sub">🎉 JACKPOT de cookies !</p>
                                )}
                            </>
                        )}

                        {overlay.kind === 'highroll' && (
                            <>
                                <h2>Coup de poker</h2>
                                <p className="overlay-main">
                                    {overlay.result.allIn ? 'ALL-IN' : 'Mise élevée'} · Mise :{' '}
                                    {formatNumber(overlay.result.bet, 1)} · Résultat :{' '}
                                    {overlay.result.outcome === 'win'
                                        ? 'Victoire 🎉'
                                        : 'Défaite 😬'}{' '}
                                    ({overlay.result.delta >= 0 ? '+' : ''}
                                    {formatNumber(overlay.result.delta, 1)} cookies)
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
