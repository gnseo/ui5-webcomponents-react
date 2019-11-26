import React, { FC, ReactNode } from 'react';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface ShellBarPropTypes extends WithWebComponentPropTypes {
  logo?: string; // @generated
  primaryTitle?: string; // @generated
  secondaryTitle?: string; // @generated
  notificationCount?: string; // @generated
  profile?: string; // @generated
  showNotifications?: boolean; // @generated
  showProductSwitch?: boolean; // @generated
  showCoPilot?: boolean; // @generated
  breakpointSize?: string; // @generated
  showBlockLayer?: boolean; // @generated
  onNotificationsClick?: (event: Event) => void; // @generated
  onProfileClick?: (event: Event) => void; // @generated
  onProductSwitchClick?: (event: Event) => void; // @generated
  onLogoClick?: (event: Event) => void; // @generated
  onCoPilotClick?: (event: Event) => void; // @generated
  onMenuItemClick?: (event: Event) => void; // @generated
  children?: ReactNode; // @generated
  menuItems?: ReactNode; // @generated
  searchField?: ReactNode; // @generated
  icon?: ReactNode; // @generated
}

const ShellBar: FC<ShellBarPropTypes> = withLazyWebComponent<ShellBarPropTypes>('ShellBar', () =>
  import('@ui5/webcomponents/dist/ShellBar')
);

ShellBar.displayName = 'ShellBar';

export { ShellBar };
