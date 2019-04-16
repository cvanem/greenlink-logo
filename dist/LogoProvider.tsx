import * as React from 'react';

//Material UI Next
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

//Components
const Logo = React.lazy(() => import('./Logo'));
const LogoText = React.lazy(() => import('./LogoText'));

//Misc
import { logoTextWidthMap } from './LogoText';
import { logoWidthMap, logoHeightMap } from './Logo';

interface ComponentProps {
  variant?: 'condensed' | 'small' | 'normal' | 'large'; //condensed or normal
  children?: any;
  icon?: boolean;
  text?: boolean;
  animate?: boolean;
  classes?: any;
  height?: number; //height of the entire logo, used for both the text and the link
  textwidth?: number;
  logowidth?: number;
}

const decorate = withStyles(({ palette }) => ({
  root: {
    display: 'inline-block',
    overflow: 'visible',
  },
  container: {
    display: 'inline-block',
  },
  textcontainer: {
    display: 'inline-block',
    postion: 'relative', //allows top/bottom to be specified
  },
}));

export const logoTextMarginMap = { condensed: 3, small: 5, normal: 5, large: 8 };
export const spacingMap = { condensed: 8, small: 8, normal: 8, large: 16 };

export default decorate(
  class LogoProvider extends React.Component<ComponentProps & WithStyles<'root'>, {}> {
    public render() {
      const { icon, text, variant, animate, classes } = this.props;      

      const height = logoHeightMap[variant];
      const textwidth = logoTextWidthMap[variant];
      const logowidth = logoWidthMap[variant];

      const spacing = icon && text ? spacingMap[variant] : 0;
      const marginBottom = logoTextMarginMap[variant];
      
      return (
        <React.Fragment>
          <div className={classes.root}>
            {icon && (
              <div style={{ display: 'inline-block', width: logowidth, height: height, marginRight: spacing / 2 }}>
                <React.Suspense fallback={<React.Fragment />}>
                  <Logo animate={animate && 'left'} height={height} />
                </React.Suspense>
              </div>
            )}
            {text && (
              <div className={classes.textcontainer} style={{ marginLeft: spacing / 2, position: 'relative', bottom: marginBottom }}>
                <React.Suspense fallback={<React.Fragment />}>
                  <LogoText text='greenlink' animate={animate && 'right'} variant={variant} width={textwidth} height={height} />
                </React.Suspense>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    }
  }
);

/*

const mapStateToProps = (state: ApplicationState, ownProp: ComponentProps): ComponentProps => {
  const width = state.layout.width;
  const variant = ownProp.variant ? ownProp.variant : width < 410 ? 'condensed' : width < 520 ? 'small' : width < 1000 ? 'normal' : 'large';
  return {
    variant,
    height: logoHeightMap[variant],
    textwidth: logoTextWidthMap[variant],
    logowidth: logoWidthMap[variant],
    icon: ownProp.icon != null ? ownProp.icon : true,
    text: ownProp.text != null ? ownProp.text : true,
  };
};

export default connect(mapStateToProps)(DecoratedClass as any);
*/