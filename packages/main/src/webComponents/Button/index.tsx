import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface ButtonPropTypes extends WithWebComponentPropTypes {
  design?: ButtonDesign; // @generated
  disabled?: boolean; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  submits?: boolean; // @generated
  onClick?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const Button: FC<ButtonPropTypes> = withLazyWebComponent<ButtonPropTypes>('Button', () =>
  import('@ui5/webcomponents/dist/Button')
);

Button.displayName = 'Button';

Button.defaultProps = {
  design: ButtonDesign.Default // @generated
};

export { Button };
