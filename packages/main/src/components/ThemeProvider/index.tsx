import { isIE } from '@ui5/webcomponents-core/dist/sap/ui/Device';
import { createGenerateClassName } from '@ui5/webcomponents-react-base/lib/createGenerateClassName';
import * as sap_fiori_3 from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { Themes } from '@ui5/webcomponents-react/lib/Themes';
import { _ as fiori3Theme } from '@ui5/webcomponents/dist/assets/themes/sap_fiori_3/parameters-bundle.css.json';
import { Jss } from 'jss';
import React, { FC, Fragment, lazy, ReactNode, Suspense, useEffect, useState } from 'react';
import { JssProvider, ThemeProvider as ReactJssThemeProvider } from 'react-jss';

const MessageToast = lazy(() =>
  import('@ui5/webcomponents-react/lib/MessageToast').then(({ MessageToast }) => ({ default: MessageToast }))
);

export interface ThemeProviderProps {
  /*
   * If true, the Theme Provider will also inject the root node for message toasts.
   * Required in case you want to use them.
   */
  withToastContainer?: boolean;
  children: ReactNode;
  /*
   * Allows you to inject a custom JSS instance, e.g. if you need another insertionPoint or differnent plugins.
   * If not provided, the default instance from `react-jss` will be used.
   */
  jss?: Jss;
  /*
   * The Theme Provider injects the fiori_3 theme variables into the document head.
   * If this prop is set to true, this step is skipped.
   */
  noInjectThemeProperties?: boolean;
}

const getThemingParametersForTheme = (theme) => {
  switch (theme) {
    case Themes.sap_fiori_3:
      return sap_fiori_3;
    default: {
      return sap_fiori_3;
    }
  }
};

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { withToastContainer, children, jss, noInjectThemeProperties } = props;

  const [themeContext, setThemeContext] = useState({
    theme: Themes.sap_fiori_3,
    contentDensity: ContentDensity.Cozy,
    parameters: sap_fiori_3
  });

  const [generateClassName, setGenerateClassName] = useState(() =>
    typeof window !== 'undefined' ? createGenerateClassName() : undefined
  );

  useEffect(() => {
    Promise.all([
      import('@ui5/webcomponents-base/dist/config/CompactSize'),
      import('@ui5/webcomponents-base/dist/config/Theme')
    ]).then(([{ getCompactSize }, { getTheme }]) => {
      const theme = getTheme();
      const isCompactSize = getCompactSize();

      if (theme !== Themes.sap_fiori_3 || isCompactSize) {
        setThemeContext({
          theme,
          contentDensity: isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy,
          parameters: getThemingParametersForTheme(theme)
        });
      }
    });

    if (generateClassName === undefined) {
      setGenerateClassName(createGenerateClassName());
    }
  }, []);

  useEffect(() => {
    if (!noInjectThemeProperties) {
      Promise.all([
        import('@ui5/webcomponents-base/dist/config/Theme'),
        import('@ui5/webcomponents-base/dist/boot').then((mod) => mod.default())
      ]).then(([{ getTheme }]) => {
        // only inject parameters for sap_fiori_3 and if they haven't been injected before
        let styleElement: HTMLStyleElement = document.head.querySelector(
          'style[data-ui5-webcomponents-react-theme-properties]'
        );
        if (getTheme() === Themes.sap_fiori_3) {
          if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.setAttribute('data-ui5-webcomponents-react-theme-properties', '');
            document.head.insertAdjacentElement('afterbegin', styleElement);
          }

          if (!styleElement.textContent) {
            styleElement.textContent = fiori3Theme;
          }

          const CSSVarsPonyfill = window['CSSVarsPonyfill'];
          if (isIE() && CSSVarsPonyfill) {
            setTimeout(() => {
              CSSVarsPonyfill.resetCssVars();
              CSSVarsPonyfill.cssVars();
            }, 0);
          }
        }
      });
    }
  }, [noInjectThemeProperties]);

  return (
    <JssProvider generateId={generateClassName} jss={jss}>
      <ReactJssThemeProvider theme={themeContext}>
        <Fragment>
          {children}

          {withToastContainer && (
            <Suspense fallback={null}>
              <MessageToast />
            </Suspense>
          )}
        </Fragment>
      </ReactJssThemeProvider>
    </JssProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
ThemeProvider.defaultProps = {
  withToastContainer: false,
  noInjectThemeProperties: false
};

export { ThemeProvider };
