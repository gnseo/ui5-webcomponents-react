import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface IconPropTypes extends WithWebComponentPropTypes {
  src?: string; // @generated
  onPress?: (event: Event) => void; // @generated
}

const Icon: FC<IconPropTypes> = withLazyWebComponent<IconPropTypes>('Icon', () =>
  import('@ui5/webcomponents/dist/Icon')
);

Icon.displayName = 'Icon';

export { Icon };
