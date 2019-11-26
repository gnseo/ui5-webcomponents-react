import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TableRowPropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[];
}

const TableRow: FC<TableRowPropTypes> = withLazyWebComponent<TableRowPropTypes>('TableRow', () =>
  import('@ui5/webcomponents/dist/TableRow')
);

TableRow.displayName = 'TableRow';

export { TableRow };
