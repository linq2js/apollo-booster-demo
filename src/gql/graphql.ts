/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Attendance = {
  __typename?: 'Attendance';
  attendanceDate: Scalars['String']['output'];
  attended: Scalars['Boolean']['output'];
  class: Class;
  id: Scalars['ID']['output'];
  user: User;
};

export type Class = {
  __typename?: 'Class';
  attendances: Array<Attendance>;
  classDate: Scalars['String']['output'];
  course: Course;
  endTime: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
  updatedOn?: Maybe<Scalars['String']['output']>;
};

export type Course = {
  __typename?: 'Course';
  classes: Array<Class>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startDate?: Maybe<Scalars['String']['output']>;
  updatedOn?: Maybe<Scalars['String']['output']>;
};

export type CreateClassInput = {
  attendanceIds: Array<Scalars['ID']['input']>;
  classDate: Scalars['String']['input'];
  courseId: Scalars['ID']['input'];
  endTime: Scalars['String']['input'];
  name: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
  updatedOn?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCourseInput = {
  classIds: Array<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['String']['input']>;
  updatedOn?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClass: Class;
  createCourse: Course;
  deleteClass: Scalars['Boolean']['output'];
  deleteCourse: Scalars['Boolean']['output'];
  markAttendance: Attendance;
  updateClass: Class;
  updateCourse: Course;
};


export type MutationCreateClassArgs = {
  id: Scalars['ID']['input'];
  input: CreateClassInput;
};


export type MutationCreateCourseArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<CreateCourseInput>;
};


export type MutationDeleteClassArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMarkAttendanceArgs = {
  attended: Scalars['Boolean']['input'];
  classId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUpdateClassArgs = {
  id: Scalars['ID']['input'];
  input: UpdateClassInput;
};


export type MutationUpdateCourseArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCourseInput;
};

export type Query = {
  __typename?: 'Query';
  class: Class;
  classes: Array<Class>;
  course: Course;
  courses: Array<Course>;
  user: User;
  users: Array<User>;
};


export type QueryClassArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClassesArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateClassInput = {
  classDate?: InputMaybe<Scalars['String']['input']>;
  courseId?: InputMaybe<Scalars['ID']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCourseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  updatedOn?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateCourseInput;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse: { __typename?: 'Course', id: string, name: string, description?: string | null, startDate?: string | null, endDate?: string | null } };

export type CourseDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CourseDetailsQuery = { __typename?: 'Query', course: { __typename?: 'Course', id: string, name: string, description?: string | null, updatedOn?: string | null, startDate?: string | null, endDate?: string | null, classes: Array<{ __typename?: 'Class', id: string, name: string }> } };

export type CourseListQueryVariables = Exact<{ [key: string]: never; }>;


export type CourseListQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', id: string, name: string, description?: string | null }> };


export const UpdateCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const CourseDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedOn"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CourseDetailsQuery, CourseDetailsQueryVariables>;
export const CourseListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CourseListQuery, CourseListQueryVariables>;