import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { SemanticColor } from '@ui5/webcomponents-react/lib/SemanticColor';

export interface TabPropTypes extends WithWebComponentPropTypes {
  text?: string; // @generated
  disabled?: boolean; // @generated
  additionalText?: string; // @generated
  icon?: string; // @generated
  semanticColor?: SemanticColor; // @generated
  selected?: boolean; // @generated
  children?: ReactNode | ReactNode[];
}

const Tab: FC<TabPropTypes> = withLazyWebComponent<TabPropTypes>('Tab', () => import('@ui5/webcomponents/dist/Tab'));

Tab.displayName = 'Tab';

Tab.defaultProps = {
  semanticColor: SemanticColor.Default // @generated
};

export { Tab };
