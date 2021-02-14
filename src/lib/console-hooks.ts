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
    const lifeCycleNames: LifecycleHooksNames[] = [
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
  lifecycleHookName: LifecycleHooksNames,
  componentName: string,
  target: any,
  phase: Phase,
  logNonImplemented: boolean
) => {
  const prototype = target.prototype;
  const original = prototype[lifecycleHookName];

  if (typeof original === 'function') {
    const extraBeforeInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
    const startConsoleLogMessage = `${componentName} ======> ${lifecycleHookName}${extraBeforeInfo}`;
    const extraAfterInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
    const afterConsoleLogMessage = `${componentName} ======> ${lifecycleHookName}${extraAfterInfo}`;

    prototype[lifecycleHookName] = function (args: any) {
      if (phase === 'before' || phase === 'beforeAndAfter') {
        consoleLogForHook(startConsoleLogMessage, args);
      }
      original.apply(this);
      if (phase === 'after' || phase === 'beforeAndAfter') {
        consoleLogForHook(afterConsoleLogMessage);
      }
    };
  } else if (logNonImplemented) {
    const consoleLogMessage = `${componentName} ======> ${lifecycleHookName} (non-implemented)`;
    prototype[lifecycleHookName] = (args: any) => {
      consoleLogForHook(consoleLogMessage, args);
    };
  }
};

const consoleLogForHook = (message: string, args?: any) => {
  if (args) {
    console.log(message, { arguments: args });
  } else {
    console.log(message);
  }
};
