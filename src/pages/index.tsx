import { useEffect, useState } from "react";

import Layout from "@/components/layouts/Default";
// import { ConvertMode } from "../types/global.d";

import CodeEditor from "@/components/modules/CodeEditor/CodeEditor";

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
      <section className="container mx-auto flex flex-col justify-center">
        <div className="flex gap-4">
          <div className="flex-1">
            <CodeEditor title="JSON" />
          </div>
          <div className="flex-1">
            <CodeEditor title="Stringified JSON" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
