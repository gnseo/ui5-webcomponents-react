import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface InputPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  placeholder?: string; // @generated
  readonly?: boolean; // @generated
  type?: InputType; // @generated
  value?: string; // @generated
  valueState?: ValueState; // @generated
  name?: string; // @generated
  showSuggestions?: boolean; // @generated
  onChange?: (event: Event) => void; // @generated
  onInput?: (event: Event) => void; // @generated
  onSubmit?: (event: Event) => void; // @generated
  onSuggestionItemSelect?: (event: Event) => void; // @generated
  icon?: ReactNode; // @generated
  children?: string;
}

const Input: FC<InputPropTypes> = withLazyWebComponent<InputPropTypes>('Input', () =>
  import('@ui5/webcomponents/dist/Input')
);

Input.displayName = 'Input';

Input.defaultProps = {
  placeholder: null, // @generated
  type: InputType.Text, // @generated
  value: '', // @generated
  valueState: ValueState.None // @generated
};

export { Input };
