import { query } from "apollo-booster";
import gql from "graphql-tag";
import { ClassListDocument, ClassListQueryVariables } from "../gql/graphql";

gql`
  query ClassList($courseId: ID!, $offset: Int) {
    classes(courseId: $courseId, offset: $offset)
      @connection(key: "classList", filter: ["courseId"]) {
      id
      name
      classDate
      startTime
      endTime
      updatedOn
    }
  }
`;

export const classListQuery = query((variables: ClassListQueryVariables) => ({
  document: ClassListDocument,
  variables,
  merge(prev, incoming) {
    return {
      classes: [...prev.classes, ...incoming.classes],
    };
  },
}));
