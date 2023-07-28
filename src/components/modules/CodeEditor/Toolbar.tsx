import ToolbarButton from "./ToolbarButton";
import { IconVariant } from "../../../types/global.d";

interface Props {
  title: string;
}

const Toolbar = ({ title }: Props) => {
  return (
    <div className="bg-slate-200 text-slate-600 dark:bg-zinc-900 dark:text-zinc-200 px-6 py-2 rounded-t-xl flex justify-between items-center">
      <div className="font-roboto font-bold">{title}</div>
      <div className="flex gap-2">
        <div className="mr-2">
          <ToolbarButton variant={IconVariant.error} error={true} />
        </div>
        <ToolbarButton variant={IconVariant.beautify} />
        <ToolbarButton variant={IconVariant.uglify} />
        <ToolbarButton variant={IconVariant.delete} />
        <ToolbarButton variant={IconVariant.copy} />
      </div>
    </div>
  );
};

export default Toolbar;
