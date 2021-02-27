import {
  ColorScheme,
  Phase,
  SpecificPhase,
} from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';
import { getColorsForConsoleLogMessage } from './get-colors-for-console-log';

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
