import { mutation } from "apollo-booster";
import gql from "graphql-tag";
import { UpdateClassDocument } from "../gql/graphql";

gql`
  mutation UpdateClass($id: ID!, $input: UpdateClassInput!) {
    updateClass(id: $id, input: $input) {
      id
      name
      startTime
      endTime
    }
  }
`;

export const updateClassMutation = mutation(UpdateClassDocument);
