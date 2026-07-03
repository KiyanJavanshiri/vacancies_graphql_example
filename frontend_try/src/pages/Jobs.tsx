import JobsList from "@/compositions/JobsList";
import { Suspense } from "react";

const Jobs = () => {
  return (
    <>
      <h1 className="mb-6 text-2xl leading-normal font-semibold text-black">
        Jobs
      </h1>
      <Suspense
        fallback={
          <p className="absolute top-1/2 left-1/2 -translate-1/2">Loading...</p>
        }
      >
        <JobsList />
      </Suspense>
    </>
  );
};

export default Jobs;
