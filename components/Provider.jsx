"use client";
import { SessionProvider } from "@node_modules/next-auth/react";
import React, { Suspense } from "react";

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {" "}
      <Suspense fallback={null}>{children}</Suspense>
    </SessionProvider>
  );
};

export default Provider;
