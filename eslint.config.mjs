import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Ignore specific directories instead of all files
    ignores: [
      ".next/**/*",
      "node_modules/**/*",
      "src/generated/**/*",
      "public/**/*",
    ],
  },
];

export default eslintConfig;
