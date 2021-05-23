import { ColorScheme } from './console-hooks-options.model';
import { Colors, rawColorSchemes } from './colors';

export const getColorsForConsoleLogMessage = (
  colorScheme: ColorScheme,
  customColors: Colors | null
) => {
  const colors =
    customColors || rawColorSchemes[colorScheme] || rawColorSchemes['default'];

  return [colors.component, colors.arrow, colors.hook, colors.extraInfo].map(
    (colors) => {
      const fgColor = colors && colors.color ? `color: ${colors.color}; ` : '';
      const bgColor =
        colors && colors.bgColor ? `background-color: ${colors.bgColor}` : '';
      return `${fgColor}${bgColor}`;
    }
  );
};
