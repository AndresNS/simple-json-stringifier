import { useMemo, useState } from "react";

import Layout from "@/components/layouts/Default";
import { ConvertMode, Formats } from "@/types/global.d";

import CodeEditor from "@/components/modules/CodeEditor/CodeEditor";
import SwapIcon from "../components/icons/SwapIcon";

export default function Home() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [convertMode, setConvertMode] = useState(ConvertMode.JSONtoString);

  const getOutputContent = (
    input: string,
    convertMode: ConvertMode
  ): string => {
    if (input === "") return "";

    switch (convertMode) {
      case ConvertMode.JSONtoString:
        return JSON.stringify(input);

      case ConvertMode.StringtoJSON:
        return JSON.parse(input);
    }
  };

  const toggleConvertMode = (mode: ConvertMode): void => {
    setInput(getOutputContent(input, mode));

    setConvertMode(
      mode === ConvertMode.JSONtoString
        ? ConvertMode.StringtoJSON
        : ConvertMode.JSONtoString
    );
  };

  return (
    <Layout>
      <section className="container p-6 mx-auto flex flex-col justify-center">
        <div className="flex gap-4 items-center flex-col lg:flex-row">
          <div className="flex-1 w-full">
            <CodeEditor
              title={
                convertMode === ConvertMode.JSONtoString
                  ? "JSON"
                  : "Stringified JSON"
              }
              content={input}
              setContent={setInput}
              error={inputError}
              setError={setInputError}
              format={
                convertMode === ConvertMode.JSONtoString
                  ? Formats.json
                  : Formats.string
              }
              convertMode={convertMode}
            />
          </div>
          <button
            className="w-full lg:w-auto bg-slate-200 text-slate-600 dark:bg-zinc-900 dark:text-zinc-200 flex justify-center items-center rounded hover:bg-slate-400 hover:text-slate-100 dark:hover:bg-slate-600 p-2 drop-shadow-md"
            onClick={() => toggleConvertMode(convertMode)}
          >
            <SwapIcon />
          </button>
          <div className="flex-1  w-full">
            <CodeEditor
              title={
                convertMode === ConvertMode.StringtoJSON
                  ? "JSON"
                  : "Stringified JSON"
              }
              content={getOutputContent(input, convertMode)}
              // setContent={setOutput}
              error={null}
              setError={null}
              format={
                convertMode === ConvertMode.StringtoJSON
                  ? Formats.json
                  : Formats.string
              }
              convertMode={convertMode}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
