import { tv } from "tailwind-variants";

export const typography = tv({
  variants: {
    color: {
      black: "text-black",
      white: "text-white",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    size: {
      sm: "text-xs",
      base: "text-base",
      lg: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-[32px] leading-10",
    },
    weight: {
      bold: "text-bold",
    },
  },
});
