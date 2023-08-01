import { Dispatch, SetStateAction } from "react";

import { Formats } from "@/types/global.d";

import Toolbar from "./Toolbar";

interface ICodeEditorProps {
  title: string;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  error: boolean | null;
  setError: Dispatch<SetStateAction<boolean>> | null;
  format?: Formats;
}

const CodeEditor = ({
  title,
  content,
  setContent,
  error,
  setError,
  format,
}: ICodeEditorProps) => {
  const isValidJSON = (value: string): boolean => {
    try {
      JSON.parse(value);
    } catch {
      return false;
    }

    return true;
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    if (setError !== null) setError(!isValidJSON(event.target.value));

    setContent(event.target.value);
  };

  return (
    <div className="drop-shadow-md">
      <Toolbar
        title={title}
        content={content}
        setContent={setContent}
        error={error !== null && content !== "" ? error : false}
      />
      <textarea
        className="w-full resize-none	bg-neutral-white dark:bg-zinc-800 rounded-b-xl p-4"
        rows={20}
        spellCheck={false}
        value={content}
        onChange={handleTextAreaChange}
      />
    </div>
  );
};

export default CodeEditor;
