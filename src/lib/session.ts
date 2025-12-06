const SESSION_KEY = 'imtmortels_session_id';

function generateSessionId(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    const random = Math.random().toString(36).slice(2);
    const timestamp = Date.now().toString(36);
    return `${timestamp}-${random}`;
}

export function ensureSessionId(): string | null {
    if (typeof window === 'undefined') return null;
    let id = window.localStorage.getItem(SESSION_KEY);
    if (!id) {
        id = generateSessionId();
        window.localStorage.setItem(SESSION_KEY, id);
    }
    return id;
}

export function getSessionId(): string | null {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(SESSION_KEY);
}
