import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';

export interface CalendarPropTypes extends WithWebComponentPropTypes {
  timestamp?: number; // @generated
  primaryCalendarType?: CalendarType; // @generated
  selectedDates?: number[]; // @generated
  formatPattern?: string; // @generated
  onSelectedDatesChange?: (event: Event) => void; // @generated
}

const Calendar: FC<CalendarPropTypes> = withLazyWebComponent<CalendarPropTypes>('Calendar', () =>
  import('@ui5/webcomponents/dist/Calendar')
);

Calendar.displayName = 'Calendar';

export { Calendar };
