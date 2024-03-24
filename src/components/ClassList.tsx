import { useAdapter, useAsync } from "apollo-booster";
import { classListQuery } from "../queries/classListQuery";
import { useState } from "react";
import { Class } from "../gql/graphql";
import { JsonEditor } from "./JsonEditor";
import { updateClassMutation } from "../mutations/updateClassMutation";

type EditingData = Pick<Class, "name" | "startTime" | "endTime">;

export const ClassList = (props: { courseId: string }) => {
  const { use, mutate, fetchMore } = useAdapter();
  const [hasMore, setHasMore] = useState(true);
  const loadMoreState = useAsync();
  const [{ classes }] = use(
    classListQuery.with({ variables: { courseId: props.courseId } })
  );

  const [editing, setEditing] = useState<{
    id: string;
    data: EditingData;
  }>();

  const more = async () => {
    const result = await loadMoreState.of(
      fetchMore(
        classListQuery.with({
          variables: { courseId: props.courseId, offset: classes.length },
        })
      )
    );
    if (!result.classes.length) {
      setHasMore(false);
    }
  };

  const save = async (data: EditingData) => {
    if (!editing) return;

    await mutate(
      updateClassMutation.with({ variables: { id: editing?.id, input: data } })
    );

    setEditing(undefined);
  };

  return (
    <>
      <ul>
        {classes.map((c) => (
          <div key={c.id}>
            {editing && editing.id === c.id ? (
              <JsonEditor
                value={editing.data}
                onSave={save}
                onCancel={() => setEditing(undefined)}
              />
            ) : (
              <pre
                onClick={() => {
                  setEditing({
                    id: c.id,
                    data: {
                      name: c.name,
                      endTime: c.endTime,
                      startTime: c.startTime,
                    },
                  });
                }}
              >
                {JSON.stringify(c, null, 2)}
              </pre>
            )}
          </div>
        ))}
      </ul>
      {hasMore && (
        <button onClick={more} disabled={loadMoreState.loading}>
          {loadMoreState.loading ? "Loading..." : "More"}
        </button>
      )}
    </>
  );
};
