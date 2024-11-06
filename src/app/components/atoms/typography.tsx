import { typography } from "./variant";

const COLOR = {
  BLACK: "black",
  WHITE: "white",
} as const;

const ALIGN = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
} as const;

const SIZE = {
  SM: "sm",
  BASE: "base",
  LG: "lg",
  "2XL": "2xl",
  "3XL": "3xl",
} as const;

const WEIGHT = {
  BOLD: "bold",
} as const;

type typographyTypeProps = {
  align?: (typeof ALIGN)[keyof typeof ALIGN];
  color?: (typeof COLOR)[keyof typeof COLOR];
  text: string;
  size?: (typeof SIZE)[keyof typeof SIZE];
  weight?: (typeof WEIGHT)[keyof typeof WEIGHT];
};

const Typography = ({
  color,
  size,
  align,
  weight,
  text,
}: typographyTypeProps) => {
  return <p className={typography({ color, size, align, weight })}>{text}</p>;
};

export default Typography;
