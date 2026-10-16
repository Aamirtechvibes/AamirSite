type Entry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, Entry>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    const entry = { count: 1, resetAt: now + windowMs };
    store.set(key, entry);

    return {
      success: true,
      limit,
      remaining: Math.max(limit - entry.count, 0),
      resetAt: entry.resetAt,
    };
  }

  current.count += 1;
  store.set(key, current);

  return {
    success: current.count <= limit,
    limit,
    remaining: Math.max(limit - current.count, 0),
    resetAt: current.resetAt,
  };
}
