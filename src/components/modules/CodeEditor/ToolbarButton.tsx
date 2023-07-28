import { IconVariant } from "../../../types/global.d";

import DeleteIcon from "../../icons/DeleteIcon";
import CopyIcon from "../../icons/CopyIcon";
import BeautifyIcon from "../../icons/BeautifyIcon";
import ErrorIcon from "../../icons/ErrorIcon";
import UglifyIcon from "../../icons/UglifyIcon";

interface Props {
  variant: IconVariant;
  error?: boolean;
}

const ToolbarButton = ({ variant, error }: Props) => {
  const IconComponents = {
    [IconVariant.beautify]: <BeautifyIcon />,
    [IconVariant.copy]: <CopyIcon />,
    [IconVariant.delete]: <DeleteIcon />,
    [IconVariant.error]: <ErrorIcon />,
    [IconVariant.uglify]: <UglifyIcon />,
  };

  return (
    <button
      className={`p-1 flex justify-center items-center ${
        error
          ? "text-xs rounded-full text-zinc-200 bg-red-700 hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-700"
          : "rounded hover:bg-slate-400 hover:text-slate-100 dark:hover:bg-slate-600"
      }`}
    >
      {IconComponents[variant]}
    </button>
  );
};

export default ToolbarButton;
