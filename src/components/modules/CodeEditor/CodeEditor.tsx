import Toolbar from "./Toolbar";

interface Props {
  title: string;
}

const CodeEditor = ({ title }: Props) => {
  return (
    <div>
      <Toolbar title={title} />
    </div>
  );
};

export default CodeEditor;
