import { Phase, SpecificPhase } from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';

export const generateConsoleLogForHook = (
  componentName: string,
  phase: Phase | void,
  currentPhase: SpecificPhase,
  lifecycleHookName: LifecycleHookName
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

  const consoleLogMessage = `${componentName} ======> ${lifecycleHookName}${extraInfo}`;

  return (args?: any) => {
    if (args) {
      console.log(consoleLogMessage, { arguments: args });
    } else {
      console.log(consoleLogMessage);
    }
  };
};
