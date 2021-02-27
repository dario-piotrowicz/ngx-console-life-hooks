import { ColorScheme } from './console-hooks-options.model';

interface ColorsForSection {
  color?: string;
  bgColor?: string;
}

interface ColorsForScheme {
  component: ColorsForSection;
  arrow: ColorsForSection;
  hook: ColorsForSection;
  extraInfo: ColorsForSection;
}

const colorSchemes: { [key: string]: ColorsForScheme } = {
  terminal: {
    component: { color: '#33FF33', bgColor: '#000' },
    arrow: { color: '#33FF33', bgColor: '#000' },
    hook: { color: '#33FF33', bgColor: '#000' },
    extraInfo: { color: '#1c771c', bgColor: '#000' },
  },
  angular: {
    component: { color: '#FFF', bgColor: '#DD0031' },
    arrow: { color: '#53A7EB' },
    hook: { color: '#FFF', bgColor: '#C3002F' },
    extraInfo: { color: '#0A559B' },
  },
  react: {
    component: { color: '#5FD9FB', bgColor: '#1A1C22' },
    arrow: { color: '#fff', bgColor: '#1A1C22' },
    hook: { color: '#5FD9FB', bgColor: '#1A1C22' },
    extraInfo: { color: '#047291', bgColor: '#1A1C22' },
  },
  vue: {
    component: { color: '#FFF', bgColor: '#338F70' },
    arrow: { color: '#338F70' },
    hook: { color: '#FFF', bgColor: '#338F70' },
    extraInfo: { color: '#35495E' },
  },
  none: {
    component: {},
    arrow: {},
    hook: {},
    extraInfo: {},
  },
  default: {
    component: { color: '#0e78e3' },
    arrow: { color: 'inherit' },
    hook: { color: '#1fd91c' },
    extraInfo: { color: '#777' },
  },
};

export const getColorsForConsoleLogMessage = (colorScheme: ColorScheme) => {
  const schemeColors = colorSchemes[colorScheme] || colorSchemes['default'];

  return [
    schemeColors.component,
    schemeColors.arrow,
    schemeColors.hook,
    schemeColors.extraInfo,
  ].map((colors) => {
    const fgColor = colors.color ? `color: ${colors.color}; ` : '';
    const bgColor = colors.bgColor ? `background-color: ${colors.bgColor}` : '';
    return `${fgColor}${bgColor}`;
  });
};
