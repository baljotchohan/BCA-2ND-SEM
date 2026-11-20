import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // Study notes include literal quotation marks and apostrophes.
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    },
  },
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);
