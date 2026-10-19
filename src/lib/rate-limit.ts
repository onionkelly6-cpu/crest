import { Ratelimit } from "@upstash/ratelimit";
import { KEY_PREFIX, unprefixedRedis } from "@/lib/redis";

// Ratelimit runs Lua scripts (EVAL/EVALSHA), whose first argument is the
// script rather than a key, so it gets the raw client and its own prefix
// under KEY_PREFIX instead of the key-prefixing `redis` Proxy. That keeps
// its counters inside this app's partition of the shared database.

// Wired into the sign-in/magic-link routes in Milestone 3.
export const authRateLimit = new Ratelimit({
  redis: unprefixedRedis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
  prefix: `${KEY_PREFIX}ratelimit:auth`,
});

// Wired into the public intake form in Milestone 7.
export const intakeRateLimit = new Ratelimit({
  redis: unprefixedRedis,
  limiter: Ratelimit.slidingWindow(3, "60 s"),
  prefix: `${KEY_PREFIX}ratelimit:intake`,
});
