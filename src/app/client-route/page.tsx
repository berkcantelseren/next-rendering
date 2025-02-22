"use client";

import React from "react";
import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <div style={{ color: theme.colors.secondary }}>
      <h1>Client route page</h1>
      <p>{result}</p>
    </div>
  );
}
