import { Dispatch, SetStateAction } from "react";

import { Formats, ConvertMode } from "@/types/global.d";

import Toolbar from "./Toolbar";

interface ICodeEditorProps {
  title: string;
  content: string;
  setContent?: Dispatch<SetStateAction<string>>;
  error: boolean | null;
  setError: Dispatch<SetStateAction<boolean>> | null;
  format?: Formats;
  convertMode: ConvertMode;
}

const CodeEditor = ({
  title,
  content,
  setContent,
  error,
  setError,
  format,
  convertMode,
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
    setError?.(!isValidJSON(event.target.value));
    setContent?.(event.target.value);
  };

  const isOutput = (): boolean =>
    (convertMode === ConvertMode.JSONtoString && format === Formats.string) ||
    (convertMode === ConvertMode.StringtoJSON && format === Formats.json);

  return (
    <div className="drop-shadow-md">
      <Toolbar
        title={title}
        content={content}
        setContent={setContent}
        error={error !== null && content !== "" ? error : false}
        isOutput={isOutput()}
      />
      <textarea
        className="w-full resize-none	bg-neutral-white dark:bg-zinc-800 rounded-b-xl p-4"
        rows={20}
        spellCheck={false}
        value={content}
        onChange={handleTextAreaChange}
        readOnly={isOutput()}
      />
    </div>
  );
};

export default CodeEditor;
