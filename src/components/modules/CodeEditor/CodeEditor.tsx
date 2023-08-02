import { useState, Dispatch, SetStateAction } from "react";

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
  const [errorMessage, setErrorMessage] = useState("");

  const isValidJSON = (value: string): boolean => {
    try {
      JSON.parse(value);
    } catch (error: any) {
      setErrorMessage(error.toString());
      return false;
    }

    return true;
  };

  const isValidString = (value: string): boolean => {
    try {
      const parsedString = JSON.parse(value);

      if (parsedString.toString() === "[object Object]")
        throw Error("Expected a stringified JSON, but received a JSON object");
    } catch (error: any) {
      setErrorMessage(error.toString());
      return false;
    }

    return true;
  };

  const validateInput = (input: string, convertMode: ConvertMode): void => {
    if (convertMode === ConvertMode.JSONtoString)
      setError?.(!isValidJSON(input));
    if (convertMode === ConvertMode.StringtoJSON)
      setError?.(!isValidString(input));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    validateInput(event.target.value, convertMode);
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
        errorMessage={errorMessage}
        isOutput={isOutput()}
        convertMode={convertMode}
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
