import * as React from "react";

//Material UI Next
//import { Typography } from '@material-ui/core';
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import AnimateMapped from "./AnimateMapped";

interface ComponentProps {
  variant?: string;
  color?: string;
  animate: 'left' | 'right' | 'none';
  text?: string;
  height?: number;
  width?: any;
  classes?: any;
  children?: any;
}

const decorate = withStyles(({ typography }) => ({
  root: {},
  textCondensed: {
    ...typography.h3,
    fontWeight: 740,
    letterSpacing: -2
  },
  textSmall: {
    ...typography.h2,
    fontWeight: 740,
    letterSpacing: -1
  },
  textNormal: {
    ...typography.h2,
    fontWeight: 740,
    letterSpacing: 1.5
  },
  textLarge: {
    ...typography.h1,
    fontWeight: 740,
    letterSpacing: 1.5
  }
}));

export const logoTextWidthMap = {
  condensed: 183,
  small: 242,
  normal: 265,
  large: 416
};

class LogoText extends React.Component<
  ComponentProps & WithStyles<"root">,
  {}
> {
  public render() {
    const {
      text,
      color,
      variant,
      animate,
      width,
      height,
      classes
    } = this.props;
    const logotext = (
      <div
        className={
          variant == "condensed"
            ? classes.textCondensed
            : variant == "small"
            ? classes.textSmall
            : variant == "large"
            ? classes.textLarge
            : classes.textNormal
        }
        style={{
          color: color || "inherit",
          align: "center",
          height: height
        }}
      >
        {text}
      </div>
    );

    return <AnimateMapped animate={animate}>{logotext}</AnimateMapped>;
  }
}

export default decorate(LogoText);
