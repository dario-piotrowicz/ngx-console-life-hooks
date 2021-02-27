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
    case 'angular':
      colors = [
        { color: '#FFF', bgColor: '#DD0031' },
        { color: '#53A7EB', bgColor: 'inherit' },
        { color: '#FFF', bgColor: '#C3002F' },
        { color: '#0A559B', bgColor: 'inherit' },
      ];
      break;
    case 'react':
      colors = [
        { color: '#5FD9FB', bgColor: '#1A1C22' },
        { color: '#fff', bgColor: '#1A1C22' },
        { color: '#5FD9FB', bgColor: '#1A1C22' },
        { color: '#047291', bgColor: '#1A1C22' },
      ];
      break;
    case 'vue':
      colors = [
        { color: '#FFF', bgColor: '#338F70' },
        { color: '#338F70', bgColor: 'inherit' },
        { color: '#FFF', bgColor: '#338F70' },
        { color: '#35495E', bgColor: 'inherit' },
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
