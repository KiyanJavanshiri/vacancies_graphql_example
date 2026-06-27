import knex from "knex";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "../../db/vacancies.sqlite"),
  },
  useNullAsDefault: true,
});