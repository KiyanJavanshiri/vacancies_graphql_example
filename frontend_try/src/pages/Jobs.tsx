import { GET_JOBS } from "@/lib/graphql/jobQueries";
import { useQuery } from "@apollo/client/react";
import { Suspense } from "react";

const Jobs = () => {
  return (
    <h1>
      Jobs
    </h1>
    <Suspense>
      <JobsList />
    </Suspense>
  );
};

export default Jobs;
