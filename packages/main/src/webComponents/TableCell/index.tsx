import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TableCellPropTypes extends WithWebComponentPropTypes {
  content?: ReactNode | ReactNode[];
}

const TableCell: FC<TableCellPropTypes> = withLazyWebComponent<TableCellPropTypes>('TableCell', () =>
  import('@ui5/webcomponents/dist/TableCell')
);

TableCell.displayName = 'TableCell';

export { TableCell };
