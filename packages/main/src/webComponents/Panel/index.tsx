import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, ReactNode } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';
import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';

export interface PanelPropTypes extends WithWebComponentPropTypes {
  headerText?: string; // @generated
  fixed?: boolean; // @generated
  collapsed?: boolean; // @generated
  accessibleRole?: PanelAccessibleRoles; // @generated
  onToggle?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  children?: ReactNode | ReactNode[];
}

const Panel: FC<PanelPropTypes> = withLazyWebComponent<PanelPropTypes>('Panel', () =>
  import('@ui5/webcomponents/dist/Panel')
);

Panel.displayName = 'Panel';

Panel.defaultProps = {
  headerText: '', // @generated
  accessibleRole: PanelAccessibleRoles.Form // @generated
};

export { Panel };
