import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import '@ui5/webcomponents/dist/features/InputSuggestions';
import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface MultiComboBoxPropTypes extends WithWebComponentPropTypes {
  value?: string; // @generated
  placeholder?: string; // @generated
  allowCustomValues?: boolean; // @generated
  disabled?: boolean; // @generated
  valueState?: ValueState; // @generated
  readonly?: boolean; // @generated
  onChange?: (event: Event) => void; // @generated
  onInput?: (event: Event) => void; // @generated
  onSelectionChange?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

const MultiComboBox: FC<MultiComboBoxPropTypes> = withLazyWebComponent<MultiComboBoxPropTypes>('MultiComboBox', () =>
  import('@ui5/webcomponents/dist/MultiComboBox')
);

MultiComboBox.displayName = 'MultiComboBox';

MultiComboBox.defaultProps = {
  value: '', // @generated
  placeholder: '', // @generated
  valueState: ValueState.None // @generated
};

export { MultiComboBox };
