import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TabSeparatorPropTypes extends WithWebComponentPropTypes {}

const TabSeparator: FC<TabSeparatorPropTypes> = withLazyWebComponent<TabSeparatorPropTypes>('TabSeparator', () =>
  import('@ui5/webcomponents/dist/TabSeparator')
);

TabSeparator.displayName = 'TabSeparator';

export { TabSeparator };
