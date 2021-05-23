import {
  ColorScheme,
  Indent,
  Phase,
  SpecificPhase,
} from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';
import { getColorsForConsoleLogMessage } from './get-colors-for-console-log';
import { Colors } from './colors';

export const generateConsoleLogForHook = (
  componentName: string,
  phase: Phase | void,
  currentPhase: SpecificPhase,
  lifecycleHookName: LifecycleHookName,
  colorScheme: ColorScheme,
  customColors: Colors | null,
  indent: Indent,
  logTime: boolean
): ((args: any) => void) => {
  let extra = '';
  if (currentPhase === 'before') {
    extra = phase === 'beforeAndAfter' ? ' (start)' : '';
  } else if (currentPhase === 'after') {
    extra = phase === 'beforeAndAfter' ? ' (end)' : '';
  } else if (currentPhase === 'non-implemented') {
    extra = ' (non-implemented)';
  } else {
    throw 'generateConsoleLogForHook: invalid currentPhase provided';
  }

  let indentation = '';
  for (let i = 0; i < indent; i++) {
    indentation += '\t';
  }

  const consoleLogMessage = `${indentation}%c${componentName}%c ======> %c${lifecycleHookName}%c${extra}`;
  const colors = getColorsForConsoleLogMessage(colorScheme, customColors);

  return (args?: any) => {
    if (args || logTime) {
      const extra: any = {};
      if (args) {
        extra.arguments = args;
      }
      if (logTime) {
        extra.time = new Date().toISOString();
      }
      console.log(consoleLogMessage, ...colors, `\n${indentation}`, extra);
    } else {
      console.log(consoleLogMessage, ...colors);
    }
  };
};
