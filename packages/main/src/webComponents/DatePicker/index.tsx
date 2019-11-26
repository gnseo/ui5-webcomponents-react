import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface DatePickerPropTypes extends WithWebComponentPropTypes {
  value?: string; // @generated
  valueState?: ValueState; // @generated
  formatPattern?: string; // @generated
  primaryCalendarType?: CalendarType; // @generated
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  placeholder?: string; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
  onInput?: (event: Event) => void; // @generated
}

const DatePicker: FC<DatePickerPropTypes> = withLazyWebComponent<DatePickerPropTypes>('DatePicker', () =>
  import('@ui5/webcomponents/dist/DatePicker')
);

DatePicker.displayName = 'DatePicker';

DatePicker.defaultProps = {
  valueState: ValueState.None // @generated
};

export { DatePicker };
