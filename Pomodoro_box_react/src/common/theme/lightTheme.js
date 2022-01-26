import { breakpoints } from './common'

export const lightTheme = {
  ...breakpoints,
  palette: {
    type: 'light',
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#4ba3c7',
    },
    secondary: {
      light: '#534bae',
      main: '#DC3E22',
      dark: '#000051',
      contrastText: '#81d4fa',
    },
    text: {
      primary: '#333333',
      secondary: '#000051',
    },
    divider: '#DC3E22',
    primaryBtn: {
      text: '#ffffff',
      main: '#A8B64F',
      hover: '#899441',
    },
    secondaryBtn: {
      text: '#ffffff',
      main: '#DC3E22',
      hover: '#B7280F',
    },
    dotedBtn: {
      main: '#C4C4C4',
      text: '#999999',
    },
    input: {
      main: '#F4F4F4',
      text: '#999999',
    },
    errorText: {
      main: '#f44336',
    },
    graph: {
      bar: '#EE735D',
      barHover: '#B7280F',
      footerBar: '#ECECEC',
      grid: '#333333',
      tick: '#999999',
    },
    statistics: {
      focusLight: '#FFDDA9',
      focusDark: '#FFAE35',
      pauseLight: '#DFDCFE',
      pauseDark: '#9C97D7',
      stopLight: '#C5F1FF',
      stopDark: '#7FC2D7',
      emptyLight: '#F4F4F4',
      emptyDark: '#C4C4C4',
      countText: '#F4F4F4',
    },
    timer: {
      headerBarMain: '#C4C4C4',
      headerBarAct: '#DC3E22',
      headerBarPause: '#A8B64F',
      headerBarText: '#FFFFFF',
      remark: '#999999',
    },
  },
}
