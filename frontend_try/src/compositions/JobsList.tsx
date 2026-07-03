import JobItem from "@/components/JobItem";
import { GET_JOBS } from "@/lib/graphql/jobQueries";
import { useQuery } from "@apollo/client/react";

const JobsList = () => {
  const { data: jobs, loading, error } = useQuery(GET_JOBS);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <p>somthing went wrong</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-6">
      {jobs?.jobs.map((job) => (
        <li key={job.id}>
          <JobItem vacancy={job} />
        </li>
      ))}
    </ul>
  );
};

export default JobsList;
