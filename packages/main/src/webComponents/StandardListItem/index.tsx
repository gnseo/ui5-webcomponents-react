import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface StandardListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
  description?: string; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  image?: string; // @generated
  info?: string; // @generated
  infoState?: ValueState; // @generated
  children?: ReactNode | ReactNode[] | string;
}

const StandardListItem: FC<StandardListItemPropTypes> = withLazyWebComponent<StandardListItemPropTypes>(
  'StandardListItem',
  () => import('@ui5/webcomponents/dist/StandardListItem')
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  type: ListItemTypes.Active, // @generated
  infoState: ValueState.None // @generated
};

export { StandardListItem };
