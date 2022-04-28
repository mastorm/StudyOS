import { ComponentProps } from "react";

export function Input(props: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className={`p-2 border-2 rounded-md hover:border-teal-400 focus:border-teal-600 ${
        props.className ?? ""
      }`}
    />
  );
}
