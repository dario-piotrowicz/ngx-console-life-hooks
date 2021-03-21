import { ColorScheme } from './console-hooks-options.model';
import { rawColorSchemes } from './raw-color-schemes';

export const getColorsForConsoleLogMessage = (colorScheme: ColorScheme) => {
  const schemeColors =
    rawColorSchemes[colorScheme] || rawColorSchemes['default'];

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
