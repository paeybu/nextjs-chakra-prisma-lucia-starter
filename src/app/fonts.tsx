import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["thai"],
  variable: "--font-kanit",
  weight: "400",
});

export const fonts = {
  kanit,
};
