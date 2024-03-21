import { mutation } from "apollo-booster";
import gql from "graphql-tag";
import { UpdateCourseDocument } from "../gql/graphql";

gql`
  mutation UpdateCourse($id: ID!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      name
      description
      startDate
      endDate
    }
  }
`;

export const updateCourseMutation = mutation(UpdateCourseDocument);
