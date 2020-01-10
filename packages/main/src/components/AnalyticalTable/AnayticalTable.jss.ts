import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  tableContainer: {
    width: '100%',
    height: 'calc(100% - 2.75rem)',
    minHeight: '3rem'
  },
  table: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    overflowX: 'auto'
  },
  tableHeaderRow: {
    boxShadow: 'none !important',
    height: '2.75rem',
    zIndex: 1,
    position: 'relative'
  },
  th: {
    backgroundColor: parameters.sapList_HeaderBackground,
    height: '2.75rem',
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    color: parameters.sapList_HeaderTextColor,
    borderTop: `1px solid ${parameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${parameters.sapList_BorderColor}`,
    borderRight: `1px solid ${parameters.sapList_BorderColor}`,
    textAlign: 'start',
    boxSizing: 'border-box',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapList_BorderColor}`
    }
  },
  tbody: {
    position: 'relative',
    zIndex: 0,
    overflowX: 'auto',
    backgroundColor: parameters.sapList_Background
  },
  alternateRowColor: {
    '& $tr:nth-child(even)': {
      backgroundColor: parameters.sapUiListHeaderBackground
    }
  },
  tr: {
    zIndex: 0,
    backgroundColor: parameters.sapList_Background,
    color: parameters.sapList_TextColor,
    '&[data-is-selected]': {
      backgroundColor: `${parameters.sapList_SelectionBackgroundColor} !important`
    },
    '&[data-is-selected]:hover': {
      backgroundColor: `${parameters.sapList_Hover_SelectionBackground} !important`
    }
  },
  alternateRowColor: {
    '& $tr:nth-child(even)': {
      backgroundColor: parameters.sapList_HeaderBackground
    }
  },
  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${parameters.sapList_TableGroupHeaderBackground} !important`,
      border: `1px solid ${parameters.sapList_TableGroupHeaderBorderColor}`,
      color: parameters.sapList_TextColor,
      '& $tableCell': {
        borderRight: 'none'
      }
    }
  },
  selectable: {
    '& $tr:hover': {
      backgroundColor: parameters.sapList_Hover_Background,
      cursor: 'pointer'
    },
    '& $tr:active:not([data-is-selected]):not($tableGroupHeader)': {
      backgroundColor: parameters.sapList_Active_Background,
      '& $tableCell': {
        borderRight: `1px solid ${parameters.sapList_Active_Background}`,
        color: `${parameters.sapList_Active_TextColor}`,
        '--sapTextColor': parameters.sapList_Active_TextColor
      }
    }
  },
  tableCell: {
    height: '2.75rem',
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${parameters.sapList_BorderColor}`,
    boxSizing: 'border-box',
    borderRight: `1px solid ${parameters.sapList_BorderColor}`,
    display: 'flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapList_BorderColor}`
    },
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignItems: 'center'
  },
  noDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: parameters.sapList_Background,
    width: '100%',
    boxSizing: 'border-box',
    color: parameters.sapList_TextColor,
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${parameters.sapList_BorderColor}`
  },
  compactSize: {
    '&$tableContainer': {
      height: 'calc(100% - 2rem)'
    },
    '& $tableHeaderRow': {
      height: '2rem'
    },
    '& $th': {
      height: '2rem'
    },
    '& $tableCell': {
      height: '2rem'
    }
  },

  modifiedRowHeight: {
    '& $tableCell': {
      height: (props) => `${props.rowHeight}px`
    }
  }
});

export default styles;
