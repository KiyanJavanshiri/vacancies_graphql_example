import { useParams } from "react-router";

const Job = () => {
  const { id } = useParams();
  return <p>{id}</p>;
};

export default Job;
