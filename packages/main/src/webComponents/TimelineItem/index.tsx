import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TimelineItemPropTypes extends WithWebComponentPropTypes {
  icon?: string; // @generated
  itemName?: string; // @generated
  itemNameClickable?: boolean; // @generated
  titleText?: string; // @generated
  subtitleText?: string; // @generated
  onItemNameClick?: (event: Event) => void; // @generated
  children?: ReactNode; // @generated
}

const TimelineItem: FC<TimelineItemPropTypes> = withLazyWebComponent<TimelineItemPropTypes>('TimelineItem', () =>
  import('@ui5/webcomponents/dist/TimelineItem')
);

TimelineItem.displayName = 'TimelineItem';

TimelineItem.defaultProps = {
  icon: null // @generated
};

export { TimelineItem };
