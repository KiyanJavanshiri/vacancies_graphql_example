import { findCompanyById } from "../queries/companies.js";
import { findJobById, findJobs } from "../queries/jobs.js";

export const resolvers = {
  Query: {
    job: (_, { id }) => findJobById(id),
    jobs: () => findJobs(),
  },

  Job: {
    company: (parent) => findCompanyById(parent.company_id),
  },

  Company: {
    staffMembers: (parent) => parent.staff_members,
  },
};
