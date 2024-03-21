import { query } from "apollo-booster";
import { CourseDetailsDocument } from "../gql/graphql";
import gql from "graphql-tag";

gql`
  query CourseDetails($id: ID!) {
    course(id: $id) {
      id
      name
      description
      updatedOn
      startDate
      endDate
      classes {
        id
        name
      }
    }
  }
`;

export const courseDetailsQuery = query(CourseDetailsDocument);
