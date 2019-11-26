import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, ReactNode, ReactNodeArray } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TokenPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  readonly?: boolean; // @generated
  onDelete?: (event: Event) => void; // @generated
  onSelect?: (event: Event) => void; // @generated
  children?: ReactNode | ReactNodeArray; // @generated
}

const Token: FC<TokenPropTypes> = withLazyWebComponent<TokenPropTypes>('Token', () =>
  import('@ui5/webcomponents/dist/Token')
);

Token.displayName = 'Token';

export { Token };
