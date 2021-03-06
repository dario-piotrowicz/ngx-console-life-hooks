import {
  ColorScheme,
  Indent,
  Phase,
  SpecificPhase,
} from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';
import { getColorsForConsoleLogMessage } from './get-colors-for-console-log';
import { Input } from '@angular/core';

export const generateConsoleLogForHook = (
  componentName: string,
  phase: Phase | void,
  currentPhase: SpecificPhase,
  lifecycleHookName: LifecycleHookName,
  colorScheme: ColorScheme,
  indent: Indent
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

  let indentation = '';
  for (let i = 0; i < indent; i++) {
    indentation += '\t';
  }

  const consoleLogMessage = `${indentation}%c${componentName}%c ======> %c${lifecycleHookName}%c${extraInfo}`;
  const colors = getColorsForConsoleLogMessage(colorScheme);

  return (args?: any) => {
    if (args) {
      console.log(consoleLogMessage, ...colors, `\n${indentation}`, {
        arguments: args,
      });
    } else {
      console.log(consoleLogMessage, ...colors);
    }
  };
};
