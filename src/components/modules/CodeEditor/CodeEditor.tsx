import { useState, Dispatch, SetStateAction } from "react";

import Editor from "react-simple-code-editor";

import * as Prism from "prismjs";
import "prismjs/components/prism-json";

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

  const handleEditorChange = (value: string): void => {
    validateInput(value, convertMode);
    setContent?.(value);
  };

  const isOutput = (): boolean =>
    (convertMode === ConvertMode.JSONtoString && format === Formats.string) ||
    (convertMode === ConvertMode.StringtoJSON && format === Formats.json);

  return (
    <div className="">
      <Toolbar
        title={title}
        content={content}
        setContent={setContent}
        error={error !== null && content !== "" ? error : false}
        errorMessage={errorMessage}
        isOutput={isOutput()}
        convertMode={convertMode}
      />

      <div className="font-mono bg-slate-100 dark:bg-zinc-800 rounded-b-xl min-h-[30rem] h-[50vh] overflow-auto">
        <Editor
          disabled={isOutput()}
          value={content}
          onValueChange={(value) => handleEditorChange(value)}
          highlight={(value) =>
            Prism.highlight(value, Prism.languages.json, "json")
          }
          padding={16}
          textareaClassName="code-editor-area"
          style={{ minHeight: "100%", maxWidth: "100%", overflow: "auto" }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
