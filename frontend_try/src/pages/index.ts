import { lazy } from "react";

const JobsPage = lazy(() => import("./Jobs.tsx"));
const JobPage = lazy(() => import("./Job.tsx"));

export { JobsPage, JobPage };
