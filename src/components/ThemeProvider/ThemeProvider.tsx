"use client";

import React, { useState, useEffect } from "react";
import ThemeContext from "@/context/themeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("hotel-theme");
      return savedTheme ? JSON.parse(savedTheme) : false;
    }
    return false;
  });

  useEffect(() => {
    try {
      localStorage.setItem("hotel-theme", JSON.stringify(darkTheme));
    } catch (error) {
      console.error("Error storing theme in localStorage:", error);
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div
          className={`text-${darkTheme ? "white" : "black"} bg-${darkTheme ? "black" : "white"}`}
        >
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
