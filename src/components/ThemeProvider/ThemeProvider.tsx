"use client";

import React from "react";
import { useEffect, useState } from "react";
import ThemeContext from "@/context/themeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const themeLocalStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeLocalStorage);

  const [renderComponent, setRenderComponent] = useState(false);
  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <div className="theme-provider">
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
          <div className="dark:text-white dark:bg-black text-[##1E1E1E]">
            {children}
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
