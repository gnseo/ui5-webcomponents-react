import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface GroupHeaderListItemPropTypes extends WithWebComponentPropTypes {
  children?: string; // @generated
}

const GroupHeaderListItem: FC<GroupHeaderListItemPropTypes> = withLazyWebComponent<GroupHeaderListItemPropTypes>(
  UI5GroupHeaderListItem
);

GroupHeaderListItem.displayName = 'GroupHeaderListItem';

export { GroupHeaderListItem };
