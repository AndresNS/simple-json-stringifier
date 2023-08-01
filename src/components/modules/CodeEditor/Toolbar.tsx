import ToolbarButton from "./ToolbarButton";
import { IconVariant } from "@/types/global.d";
import Tooltip from "@/components/modules/Tooltip";
import Popover from "@/components/modules/Popover";

interface IToolbarProps {
  title: string;
  content: string;
  setContent?: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  isOutput: boolean;
  errorMessage: string;
}

const Toolbar = ({
  title,
  content,
  setContent,
  error,
  isOutput,
  errorMessage,
}: IToolbarProps) => {
  const handleBeautifyClick = (): void => {
    if (error) "Fix errors first";
    else
      setContent?.((content) => {
        const parsedContent = JSON.parse(content);
        return JSON.stringify(parsedContent, null, 4);
      });
  };

  const handleUglifyClick = () => {
    setContent?.(JSON.stringify(JSON.parse(content)));
  };

  const handleDeleteClick = () => setContent?.("");

  const handleCopyClick = () => navigator.clipboard.writeText(content);

  return (
    <div className="bg-cyan-700 text-slate-100 dark:bg-zinc-900 dark:text-zinc-200 px-6 py-2 rounded-t-xl flex justify-between items-center">
      <div className="font-roboto font-bold">{title}</div>
      <div className="flex gap-2">
        {error && (
          <div className="mr-2">
            <Popover text={errorMessage}>
              <ToolbarButton variant={IconVariant.error} error={error} />
            </Popover>
          </div>
        )}
        {!isOutput && (
          <>
            <Tooltip text={"Beautify"}>
              <ToolbarButton
                variant={IconVariant.beautify}
                onClick={handleBeautifyClick}
              />
            </Tooltip>
            <Tooltip text={"Uglify"}>
              <ToolbarButton
                variant={IconVariant.uglify}
                onClick={handleUglifyClick}
              />
            </Tooltip>
            <Tooltip text={"Clear"}>
              <ToolbarButton
                variant={IconVariant.delete}
                onClick={handleDeleteClick}
              />
            </Tooltip>
          </>
        )}
        <Tooltip text={"Copy"}>
          <ToolbarButton variant={IconVariant.copy} onClick={handleCopyClick} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Toolbar;
