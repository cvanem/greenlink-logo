/**
 * @class ExampleComponent
 */
import * as React from 'react';
export declare type Props = {    
    text?: string;
    showtext?: boolean;
    variant?: "condensed" | "small" | "normal" | "large"; //condensed or normal
    icon?: boolean;
    animate?: boolean;
    iconcolor?: string;
    textcolor?: string;
};

export default class ExampleComponent extends React.Component<Props> {
    render(): JSX.Element;
}
