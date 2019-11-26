import React, { FC, ReactNode } from 'react';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface CardPropTypes extends WithWebComponentPropTypes {
  heading?: string; // @generated
  subtitle?: string; // @generated
  status?: string; // @generated
  headerInteractive?: boolean; // @generated
  avatar?: string; // @generated
  onHeaderClick?: (event: Event) => void; // @generated
  children?: ReactNode | ReactNode[]; // @generated
}

const Card: FC<CardPropTypes> = withLazyWebComponent<CardPropTypes>('Card', () =>
  import('@ui5/webcomponents/dist/Card')
);

Card.displayName = 'Card';

export { Card };
