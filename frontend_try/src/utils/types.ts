export type TJob = {
  id: number;
  title: string;
  description?: string;
  city: string;
  salary: number;
};

export type TCompany = {
  id: number;
  name: string;
  bio: string;
  staffMembers: number;
};

export type TGetVacancyQueryResult = TJob & {
  company: Pick<TCompany, "name">;
};

export type TGetVacanciesQuery = {
  jobs: TGetVacancyQueryResult[];
};
