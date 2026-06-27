import { connection } from "../utils/connection.js";

export const findJobById = async (id) =>
  await connection.table("jobs").where("id", id).select().first();

export const findJobs = async () => await connection.table("jobs").select();
