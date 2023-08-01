import { useState } from "react";

import Layout from "@/components/layouts/Default";
import { Formats } from "@/types/global.d";

import CodeEditor from "@/components/modules/CodeEditor/CodeEditor";
import SwapIcon from "../components/icons/SwapIcon";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [inputError, setInputError] = useState(false);

  // const [convertMode, setConvertMode] = useState(ConvertMode.JSONtoString);

  const toggleConvertMode = () => {};

  // const toggleConvertMode = (mode: ConvertMode): void => {
  //   setConvertMode(
  //     mode === ConvertMode.JSONtoString
  //       ? ConvertMode.StringtoJSON
  //       : ConvertMode.JSONtoString
  //   );
  // };

  // const handleChangeMode = (): void => toggleConvertMode(convertMode);

  return (
    <Layout>
      <section className="container p-6 mx-auto flex flex-col justify-center">
        <div className="flex gap-4 items-center flex-col lg:flex-row">
          <div className="flex-1 w-full">
            <CodeEditor
              title="JSON"
              content={input}
              setContent={setInput}
              error={inputError}
              setError={setInputError}
              format={Formats.json}
            />
          </div>
          <button
            className="w-full lg:w-auto bg-slate-200 text-slate-600 dark:bg-zinc-900 dark:text-zinc-200 flex justify-center items-center rounded hover:bg-slate-400 hover:text-slate-100 dark:hover:bg-slate-600 p-2 drop-shadow-md"
            onClick={toggleConvertMode}
          >
            <SwapIcon />
          </button>
          <div className="flex-1  w-full">
            <CodeEditor
              title="Stringified JSON"
              content={output}
              setContent={setOutput}
              error={null}
              setError={null}
              format={Formats.string}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
