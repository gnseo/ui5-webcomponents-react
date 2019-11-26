import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface ShellBarItemPropTypes extends WithWebComponentPropTypes {
  src?: string; // @generated
  text?: string; // @generated
  onItemClick?: (event: Event) => void; // @generated
}

const ShellBarItem: FC<ShellBarItemPropTypes> = withLazyWebComponent<ShellBarItemPropTypes>('ShellBarItem', () =>
  import('@ui5/webcomponents/dist/ShellBarItem')
);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
