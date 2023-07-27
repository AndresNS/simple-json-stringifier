// import { useEffect, useState } from "react";
// import { ColorScheme } from "../../types/global.d";
import ThemeSwitch from "../modules/ThemeSwitch";

const Header = () => {
  return (
    <header className="bg-slate-600 dark:bg-slate-800 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between">
        <div>Simple JSON Stringifier</div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
