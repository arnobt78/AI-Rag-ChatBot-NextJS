"use client";

import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";

// Providers component that wraps the NextUIProvider(one content) component to provide the NextUI theme to the entire application
// This component is used in the _app.tsx file to wrap the entire application with the NextUIProvider component
export const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
