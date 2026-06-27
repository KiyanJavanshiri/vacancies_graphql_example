import { findJobById, findJobs } from "../queries/jobs";

export const resolvers = {
  Query: {
    job: (_, { id }) => findJobById(id),
    jobs: () => findJobs(),
  },

  Job: {
    company: () => {
      return {
        id: 1,
        city: "Lviv",
        bio: "wdqwq",
        name: "qdwdw",
        staffMembers: 100,
      };
    },
  },
};
