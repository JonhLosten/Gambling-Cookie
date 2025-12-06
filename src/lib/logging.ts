import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

export type GameplayLog = {
    type: string;
    ts: number;
    userId: string | null;
    sessionId: string | null;
    playerName?: string | null;
    payload?: Record<string, unknown>;
};

export async function sendGameplayLog(entry: GameplayLog): Promise<void> {
    try {
        const callable = httpsCallable(functions, 'logGameplay');
        await callable(entry);
    } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('Envoi du log de gameplay échoué (ignoré pour UX)', error);
        }
    }
}
