import Toolbar from "./Toolbar";

interface Props {
  title: string;
}

const CodeEditor = ({ title }: Props) => {
  return (
    <div className="drop-shadow-md">
      <Toolbar title={title} />
      <textarea
        className="w-full resize-none	bg-neutral-white dark:bg-zinc-800 rounded-b-xl p-4"
        rows={20}
        spellCheck={false}
      />
    </div>
  );
};

export default CodeEditor;
