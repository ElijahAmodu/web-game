"use client";

import { darkTheme, type Theme } from "@rainbow-me/rainbowkit";
import { merge } from "lodash";

export const theme = merge(darkTheme(), {
  colors: {
    accentColor: "#F70011",
    accentColorForeground: "#4D3B27",
    actionButtonBorder: "#F70011",
    actionButtonBorderMobile: "#F70011",
    closeButton: "white",
    closeButtonBackground: "transparent",
    modalBackdrop: "rgba(0, 0, 0, 0.8)",
    modalBackground: "#292E54",
    modalBorder: "#141414",
    modalTextSecondary: "#787878",
    profileAction: "transparent",
    selectedOptionBorder: "#1A1F3F",
  },
  radii: {
    actionButton: "8px",
    connectButton: "8px",
    menuButton: "8px",
    modal: "8px",
    modalMobile: "8px",
  },
  fonts: {
    body: "Rubik, sans-serif",
  },
} as Theme);
