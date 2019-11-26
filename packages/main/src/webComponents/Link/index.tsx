import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

export interface LinkPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  href?: string; // @generated
  target?: string; // @generated
  design?: LinkDesign; // @generated
  wrap?: boolean; // @generated
  onClick?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const Link: FC<LinkPropTypes> = withLazyWebComponent<LinkPropTypes>('Link', () =>
  import('@ui5/webcomponents/dist/Link')
);

Link.displayName = 'Link';

Link.defaultProps = {
  design: LinkDesign.Default // @generated
};

export { Link };
