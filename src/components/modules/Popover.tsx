import { useState } from "react";
import * as BasePopover from "@radix-ui/react-popover";
import { sleep } from "@/lib/helpers";

interface IPopoverProps {
  children: React.ReactNode;
  text: string;
}

const Popover = ({ children, text }: IPopoverProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = async () => {
    await sleep(200);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <BasePopover.Root open={open} onOpenChange={setOpen}>
      <BasePopover.Trigger
        asChild
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>{children}</div>
      </BasePopover.Trigger>
      <BasePopover.Anchor />
      <BasePopover.Portal>
        <BasePopover.Content
          sideOffset={5}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-white bg-slate-500 dark:bg-zinc-600 px-4 py-2 select-none rounded">
            {text}
          </div>
          <BasePopover.Close />
          <BasePopover.Arrow className="dark:fill-zinc-600 fill-slate-500" />
        </BasePopover.Content>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
};

export default Popover;
