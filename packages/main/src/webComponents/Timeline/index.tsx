import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TimelinePropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[];
}

const Timeline: FC<TimelinePropTypes> = withLazyWebComponent<TimelinePropTypes>('Timeline', () =>
  import('@ui5/webcomponents/dist/Timeline')
);

Timeline.displayName = 'Timeline';

export { Timeline };
