import { PropsWithChildren } from "react";

export function SingleElementLayout({ children }: PropsWithChildren<{}>) {
  return <div className="grid place-items-center h-screen">{children}</div>;
}
