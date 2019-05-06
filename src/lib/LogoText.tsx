import * as React from "react";
import AnimateMapped from "./AnimateMapped";

interface ComponentProps {
  variant?: string;
  color?: string;
  animate: "left" | "right" | "none";
  text?: string;
  height?: number;
  width?: any;
  classes?: any;
  children?: any;
}

const styles = {
  root: {},
  textCondensed: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "3rem",
    lineHeight: 1.04,
    fontWeight: 740,
    letterSpacing: -2
  },
  textSmall: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "3.75rem",
    lineHeight: 1,
    fontWeight: 740,
    letterSpacing: -1
  },
  textNormal: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "3.75rem",
    lineHeight: 1,
    fontWeight: 740,
    letterSpacing: 1.5
  },
  textLarge: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "6rem",
    lineHeight: 1,
    fontWeight: 740,
    letterSpacing: 1.5
  }
};

export const logoTextWidthMap = {
  condensed: 183,
  small: 242,
  normal: 265,
  large: 416
};

const getStyle = variant => {
  return variant == "condensed"
    ? styles.textCondensed
    : variant == "small"
    ? styles.textSmall
    : variant == "large"
    ? styles.textLarge
    : styles.textNormal;
};

const LogoText = (props: ComponentProps) => {
  const { text, color, variant, animate, width, height, classes } = props;
  const logotext = (
    <div
      style={{
        ...getStyle(variant),
        color: color || "inherit",
        align: "center",
        height: height
      }}
    >
      {text}
    </div>
  );

  return <AnimateMapped animate={animate}>{logotext}</AnimateMapped>;
};

export default LogoText;
