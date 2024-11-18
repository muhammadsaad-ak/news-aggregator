// src/theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#f0f2f5",
            paper: "#fff",
        },
        text: {
            primary: "#000",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#121212",
            paper: "#1c1c1c",
        },
        text: {
            primary: "#fff",
        },
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#fff",
                },
            },
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    color: "#fff",
                },
            },
        },
    },
});