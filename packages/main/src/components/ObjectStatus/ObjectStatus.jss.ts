import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  objectStatus: {
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    position: 'relative',
    display: 'flex'
  },
  iconSuccess: {
    '& ui5-icon': {
      color: parameters.sapPositiveTextColor
    }
  },
  iconWarning: {
    '& ui5-icon': {
      color: parameters.sapCriticalTextColor
    }
  },
  iconError: {
    '& ui5-icon': {
      color: parameters.sapNegativeTextColor
    }
  },
  iconNone: {
    '& ui5-icon': {
      color: parameters.sapNeutralTextColor
    }
  },
  iconInformation: {
    color: parameters.sapInformativeElementColor
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    verticalAlign: 'bottom',
    lineHeight: 'inherit'
  },
  textSuccess: {
    color: parameters.sapPositiveTextColor
  },
  textError: {
    color: parameters.sapNegativeTextColor
  },
  textWarning: {
    color: parameters.sapCriticalTextColor
  },
  textInformation: {
    color: parameters.sapInformativeTextColor
  },
  textNone: {
    color: parameters.sapNeutralTextColor
  }
});

export default styles;
