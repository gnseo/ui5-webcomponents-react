import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC } from 'react';
import { withLazyWebComponent } from '@ui5/webcomponents-react/lib/withLazyWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withLazyWebComponent';

export interface TextAreaPropTypes extends WithWebComponentPropTypes {
  value?: string; // @generated
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  placeholder?: string; // @generated
  rows?: number; // @generated
  maxLength?: number; // @generated
  showExceededText?: boolean; // @generated
  growing?: boolean; // @generated
  growingMaxLines?: number; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
}

const TextArea: FC<TextAreaPropTypes> = withLazyWebComponent<TextAreaPropTypes>('TextArea', () =>
  import('@ui5/webcomponents/dist/TextArea')
);

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
  rows: 0, // @generated
  maxLength: null, // @generated
  growingMaxLines: 0 // @generated
};

export { TextArea };
