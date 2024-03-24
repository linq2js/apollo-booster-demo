import { Suspense, useMemo } from "react";
import { useAdapter } from "apollo-booster";
import { JsonEditor } from "./JsonEditor";
import { courseDetailsQuery } from "../queries/courseDetailsQuery";
import { updateCourseMutation } from "../mutations/updateCourseMutation";
import { UpdateCourseInput } from "../gql/graphql";
import { useRouter } from "./Router";
import { ClassList } from "./ClassList";

export const CourseDetails = (props: { id: string }) => {
  const { pop } = useRouter();
  const { use, mutate } = useAdapter();
  const [{ course }] = use(
    courseDetailsQuery.with({ variables: { id: props.id } })
  );
  const save = async (newCourse: UpdateCourseInput) => {
    await mutate(
      updateCourseMutation.with({
        variables: { id: course.id, input: newCourse },
      })
    );
    pop();
  };

  const editableProps = useMemo(() => {
    const { description, endDate, name, startDate } = course;
    return { name, description, startDate, endDate };
  }, [course]);

  return (
    <>
      <JsonEditor value={editableProps} onSave={save} />
      <h3>Classes</h3>
      <em>Click on item to edit</em>
      <Suspense fallback={<div>Loading classes...</div>}>
        <ClassList courseId={course.id} />
      </Suspense>
    </>
  );
};
