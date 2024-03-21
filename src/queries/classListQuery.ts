import { query } from "apollo-booster";
import gql from "graphql-tag";
import { ClassListDocument } from "../gql/graphql";

gql`
  query ClassList($courseId: ID!) {
    classes(courseId: $courseId) {
      id
      name
      classDate
      startTime
      endTime
      updatedOn
    }
  }
`;

export const classListQuery = query(ClassListDocument);
