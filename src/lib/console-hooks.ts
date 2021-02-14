import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import { ConsoleHooksOptions, Phase } from './console-hooks-options.model';

type LifecycleHooksNames =
  | 'ngOnChanges'
  | 'ngOnInit'
  | 'ngDoCheck'
  | 'ngAfterContentInit'
  | 'ngAfterContentChecked'
  | 'ngAfterViewInit'
  | 'ngAfterViewChecked'
  | 'ngOnDestroy';

export function ConsoleHooks({
  phase = defaultConsoleHooksOptions.phase,
  logNonImplemented = false,
}: ConsoleHooksOptions = defaultConsoleHooksOptions) {
  return function (target: any) {
    const componentName = target.name;
    handleLifecycleHook(
      'ngOnInit',
      componentName,
      target,
      phase,
      logNonImplemented
    );
    handleLifecycleHook(
      'ngOnChanges',
      componentName,
      target,
      phase,
      logNonImplemented
    );
    handleLifecycleHook(
      'ngOnDestroy',
      componentName,
      target,
      phase,
      logNonImplemented
    );
  };
}

const handleLifecycleHook = (
  lifecycleHookName: LifecycleHooksNames,
  componentName: string,
  target: any,
  phase: Phase,
  logNonImplemented: boolean
) => {
  const prototype = target.prototype;
  const original = prototype[lifecycleHookName];
  if (typeof original === 'function') {
    prototype[lifecycleHookName] = function (args: any) {
      const extraBeforeInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
      const startConsoleLogMessage = `${componentName} ======> ${lifecycleHookName}${extraBeforeInfo}`;

      const extraAfterInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
      const afterConsoleLogMessage = `${componentName} ======> ${lifecycleHookName}${extraAfterInfo}`;
      if (phase === 'before' || phase === 'beforeAndAfter') {
        if (args) {
          console.log(startConsoleLogMessage, { arguments: args });
        } else {
          console.log(startConsoleLogMessage);
        }
      }
      original.apply(this);
      if (phase === 'after' || phase === 'beforeAndAfter') {
        if (args) {
          console.log(afterConsoleLogMessage, { arguments: args });
        } else {
          console.log(afterConsoleLogMessage);
        }
      }
    };
  } else {
    if (logNonImplemented) {
      prototype[lifecycleHookName] = (args: any) => {
        const consoleLogMessage = `${componentName} ======> ${lifecycleHookName} (non-implemented)`;
        if (args) {
          console.log(consoleLogMessage, { arguments: args });
        } else {
          console.log(consoleLogMessage);
        }
      };
    }
  }
};
