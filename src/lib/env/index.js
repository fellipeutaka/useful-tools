import { createEnv } from "@nobara/next";
import { minLength, optional, picklist, string } from "valibot";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    // Currency
    CURRENCY_API_KEY: string([minLength(1)]),
    NODE_ENV: optional(
      picklist(["development", "test", "production"]),
      "development",
    ),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {},

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtime (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // Server-side env vars
    // Currency
    CURRENCY_API_KEY: process.env.CURRENCY_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
