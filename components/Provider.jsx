"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, Suspense } from "react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    <Suspense fallback={null}>{children}</Suspense>
  </SessionProvider>
);

export default Provider;
