import { ReactNode } from "react";

export type ElementState =
  | undefined
  | "loading"
  | "disable"
  | "error"
  | "success"
  | null;

export type Children = ReactNode | ReactNode[];

export type INodeStater = { children: Children; className?: string };
