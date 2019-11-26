import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface OptionPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  icon?: string; // @generated
  value?: string; // @generated
}

const Option: FC<OptionPropTypes> = withLazyWebComponent<OptionPropTypes>('Option', () =>
  import('@ui5/webcomponents/dist/Option')
);

Option.displayName = 'Option';

Option.defaultProps = {
  icon: null // @generated
};

export { Option };
