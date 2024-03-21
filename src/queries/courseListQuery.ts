import { query } from "apollo-booster";
import { CourseListDocument } from "../gql/graphql";
import gql from "graphql-tag";

gql`
  query CourseList {
    courses {
      id
      name
      updatedOn
    }
  }
`;

export const courseListQuery = query(CourseListDocument);
