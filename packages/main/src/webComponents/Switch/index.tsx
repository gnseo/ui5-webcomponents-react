import React, { FC } from 'react';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface SwitchPropTypes extends WithWebComponentPropTypes {
  checked?: boolean; // @generated
  disabled?: boolean; // @generated
  textOn?: string; // @generated
  textOff?: string; // @generated
  graphical?: boolean; // @generated
  onChange?: (event: Event) => void; // @generated
}

const Switch: FC<SwitchPropTypes> = withLazyWebComponent<SwitchPropTypes>('Switch', () =>
  import('@ui5/webcomponents/dist/Switch')
);

Switch.displayName = 'Switch';

export { Switch };
