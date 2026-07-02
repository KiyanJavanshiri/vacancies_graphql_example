import { GET_JOBS } from "@/lib/graphql/jobQueries";
import { useQuery } from "@apollo/client/react";

const JobsList = () => {
  const { data: jobs, loading, error } = useQuery(GET_JOBS);

  if (loading) {
    return <div className="loader"></div>;
  }

  return <ul>{jobs?.jobs.map(job => (
    
  ))}</ul>;
};
