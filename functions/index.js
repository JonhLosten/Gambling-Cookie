const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');

admin.initializeApp();
const db = admin.firestore();

function hashValue(value) {
    if (!value) return null;
    return crypto.createHash('sha256').update(String(value)).digest('hex');
}

function safePayload(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const safe = {};
    for (const [key, value] of Object.entries(raw).slice(0, 20)) {
        const k = key.slice(0, 64);
        if (typeof value === 'number' || typeof value === 'boolean') {
            safe[k] = value;
            continue;
        }
        if (typeof value === 'string') {
            safe[k] = value.slice(0, 256);
        }
    }
    return Object.keys(safe).length ? safe : null;
}

exports.logGameplay = functions.https.onCall(async (data, context) => {
    const now = Date.now();
    const type = typeof data?.type === 'string' ? data.type.slice(0, 64) : 'unknown';
    const ts = Number.isFinite(data?.ts) ? data.ts : now;
    const sessionId = typeof data?.sessionId === 'string' ? data.sessionId.slice(0, 128) : null;
    const playerName = typeof data?.playerName === 'string' ? data.playerName.slice(0, 64) : null;
    const clientUserId = typeof data?.userId === 'string' ? data.userId.slice(0, 128) : null;
    const userId = context.auth?.uid ?? clientUserId ?? null;
    const payload = safePayload(data?.payload);

    const userAgent = context.rawRequest?.get('user-agent') || '';
    const ip = context.rawRequest?.headers['fastly-client-ip'] || context.rawRequest?.ip || '';

    const doc = {
        type,
        ts,
        receivedAt: admin.firestore.Timestamp.now(),
        userId,
        sessionId,
        playerName,
        payload,
        uaHash: hashValue(userAgent),
        ipHash: hashValue(ip),
    };

    await db.collection('logs_gameplay').add(doc);
    return { ok: true };
});
