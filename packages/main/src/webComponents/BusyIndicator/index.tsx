import React, { FC } from 'react';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface BusyIndicatorPropTypes extends WithWebComponentPropTypes {
  size?: BusyIndicatorSize; // @generated
  active?: boolean; // @generated
}

const BusyIndicator: FC<BusyIndicatorPropTypes> = withLazyWebComponent<BusyIndicatorPropTypes>('BusyIndicator', () =>
  import('@ui5/webcomponents/dist/BusyIndicator')
);

BusyIndicator.displayName = 'BusyIndicator';

BusyIndicator.defaultProps = {
  size: BusyIndicatorSize.Large // @generated
};

export { BusyIndicator };
