import { useAdapter } from "apollo-booster";
import { courseListQuery } from "../queries/courseListQuery";
import { useRouter } from "./Router";

export const CourseList = () => {
  const { push } = useRouter();
  const { use, refetch } = useAdapter();
  const [{ courses }] = use(courseListQuery);

  return (
    <>
      <p>
        <button onClick={() => refetch(courseListQuery)}>Refetch</button>
        <button onClick={() => refetch(courseListQuery, true)}>
          Hard Refetch
        </button>
      </p>
      <em>Click on item to edit</em>
      <ul>
        {courses.map((course) => (
          <div key={course.id}>
            <pre onClick={() => push("CourseDetails", { id: course.id })}>
              {JSON.stringify(course, null, 2)}
            </pre>
          </div>
        ))}
      </ul>
    </>
  );
};
