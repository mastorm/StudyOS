import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren<{}>) {
  return (
    <section className="bg-slate-600 p-3 text-white rounded-xl">
      {children}
    </section>
  );
}
