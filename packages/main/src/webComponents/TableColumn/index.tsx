import React, { CSSProperties, FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TableColumnPropTypes extends WithWebComponentPropTypes {
  minWidth?: number; // @generated
  popinText?: string; // @generated
  demandPopin?: boolean; // @generated
  children?: ReactNode; // @generated
}

const TableColumn: FC<TableColumnPropTypes> = withLazyWebComponent<TableColumnPropTypes>('TableColumn', () =>
  import('@ui5/webcomponents/dist/TableColumn')
);

TableColumn.displayName = 'TableColumn';

TableColumn.defaultProps = {
  minWidth: null // @generated
};

export { TableColumn };
