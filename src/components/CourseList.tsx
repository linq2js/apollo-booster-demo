import { useAdapter } from "apollo-booster";
import { courseListQuery } from "../queries/courseListQuery";
import { useRouter } from "./Router";

export const CourseList = () => {
  const { push } = useRouter();
  const [{ courses }] = useAdapter().use(courseListQuery);

  return (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <pre onClick={() => push("CourseDetails", { id: course.id })}>
            {JSON.stringify(course, null, 2)}
          </pre>
        </div>
      ))}
    </ul>
  );
};
