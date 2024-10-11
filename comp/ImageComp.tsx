"use client";
import { cva } from "class-variance-authority";
import $Image, { ImageProps } from "next/image";
import { HTMLAttributes, useState } from "react";
import { ElementState } from "@/types";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "alt"> &
  HTMLAttributes<HTMLImageElement> & {
    alt?: string;
    noLayout?: boolean;
    fill?:boolean;
    afterLoaded?: () => void;
  };

const classes = cva("object-center transition duration-500", {
  variants: {
    state: {
      error: "",
      loading: "opacity-0 blur-lg scale-90",
      success: "opacity-100 blur-none scale-100",
    },
  },
});

export default function Image({
  src = "",
  alt = "",
  className,
  quality = 85,
  fill,
  ...rest
}: Props) {
  const [state, setState] =
    useState<Exclude<ElementState, "disable">>("loading");

  return (
    <$Image
      alt={alt}
      src={src}
      fill={fill}
      quality={quality}
      className={cn(`!bg-cover !bg-center`, classes({ state }), className)}
      onLoad={() => {
        setState("success");
      }}
      onError={() => {
        setState("error");
      }}
      {...rest}
    />
  );
}

