import { connection } from "../utils/connection.js";

export const findCompanyById = async (id) =>
  await connection.table("companies").where("id", id).select().first();
