import { JSSTheme } from '../../interfaces/JSSTheme';

export const TextStyles = ({ parameters }: JSSTheme) => ({
  // Text Style
  text: {
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    color: parameters.sapTextColor,
    display: 'inline-block',
    boxSizing: 'border-box',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    maxWidth: '100%'
  },
  renderWhitespace: {
    whiteSpace: 'pre-wrap'
  },
  noWrap: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    overflow: 'hidden',
    '&$renderWhitespace': {
      whiteSpace: 'pre'
    }
  }
});
