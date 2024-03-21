import { useMemo, useState } from "react";

export const JsonEditor = <T,>(props: {
  value: T;
  onSave(value: T): void | Promise<void>;
  onCancel?: VoidFunction;
}) => {
  const [error, setError] = useState<string>();
  const [parsed, setParsed] = useState({ text: "", object: props.value });
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  useMemo(() => {
    const next = JSON.stringify(props.value, null, 4);
    setText(next);
    setParsed({ text: next, object: props.value });
  }, [props.value, setText]);

  const handleChange = (text: string) => {
    try {
      setText(text);
      if (parsed.text !== text) {
        setParsed({ text, object: JSON.parse(text) });
      }
      setError("");
    } catch (ex) {
      setError(String(ex));
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await props.onSave(parsed.object);
    } catch (ex) {
      setError(String(ex));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p>
        <button
          disabled={loading || parsed.object === props.value}
          onClick={handleSave}
        >
          {loading ? "Saving..." : "Save"}
        </button>{" "}
        {props.onCancel && <button onClick={props.onCancel}>Cancel</button>}
        {error && <span style={{ color: "red" }}>{error}</span>}
      </p>
      <textarea
        disabled={loading}
        value={text}
        onChange={(e) => handleChange(e.currentTarget.value)}
        rows={20}
        style={{ width: "100%" }}
      />
    </>
  );
};
