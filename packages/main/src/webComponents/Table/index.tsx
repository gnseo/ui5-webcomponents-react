import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TablePropTypes extends WithWebComponentPropTypes {
  showNoData?: boolean; // @generated
  noDataText?: string; // @generated
  stickyColumnHeader?: boolean;
  children?: ReactNode | ReactNode[];
  columns?: ReactNode | ReactNode[];
}

const Table: FC<TablePropTypes> = withLazyWebComponent<TablePropTypes>('Table', () =>
  import('@ui5/webcomponents/dist/Table')
);

Table.displayName = 'Table';

export { Table };
