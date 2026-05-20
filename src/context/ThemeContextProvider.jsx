"use client";

import { ThemeProvider } from "next-themes";


const ThemeContextProvider = ({Children, props }) => {
    return (
        <ThemeProvider>
            <Children  {...props}/>
        </ThemeProvider>
    );
};

export default ThemeContextProvider;