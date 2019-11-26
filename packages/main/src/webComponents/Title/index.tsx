import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';

export interface TitlePropTypes extends WithWebComponentPropTypes {
  wrap?: boolean; // @generated
  level?: TitleLevel; // @generated
  children?: string; // @generated
}

const Title: FC<TitlePropTypes> = withLazyWebComponent<TitlePropTypes>('Title', () =>
  import('@ui5/webcomponents/dist/Title')
);

Title.displayName = 'Title';

Title.defaultProps = {
  level: TitleLevel.H2 // @generated
};

export { Title };
