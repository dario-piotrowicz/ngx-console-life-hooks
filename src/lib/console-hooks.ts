import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import {
  ConsoleHooksOptions,
  Phase,
  SpecificPhase,
} from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';

export function ConsoleHooks({
  phase = defaultConsoleHooksOptions.phase,
  logNonImplemented = false,
}: ConsoleHooksOptions = defaultConsoleHooksOptions) {
  return function (target: any) {
    const componentName = target.name;
    const lifeCycleNames: LifecycleHookName[] = [
      'ngOnInit',
      'ngOnChanges',
      'ngOnDestroy',
    ];
    lifeCycleNames.forEach((lifecycleName) =>
      handleLifecycleHook(
        lifecycleName,
        componentName,
        target,
        phase,
        logNonImplemented
      )
    );
  };
}

const handleLifecycleHook = (
  lifecycleHookName: LifecycleHookName,
  componentName: string,
  target: any,
  phase: Phase,
  logNonImplemented: boolean
) => {
  const prototype = target.prototype;
  const original = prototype[lifecycleHookName];

  if (typeof original === 'function') {
    const consoleLogBeforeFn =
      phase === 'before' || phase === 'beforeAndAfter'
        ? generateConsoleLogForHook(
            componentName,
            phase,
            'before',
            lifecycleHookName
          )
        : null;
    const consoleLogAfterFn =
      phase === 'after' || phase === 'beforeAndAfter'
        ? generateConsoleLogForHook(
            componentName,
            phase,
            'after',
            lifecycleHookName
          )
        : null;

    prototype[lifecycleHookName] = function (args: any) {
      if (consoleLogBeforeFn) {
        consoleLogBeforeFn(args);
      }
      original.apply(this);
      if (consoleLogAfterFn) {
        consoleLogAfterFn(args);
      }
    };
  } else if (logNonImplemented) {
    const consoleLogFn = generateConsoleLogForHook(
      componentName,
      null,
      'non-implemented',
      lifecycleHookName
    );
    prototype[lifecycleHookName] = (args: any) => consoleLogFn(args);
  }
};

const generateConsoleLogForHook = (
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
