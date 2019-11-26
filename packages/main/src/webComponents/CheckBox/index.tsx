import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface CheckBoxPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  checked?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  wrap?: boolean; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
}

const CheckBox: FC<CheckBoxPropTypes> = withLazyWebComponent<CheckBoxPropTypes>('CheckBox', () =>
  import('@ui5/webcomponents/dist/CheckBox')
);

CheckBox.displayName = 'CheckBox';

CheckBox.defaultProps = {
  valueState: ValueState.None // @generated
};

export { CheckBox };
