import { PropsWithChildren } from "react";

function mapHeadingSize(h: HeadlineElement) {
  switch (h) {
    case "h1":
      return "text-4xl";
    case "h2":
      return "text-3xl";
    case "h3":
      return "text-2xl";
    case "h4":
      return "text-1xl";
    case "h5":
      return "text-xl";
    case "h6":
      return "text-md";
    default:
      throw Error("invalid heading level");
  }
}

type HeadlineElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  variant: HeadlineElement;
}

export function Heading({
  variant: Variant,
  children,
}: PropsWithChildren<HeadingProps>) {
  return <Variant className={mapHeadingSize(Variant)}>{children}</Variant>;
}
