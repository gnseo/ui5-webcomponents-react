import { JSSTheme } from '../../interfaces/JSSTheme';

export default ({ parameters }: JSSTheme) => ({
  messageToast: {
    padding: '0 !important',
    borderRadius: '0.25rem !important',
    textAlign: 'center !important',
    boxShadow: parameters.sapContent_Shadow2,
    cursor: 'text',
    minHeight: 'auto !important',
    background: `${parameters.sapList_Background} !important`
  },
  messageToastContainer: {
    maxWidth: '15rem !important'
  },
  messageToastBody: {
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    padding: '1rem !important',
    color: `${parameters.sapList_TextColor} !important`
  }
});
