import * as React from 'react';

//Misc
import logo from './link_light.png';
import AnimateMapped from './AnimateMapped';

interface ComponentProps {
  height?: number;
  animate?: string;
  children?: any;
  classes?: any;
}

export const logoWidthMap = {
  condensed: 67,
  small: 89,
  normal: 89,
  large: 143,
};

export const logoHeightMap = {
  condensed: 30,
  small: 40,
  normal: 40,
  large: 64,
};

export default class Logo extends React.Component<ComponentProps, {}> {
  public render() {
    const { animate, height } = this.props;

    //The extra div with a height prevents screen bouncing on initial renders
    return (
      <AnimateMapped animate={animate}>
        <div style={{ height: height }}>
          <img alt='GL' src={logo} style={{ height: height }} />
        </div>
      </AnimateMapped>
    );
  }
}
