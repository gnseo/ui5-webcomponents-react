import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface SelectPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  valueState?: ValueState; // @generated
  onChange?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

const Select: FC<SelectPropTypes> = withLazyWebComponent<SelectPropTypes>('Select', () =>
  import('@ui5/webcomponents/dist/Select')
);

Select.displayName = 'Select';

Select.defaultProps = {
  valueState: ValueState.None // @generated
};

export { Select };
