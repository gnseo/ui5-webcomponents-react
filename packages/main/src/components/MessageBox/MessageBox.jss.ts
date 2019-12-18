import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { JSSTheme } from '../../interfaces/JSSTheme';

const style = ({ parameters, contentDensity }: JSSTheme) => ({
  header: {
    display: 'flex',
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    lineHeight: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    textAlign: 'center',
    width: 'auto',
    alignItems: 'center',
    '& $icon': {
      '& >*': {
        verticalAlign: 'middle'
      }
    },
    // justifyContent: 'center',
    padding: '0.25rem 1rem',
    boxSizing: 'border-box',
    borderBottom: `1px solid var(--messageBoxBorderColor)`,
    color: parameters.sapContent_LabelColor,
    fontSize: '1rem',
    '&[data-type="Error"]': {
      '--sapPageFooter_BorderColor': parameters.sapErrorBorderColor,
      '--messageBoxBorderColor': parameters.sapErrorBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': parameters.sapNegativeElementColor
      }
    },
    '&[data-type="Warning"]': {
      '--sapPageFooter_BorderColor': parameters.sapWarningBorderColor,
      '--messageBoxBorderColor': parameters.sapWarningBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': parameters.sapCriticalElementColor
      }
    },
    '&[data-type="Success"]': {
      '--sapPageFooter_BorderColor': parameters.sapSuccessBorderColor,
      '--messageBoxBorderColor': parameters.sapSuccessBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': parameters.sapPositiveElementColor
      }
    },
    '&[data-type="Confirm"]': {
      '--sapPageFooter_BorderColor': parameters.sapNeutralBorderColor,
      '--messageBoxBorderColor': parameters.sapNeutralBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': parameters.sapNeutralElementColor
      }
    },
    '&[data-type="Information"]': {
      '--sapPageFooter_BorderColor': parameters.sapNeutralBorderColor,
      '--messageBoxBorderColor': parameters.sapNeutralBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': parameters.sapNeutralElementColor
      }
    },
    '&[data-type="Highlight"]': {
      '--sapPageFooter_BorderColor': parameters.sapInformationBorderColor,
      '--messageBoxBorderColor': parameters.sapInformationBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': parameters.sapInformativeElementColor
      }
    }
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    width: '1rem'
  },
  content: {
    padding: '1rem'
  },
  footer: {
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 0.5rem',
    '& >*:not(:last-child)': {
      marginRight: '0.5rem'
    },
    '& > ui5-button': {
      display: 'flex'
    }
  }
});

export default style;
