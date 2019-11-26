import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TokenizerPropTypes extends WithWebComponentPropTypes {
  showMore?: boolean; // @generated
  disabled?: boolean; // @generated
  onTokenDelete?: (event: Event) => void; // @generated
  onShowMoreItemsPress?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

const Tokenizer: FC<TokenizerPropTypes> = withLazyWebComponent<TokenizerPropTypes>('Tokenizer', () =>
  import('@ui5/webcomponents/dist/Tokenizer')
);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
