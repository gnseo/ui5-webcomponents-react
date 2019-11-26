import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';

export interface MessageStripPropTypes extends WithWebComponentPropTypes {
  type?: MessageStripType; // @generated
  icon?: string; // @generated
  noIcon?: boolean; // @generated
  noCloseButton?: boolean; // @generated
  onClose?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const MessageStrip: FC<MessageStripPropTypes> = withLazyWebComponent<MessageStripPropTypes>('MessageStrip', () =>
  import('@ui5/webcomponents/dist/MessageStrip')
);

MessageStrip.displayName = 'MessageStrip';

MessageStrip.defaultProps = {
  type: MessageStripType.Information // @generated
};

export { MessageStrip };
