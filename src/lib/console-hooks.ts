import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import { ConsoleHooksOptions, Phase } from './console-hooks-options.model';

export function ConsoleHooks({
  phase = defaultConsoleHooksOptions.phase,
  logNonImplemented = false,
}: ConsoleHooksOptions = defaultConsoleHooksOptions) {
  return function (target: any) {
    const componentName = target.name;
    handleLifeCycleHook(
      'ngOnInit',
      componentName,
      target.prototype,
      phase,
      logNonImplemented
    );
  };
}

const handleLifeCycleHook = (
  lifeCycleHookName: string,
  componentName: string,
  prototype: any,
  phase: Phase,
  logNonImplemented: boolean
) => {
  const original = prototype[lifeCycleHookName];
  if (typeof original === 'function') {
    prototype[lifeCycleHookName] = () => {
      if (phase === 'before' || phase === 'beforeAndAfter') {
        const extraBeforeInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
        console.log(
          `${componentName} ======> ${lifeCycleHookName}${extraBeforeInfo}`
        );
      }
      original();
      if (phase === 'after' || phase === 'beforeAndAfter') {
        const extraAfterInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
        console.log(
          `${componentName} ======> ${lifeCycleHookName}${extraAfterInfo}`
        );
      }
    };
  } else {
    if (logNonImplemented) {
      prototype[lifeCycleHookName] = () =>
        console.log(
          `${componentName} ======> ${lifeCycleHookName} (non-implemented)`
        );
    }
  }
};
