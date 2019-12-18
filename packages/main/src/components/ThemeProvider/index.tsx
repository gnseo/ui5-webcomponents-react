import { getCompactSize } from '@ui5/webcomponents-base/dist/config/CompactSize';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { createGenerateClassName } from '@ui5/webcomponents-react-base/lib/createGenerateClassName';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { MessageToast } from '@ui5/webcomponents-react/lib/MessageToast';
import { Jss } from 'jss';
import React, { FC, Fragment, ReactNode, useMemo } from 'react';
import { JssProvider, ThemeProvider as ReactJssThemeProvider } from 'react-jss';

export interface ThemeProviderProps {
  /*
   * If true, the Theme Provider will also inject the root node for message toasts.
   * Required in case you want to use them.
   */
  withToastContainer?: boolean;
  children: ReactNode;
  /*
   * Allows you to inject a custom JSS instance, e.g. if you need another insertionPoint or different plugins.
   * If not provided, the default instance from `react-jss` will be used.
   */
  jss?: Jss;
}

const generateClassName = createGenerateClassName();

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { withToastContainer, children, jss } = props;
  const theme = getTheme();
  const isCompactSize = getCompactSize();

  const themeContext = useMemo(() => {
    return {
      theme,
      contentDensity: isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy,
      parameters: ThemingParameters
    };
  }, [theme, isCompactSize]);

  return (
    <JssProvider generateId={generateClassName} jss={jss}>
      <ReactJssThemeProvider theme={themeContext}>
        <Fragment>
          {children}
          {withToastContainer && <MessageToast />}
        </Fragment>
      </ReactJssThemeProvider>
    </JssProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
ThemeProvider.defaultProps = {
  withToastContainer: false
};

export { ThemeProvider };
