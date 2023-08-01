import ToolbarButton from "./ToolbarButton";
import { IconVariant } from "../../../types/global.d";

interface IToolbarProps {
  title: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
}

const Toolbar = ({ title, content, setContent, error }: IToolbarProps) => {
  const handleBeautifyClick = (): void => {
    if (error) "Fix errors first";
    else
      setContent((content) => {
        const parsedContent = JSON.parse(content);
        return JSON.stringify(parsedContent, null, 4);
      });
  };

  const handleUglifyClick = () => {
    setContent(JSON.stringify(JSON.parse(content)));
  };

  const handleDeleteClick = () => setContent("");

  const handleCopyClick = () => navigator.clipboard.writeText(content);

  return (
    <div className="bg-slate-200 text-slate-600 dark:bg-zinc-900 dark:text-zinc-200 px-6 py-2 rounded-t-xl flex justify-between items-center">
      <div className="font-roboto font-bold">{title}</div>
      <div className="flex gap-2">
        {error && (
          <div className="mr-2">
            <ToolbarButton variant={IconVariant.error} error={error} />
          </div>
        )}

        <ToolbarButton
          variant={IconVariant.beautify}
          onClick={handleBeautifyClick}
        />
        <ToolbarButton
          variant={IconVariant.uglify}
          onClick={handleUglifyClick}
        />
        <ToolbarButton
          variant={IconVariant.delete}
          onClick={handleDeleteClick}
        />
        <ToolbarButton variant={IconVariant.copy} onClick={handleCopyClick} />
      </div>
    </div>
  );
};

export default Toolbar;
