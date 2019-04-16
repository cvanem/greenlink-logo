import * as React from "react";

//Material UI Next
import { Typography } from "@material-ui/core";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import AnimateMapped from "./AnimateMapped";

interface ComponentProps {
  variant?: string;
  animate?: string;
  text?: string;
  height?: number;
  width?: any;
  classes?: any;
  children?: any;
}

const decorate = withStyles(
  ({
    palette,
    spacing,
    mixins,
    transitions,
    typography,
    breakpoints,
    zIndex
  }) => ({
    root: {},
    textCondensed: {
      ...typography.h3,
      color: palette.common.black,
      //display: 'block' as any,
      fontWeight: 740,
      letterSpacing: -2

      //overflow: 'hidden' as any,
    },
    textSmall: {
      ...typography.h2,
      color: palette.common.black,
      //display: 'block' as any,
      fontWeight: 740,
      letterSpacing: -1
      //overflow: 'hidden' as any,
    },
    textNormal: {
      ...typography.h2,
      color: palette.common.black,
      //display: 'block' as any,
      fontWeight: 740,
      letterSpacing: 1.5
      //overflow: 'hidden' as any,
    },
    textLarge: {
      ...typography.h1,
      color: palette.common.black,
      //display: 'block' as any,
      fontWeight: 740,
      letterSpacing: 1.5
      //overflow: 'hidden' as any,
    }
  })
);

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
    const { text, variant, animate, width, height, classes } = this.props;
    const logotext = (
      <Typography
        align="center"
        className={
          variant == "condensed"
            ? classes.textCondensed
            : variant == "small"
            ? classes.textSmall
            : variant == "large"
            ? classes.textLarge
            : classes.textNormal
        }
        style={{ height: height }}
      >
        {text}
      </Typography>
    );

    return <AnimateMapped animate={animate}>{logotext}</AnimateMapped>;
  }
}

export default decorate(LogoText);
