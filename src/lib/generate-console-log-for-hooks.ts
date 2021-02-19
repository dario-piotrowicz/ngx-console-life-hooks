import {
  ColorScheme,
  Phase,
  SpecificPhase,
} from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';

export const generateConsoleLogForHook = (
  componentName: string,
  phase: Phase | void,
  currentPhase: SpecificPhase,
  lifecycleHookName: LifecycleHookName,
  colorScheme: ColorScheme
): ((args: any) => void) => {
  let extraInfo = '';
  if (currentPhase === 'before') {
    extraInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
  } else if (currentPhase === 'after') {
    extraInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
  } else if (currentPhase === 'non-implemented') {
    extraInfo = ' (non-implemented)';
  } else {
    throw 'generateConsoleLogForHook: invalid currentPhase provided';
  }

  const consoleLogMessage = `%c${componentName}%c ======> %c${lifecycleHookName}%c${extraInfo}`;

  return (args?: any) => {
    if (args) {
      console.log(
        consoleLogMessage,
        ...getColorsForConsoleLogMessage(colorScheme),
        '\n',
        { arguments: args }
      );
    } else {
      console.log(
        consoleLogMessage,
        ...getColorsForConsoleLogMessage(colorScheme)
      );
    }
  };
};

const getColorsForConsoleLogMessage = (colorScheme: ColorScheme) => {
  let colors: { color: string; bgColor?: string }[] = [];
  switch (colorScheme) {
    case 'terminal':
      colors = [
        { color: '#33FF33', bgColor: '#000' },
        { color: '#33FF33', bgColor: '#000' },
        { color: '#33FF33', bgColor: '#000' },
        { color: '#1c771c', bgColor: '#000' },
      ];
      break;
    case 'none':
      colors = [
        { color: 'inherit' },
        { color: 'inherit' },
        { color: 'inherit' },
        { color: 'inherit' },
      ];
      break;
    default:
      colors = [
        { color: '#0e78e3' },
        { color: 'inherit' },
        { color: '#1fd91c' },
        { color: '#777' },
      ];
      break;
  }
  return colors.map((colors) => {
    const bgColor = colors.bgColor ? `background-color: ${colors.bgColor}` : '';
    return `color: ${colors.color}; ${bgColor}`;
  });
};
