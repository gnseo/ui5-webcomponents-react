import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface BadgePropTypes extends WithWebComponentPropTypes {
  colorScheme?: string; // @generated
  children?: string; // @generated
  icon?: any; // @generated
}

const Badge: FC<BadgePropTypes> = withLazyWebComponent<BadgePropTypes>('Badge', () =>
  import('@ui5/webcomponents/dist/Badge')
);

Badge.displayName = 'Badge';

Badge.defaultProps = {
  colorScheme: '1' // @generated
};

export { Badge };
