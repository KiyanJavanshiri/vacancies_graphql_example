import type { TGetVacanciesQuery } from "@/utils/types";
import { gql, type TypedDocumentNode } from "@apollo/client";

export const GET_JOBS: TypedDocumentNode<TGetVacanciesQuery, void> = gql`
  query GET_JOBS {
    jobs {
      id
      title
      company {
        name
      }
      salary
      city
    }
  }
`;
