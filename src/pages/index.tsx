import { useEffect, useState } from "react";

import Layout from "@/components/layouts/Default";
// import { ConvertMode } from "../types/global.d";

export default function Home() {
  // const [convertMode, setConvertMode] = useState(ConvertMode.JSONtoString);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (input !== "" && !validateJSON(input))
      return setError("Not a valid JSON");
    setOutput(JSON.stringify(input));
    setError("");
  }, [input]);

  // const toggleConvertMode = (mode: ConvertMode): void => {
  //   setConvertMode(
  //     mode === ConvertMode.JSONtoString
  //       ? ConvertMode.StringtoJSON
  //       : ConvertMode.JSONtoString
  //   );
  // };

  // const handleChangeMode = (): void => toggleConvertMode(convertMode);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInput(event.target.value);
  };

  const validateJSON = (value: string): boolean => {
    try {
      JSON.parse(value);
    } catch {
      return false;
    }
    return true;
  };

  return (
    <Layout>
      <section className="mt-8 px-8">
        <div className="container mx-auto">
          <div className="flex gap-4">
            <div className="text-white flex-1">
              <h3 className="mb-2">JSON</h3>
              {/* <h3 className="mb-2">
                {convertMode === ConvertMode.JSONtoString
                  ? "JSON"
                  : "Stringified JSON"}
              </h3> */}
              {/* <h3 className="mb-2">
                {convertMode === ConvertMode.JSONtoString
                  ? "JSON"
                  : "Stringified JSON"}
              </h3> */}
              <textarea
                className="w-full rounded p-2 text-black"
                rows={20}
                spellCheck={false}
                onChange={handleInputChange}
                value={input}
              />
              <p>{error}</p>
            </div>
            {/* <div className="text-white">
              <button onClick={handleChangeMode}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </button>
            </div> */}
            <div className="text-white flex-1">
              <h3 className="mb-2">Stringified JSON</h3>
              {/* <h3 className="mb-2">
                {convertMode === ConvertMode.JSONtoString
                  ? "Stringified JSON"
                  : "JSON"}
              </h3> */}
              <textarea
                className="w-full rounded p-2 text-black"
                rows={20}
                spellCheck={false}
                value={output}
                readOnly={true}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
