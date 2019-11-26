import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TabContainerPropTypes extends WithWebComponentPropTypes {
  fixed?: boolean;
  collapsed?: boolean;
  showOverflow?: boolean;
  onItemSelect?: (event: Event) => any;
  children?: ReactNode | ReactNode[];
}

const TabContainer: FC<TabContainerPropTypes> = withLazyWebComponent<TabContainerPropTypes>('TabContainer', () =>
  import('@ui5/webcomponents/dist/TabContainer')
);

TabContainer.displayName = 'TabContainer';

export { TabContainer };
