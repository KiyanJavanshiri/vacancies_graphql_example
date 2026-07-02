import type { TGetJobsQuery } from "@/utils/types";
import { gql, type TypedDocumentNode } from "@apollo/client";

export const GET_JOBS: TypedDocumentNode<TGetJobsQuery, void> = gql`
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
