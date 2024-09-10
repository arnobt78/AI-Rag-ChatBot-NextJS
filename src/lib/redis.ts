import { Redis } from "@upstash/redis";

// Create a new Redis instance from the environment variables to get started with the Redis client from Upstash
export const redis = Redis.fromEnv();
