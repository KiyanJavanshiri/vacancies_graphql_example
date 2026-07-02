export type TJob = {
  __typename: "Job";
  id: number;
  title: string;
  description?: string;
  company: TCompany;
  city: string;
  salary: number;
};

export type TCompany = {
  __typename: "Company";
  id: number;
  name: string;
  bio: string;
  staffMembers: number;
};

export type TGetJobsQuery = {
  jobs: Pick<TJob, "id" | "title" | "salary" | "city"> &
    {
      company: Pick<TCompany, "name">;
    }[];
};
