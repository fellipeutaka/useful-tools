import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CURRENCY_API_KEY: z.string().regex(/^[a-f0-9]{32}$/),
  },
  runtimeEnv: process.env,
});
