import { connection } from "../utils/connection";

export const findJobById = async (id) =>
  await connection.table("jobs").where("id", id).select();

export const findJobs = async () => await connection.table("jobs").select();
