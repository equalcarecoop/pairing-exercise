import { PropsWithChildren } from "react";

export const PageHeading = ({ children }: PropsWithChildren<{}>) => (
  <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
    {children}
  </h1>
);
