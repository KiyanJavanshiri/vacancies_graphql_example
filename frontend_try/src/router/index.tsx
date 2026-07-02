import { Routes, Route } from "react-router";
import { JobsPage } from "../pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<JobsPage />} />
    </Routes>
  );
};

export default RootRouter;
