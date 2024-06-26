import * as BaseTooltip from "@radix-ui/react-tooltip";

interface ITooltipProps {
  children: React.ReactNode;
  text: string;
  open?: boolean;
}

const Tooltip = ({ children, text, open }: ITooltipProps): JSX.Element => {
  return (
    <BaseTooltip.Provider delayDuration={200}>
      <BaseTooltip.Root open={open}>
        <BaseTooltip.Trigger asChild>
          <div>{children}</div>
        </BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Content sideOffset={5}>
            <div className="text-white bg-slate-500 dark:bg-zinc-600 px-4 py-2 select-none rounded">
              {text}
            </div>
            <BaseTooltip.Arrow className="fill-slate-500 dark:fill-zinc-600" />
          </BaseTooltip.Content>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
};

export default Tooltip;
