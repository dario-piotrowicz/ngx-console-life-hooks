import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import { ConsoleHooksOptions, Phase } from './console-hooks-options.model';

export function ConsoleHooks({
  phase = defaultConsoleHooksOptions.phase,
  logNonImplemented = false,
}: ConsoleHooksOptions = defaultConsoleHooksOptions) {
  return function (target: any) {
    const componentName = target.name;
    handleNgOnInit(componentName, target.prototype, phase, logNonImplemented);
  };
}

const handleNgOnInit = (
  componentName: string,
  prototype: any,
  phase: Phase,
  logNonImplemented: boolean
) => {
  const originalNgOnInit = prototype.ngOnInit;
  const lifeCycleHookName = 'ngOnInit';
  if (typeof originalNgOnInit === 'function') {
    prototype.ngOnInit = () => {
      if (phase === 'before' || phase === 'beforeAndAfter') {
        const extraBeforeInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
        console.log(
          `${componentName} ======> ${lifeCycleHookName}${extraBeforeInfo}`
        );
      }
      originalNgOnInit();
      if (phase === 'after' || phase === 'beforeAndAfter') {
        const extraAfterInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
        console.log(
          `${componentName} ======> ${lifeCycleHookName}${extraAfterInfo}`
        );
      }
    };
  } else {
    if (logNonImplemented) {
      prototype.ngOnInit = () =>
        console.log(
          `${componentName} ======> ${lifeCycleHookName} (non-implemented)`
        );
    }
  }
};
