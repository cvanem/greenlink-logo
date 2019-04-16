import * as React from "react";

//Components
const Logo = React.lazy(() => import("./Logo"));
const LogoText = React.lazy(() => import("./LogoText"));

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

//Misc
import { logoTextWidthMap } from "./LogoText";
import { logoWidthMap, logoHeightMap } from "./Logo";

interface ComponentProps {
  variant?: "condensed" | "small" | "normal" | "large"; //condensed or normal
  children?: any;
  icon?: boolean;
  iconcolor?: string;
  text?: string;
  textcolor?: string;
  showtext?: boolean;
  animate?: boolean;
  classes?: any;
  height?: number; //height of the entire logo, used for both the text and the link
  textwidth?: number;
  logowidth?: number;
}

export const logoTextMarginMap = {
  condensed: 3,
  normal: 5,
  large: 8
};
export const spacingMap = { condensed: 8, small: 8, normal: 8, large: 16 };

const decorate = withStyles(({}) => ({
  root: {
    display: "inline-block",
    overflow: "visible"
  },
  container: {
    display: "inline-block"
  },
  textcontainer: {
    display: "inline-block",
    postion: "relative" //allows top/bottom to be specified
  }
}));

const DecoratedClass = decorate(
  class LogoContainer extends React.Component<
    ComponentProps & WithStyles<"root">,
    {}
  > {
    public render() {
      const { iconcolor, textcolor, classes } = this.props;
      const variant = this.props.variant != null ? this.props.variant : "small";
      const height = logoHeightMap[variant];
      const textwidth = logoTextWidthMap[variant];
      const logowidth = logoWidthMap[variant];
      const icon = this.props.icon != null ? this.props.icon : true;
      const text = this.props.text != null ? this.props.text : "greenlink";
      const showtext = this.props.showtext == false ? false : true; //If user sets text to false, then don't show the text
      const animate = this.props.animate != null ? this.props.animate : false;
      const spacing = icon && text ? spacingMap[variant] : 0;
      const marginBottom = logoTextMarginMap[variant];
      return (
        <React.Fragment>
          <div className={classes.root}>
            {icon && (
              <div
                style={{
                  display: "inline-block",
                  width: logowidth,
                  height: height,
                  marginRight: spacing / 2
                }}
              >
                <React.Suspense fallback={<React.Fragment />}>
                  <Logo
                    animate={animate == true ? 'left' : 'none'}
                    height={height}
                    color={iconcolor}
                  />
                </React.Suspense>
              </div>
            )}
            {showtext && (
              <div
                className={classes.textcontainer}
                style={{
                  marginLeft: spacing / 2,
                  position: "relative",
                  bottom: marginBottom
                }}
              >
                <React.Suspense fallback={<React.Fragment />}>
                  <LogoText
                    text={text}
                    animate={animate == true ? 'right' : 'none'}
                    variant={variant}
                    width={textwidth}
                    height={height}
                    color={textcolor}
                  />
                </React.Suspense>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    }
  }
);
export default DecoratedClass;
