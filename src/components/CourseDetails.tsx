import { useMemo } from "react";
import { useAdapter } from "apollo-booster";
import { JsonEditor } from "./JsonEditor";
import { courseDetailsQuery } from "../queries/courseDetailsQuery";
import { updateCourseMutation } from "../mutations/updateCourseMutation";
import { UpdateCourseInput } from "../gql/graphql";
import { useRouter } from "./Router";

export const CourseDetails = (props: { id: string }) => {
  const { pop } = useRouter();
  const { use, mutate } = useAdapter();
  const [{ course }] = use(
    courseDetailsQuery.with({ variables: { id: props.id } })
  );
  const save = async (newCourse: UpdateCourseInput) => {
    try {
      await mutate(
        updateCourseMutation.with({
          variables: { id: course.id, input: newCourse },
        })
      );
      pop();
    } catch (ex) {
      alert(String(ex));
    }
  };

  const editableProps = useMemo(() => {
    const { description, endDate, name, startDate } = course;
    return { name, description, startDate, endDate };
  }, [course]);

  return <JsonEditor value={editableProps} onSave={save} />;
};
