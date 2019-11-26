import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface RadioButtonPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  selected?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  name?: string; // @generated
  value?: string; // @generated
  onSelect?: (event: Event) => void; // @generated
}

/**
 * In order to use the Radio Button in Compact Size, please add the following snippet to your `index.html`:
 * ```
 * <script data-ui5-config type="application/json">
 *  { "compactSize": true }
 * </script>
 * ```
 *
 * This Storybook is currently only working in ContentDensity=Cozy.
 */
const RadioButton: FC<RadioButtonPropTypes> = withLazyWebComponent<RadioButtonPropTypes>('RadioButton', () =>
  import('@ui5/webcomponents/dist/RadioButton')
);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  valueState: ValueState.None // @generated
};

export { RadioButton };
