import { Phase, SpecificPhase } from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';

export const generateConsoleLogForHook = (
  componentName: string,
  phase: Phase | void,
  currentPhase: SpecificPhase,
  lifecycleHookName: LifecycleHookName
): ((args: any) => void) => {
  let consoleLogMessage = '';
  if (currentPhase === 'before') {
    const extraBeforeInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
    consoleLogMessage = `${componentName} ======> ${lifecycleHookName}${extraBeforeInfo}`;
  } else if (currentPhase === 'after') {
    const extraAfterInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
    consoleLogMessage = `${componentName} ======> ${lifecycleHookName}${extraAfterInfo}`;
  } else if (currentPhase === 'non-implemented') {
    consoleLogMessage = `${componentName} ======> ${lifecycleHookName} (non-implemented)`;
  } else {
    throw 'generateConsoleLogForHook: invalid currentPhase provided';
  }

  return (args?: any) => {
    if (args) {
      console.log(consoleLogMessage, { arguments: args });
    } else {
      console.log(consoleLogMessage);
    }
  };
};
