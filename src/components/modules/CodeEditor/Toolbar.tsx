import ToolbarButton from "./ToolbarButton";
import { ConvertMode, IconVariant } from "@/types/global.d";
import Tooltip from "@/components/modules/Tooltip";
import Popover from "@/components/modules/Popover";

interface IToolbarProps {
  title: string;
  content: string;
  setContent?: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  isOutput: boolean;
  errorMessage: string;
  convertMode: ConvertMode;
}

const Toolbar = ({
  title,
  content,
  setContent,
  error,
  isOutput,
  errorMessage,
  convertMode,
}: IToolbarProps): JSX.Element => {
  const handleBeautifyClick = (): void => {
    if (!error)
      setContent?.((content) => {
        const parsedContent = JSON.parse(content);
        return JSON.stringify(parsedContent, null, 4);
      });
  };

  const handleUglifyClick = (): void => {
    setContent?.(JSON.stringify(JSON.parse(content)));
  };

  const handleDeleteClick = (): void => {
    setContent?.("");
  };

  const handleCopyClick = (): void => {
    navigator.clipboard.writeText(content);
  };

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
        {!isOutput && convertMode === ConvertMode.JSONtoString && (
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
          </>
        )}
        {!isOutput && (
          <>
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
