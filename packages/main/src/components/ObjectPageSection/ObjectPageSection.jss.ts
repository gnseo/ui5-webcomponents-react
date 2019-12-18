import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  header: {
    padding: '0 3rem 0 2.5rem',
    borderBottom: `1px solid ${parameters.sapGroup_TitleBorderColor}`,
    boxSizing: 'border-box',
    height: '2.75rem'
  },
  title: {
    height: '2.75rem',
    color: parameters.sapTextColor,
    fontSize: parameters.sapFontHeader4Size,
    borderBottom: `1px solid ${parameters.sapActiveColor}`,
    display: 'inline-block',
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: parameters.sapFontFamily
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  sectionContent: {
    whiteSpace: 'normal'
  },
  sectionContentInner: {
    padding: '1rem 2rem 2rem 2.5rem',
    fontFamily: parameters.sapFontFamily
  }
});

export default styles;
