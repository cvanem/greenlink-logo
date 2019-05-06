import * as React from "react";

//Components
import Logo from "./Logo";
import LogoText from "./LogoText";

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

const styles = {
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
};

const LogoContainer = (props: ComponentProps) => {
  const { iconcolor, textcolor, classes } = props;
  const variant = props.variant != null ? props.variant : "small";
  const height = logoHeightMap[variant];
  const textwidth = logoTextWidthMap[variant];
  const logowidth = logoWidthMap[variant];
  const icon = props.icon != null ? props.icon : true;
  const text = props.text != null ? props.text : "greenlink";
  const showtext = props.showtext == false ? false : true; //If user sets text to false, then don't show the text
  const animate = props.animate != null ? props.animate : false;
  const spacing = icon && text ? spacingMap[variant] : 0;
  const marginBottom = logoTextMarginMap[variant];
  return (
    <React.Fragment>
      <div style={styles.root}>
        {icon && (
          <div
            style={{
              display: "inline-block",
              width: logowidth,
              height: height,
              marginRight: spacing / 2
            }}
          >
            <Logo
              animate={animate == true ? "left" : "none"}
              height={height}
              color={iconcolor}
            />
          </div>
        )}
        {showtext && (
          <div
            style={{
              ...styles.textcontainer,
              marginLeft: spacing / 2,
              position: "relative",
              bottom: marginBottom
            }}
          >
            <LogoText
              text={text}
              animate={animate == true ? "right" : "none"}
              variant={variant}
              width={textwidth}
              height={height}
              color={textcolor}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default LogoContainer;
