/**
 * @class ExampleComponent
 */

import * as React from "react";
import LogoContainer from "./lib/LogoContainer";

export type Props = {
  text?: string;
  showtext?: boolean;
  variant?: "condensed" | "small" | "normal" | "large"; //condensed or normal
  icon?: boolean;
  animate?: boolean;
  iconcolor?: string;
  textcolor?: string;
};

export default class ModuleComponent extends React.Component<Props> {
  render() {
    return <LogoContainer {...this.props} />;
  }
}