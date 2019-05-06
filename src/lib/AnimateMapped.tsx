import * as React from "react";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Jump from "react-reveal/Jump";
import Jello from "react-reveal/Jello";

interface ComponentProps {
  animate: "left" | "right" | "none";
  text?: string;
  height?: number;
  width?: any;
  classes?: any;
  children?: any;
}

const animateMapping = {
  right: { right: true },
  left: { left: true }
};

export function randomInt(min: any, max: any) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mapAnimateProps(animate: string) {
  return animateMapping[animate];
}

const animations = [
  Bounce,
  LightSpeed,
  Slide,
  Zoom,
  Rotate,
  Flip,
  Roll,
  Jump,
  Jello
];

export default (props: ComponentProps) => {
  const { animate, children } = props;
  var index = animate && randomInt(0, animations.length - 1);
  var AnimationComponent = animations[index];

  return animate == "none" ? (
    children
  ) : (
    <AnimationComponent {...mapAnimateProps(animate)}>
      {children}
    </AnimationComponent>
  );
};
