// import { useEffect, useState } from "react";
// import { ColorScheme } from "../../types/global.d";
import ThemeSwitch from "../modules/ThemeSwitch";

const Header = () => {
  return (
    <header className="bg-slate-600/5 text-slate-600 dark:bg-zinc-900 dark:text-zinc-200 py-6 px-8">
      <div className="container mx-auto flex justify-between">
        <div className="font-roboto font-bold text-lg">
          Simple JSON Stringifier
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
