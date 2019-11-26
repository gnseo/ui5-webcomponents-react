import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface LabelPropTypes extends WithWebComponentPropTypes {
  required?: boolean; // @generated
  wrap?: boolean; // @generated
  for?: string; // @generated
  children?: string; // @generated
}

const Label: FC<LabelPropTypes> = withLazyWebComponent<LabelPropTypes>('Label', () =>
  import('@ui5/webcomponents/dist/Label')
);

Label.displayName = 'Label';

Label.defaultProps = {
  for: '' // @generated
};

export { Label };
