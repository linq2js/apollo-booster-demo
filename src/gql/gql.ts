/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation UpdateClass($id: ID!, $input: UpdateClassInput!) {\n    updateClass(id: $id, input: $input) {\n      id\n      name\n      startTime\n      endTime\n    }\n  }\n": types.UpdateClassDocument,
    "\n  mutation UpdateCourse($id: ID!, $input: UpdateCourseInput!) {\n    updateCourse(id: $id, input: $input) {\n      id\n      name\n      description\n      startDate\n      endDate\n    }\n  }\n": types.UpdateCourseDocument,
    "\n  query ClassList($courseId: ID!, $offset: Int) {\n    classes(courseId: $courseId, offset: $offset)\n      @connection(key: \"classList\", filter: [\"courseId\"]) {\n      id\n      name\n      classDate\n      startTime\n      endTime\n      updatedOn\n    }\n  }\n": types.ClassListDocument,
    "\n  query CourseDetails($id: ID!) {\n    course(id: $id) {\n      id\n      name\n      description\n      updatedOn\n      startDate\n      endDate\n      classes {\n        id\n        name\n      }\n    }\n  }\n": types.CourseDetailsDocument,
    "\n  fragment CourseListPreview on Course {\n    description\n  }\n": types.CourseListPreviewFragmentDoc,
    "\n  \n\n  query CourseList {\n    courses {\n      id\n      name\n      updatedOn\n      ...CourseListPreview\n    }\n  }\n": types.CourseListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateClass($id: ID!, $input: UpdateClassInput!) {\n    updateClass(id: $id, input: $input) {\n      id\n      name\n      startTime\n      endTime\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateClass($id: ID!, $input: UpdateClassInput!) {\n    updateClass(id: $id, input: $input) {\n      id\n      name\n      startTime\n      endTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateCourse($id: ID!, $input: UpdateCourseInput!) {\n    updateCourse(id: $id, input: $input) {\n      id\n      name\n      description\n      startDate\n      endDate\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCourse($id: ID!, $input: UpdateCourseInput!) {\n    updateCourse(id: $id, input: $input) {\n      id\n      name\n      description\n      startDate\n      endDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ClassList($courseId: ID!, $offset: Int) {\n    classes(courseId: $courseId, offset: $offset)\n      @connection(key: \"classList\", filter: [\"courseId\"]) {\n      id\n      name\n      classDate\n      startTime\n      endTime\n      updatedOn\n    }\n  }\n"): (typeof documents)["\n  query ClassList($courseId: ID!, $offset: Int) {\n    classes(courseId: $courseId, offset: $offset)\n      @connection(key: \"classList\", filter: [\"courseId\"]) {\n      id\n      name\n      classDate\n      startTime\n      endTime\n      updatedOn\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CourseDetails($id: ID!) {\n    course(id: $id) {\n      id\n      name\n      description\n      updatedOn\n      startDate\n      endDate\n      classes {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query CourseDetails($id: ID!) {\n    course(id: $id) {\n      id\n      name\n      description\n      updatedOn\n      startDate\n      endDate\n      classes {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CourseListPreview on Course {\n    description\n  }\n"): (typeof documents)["\n  fragment CourseListPreview on Course {\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n\n  query CourseList {\n    courses {\n      id\n      name\n      updatedOn\n      ...CourseListPreview\n    }\n  }\n"): (typeof documents)["\n  \n\n  query CourseList {\n    courses {\n      id\n      name\n      updatedOn\n      ...CourseListPreview\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;