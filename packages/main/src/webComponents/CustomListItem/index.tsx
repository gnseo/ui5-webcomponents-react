import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';

export interface CustomListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
  children?: ReactNode | ReactNode[];
}

const CustomListItem: FC<CustomListItemPropTypes> = withLazyWebComponent<CustomListItemPropTypes>(
  'CustomListItem',
  () => import('@ui5/webcomponents/dist/CustomListItem')
);

CustomListItem.displayName = 'CustomListItem';

CustomListItem.defaultProps = {
  type: ListItemTypes.Active // @generated
};

export { CustomListItem };
