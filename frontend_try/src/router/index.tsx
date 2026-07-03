import { Routes, Route } from "react-router";
import { JobPage, JobsPage } from "../pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<JobsPage />} />
      <Route path={"/jobs/:id"} element={<JobPage />} />
    </Routes>
  );
};

export default RootRouter;
