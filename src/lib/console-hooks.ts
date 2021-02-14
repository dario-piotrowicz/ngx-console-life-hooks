import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import { ConsoleHooksOptions, Phase } from './console-hooks-options.model';

type LifecycleHooksNames =
  | 'ngOnInit'
  | 'ngOnChanges'
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
    prototype[lifecycleHookName] = function () {
      if (phase === 'before' || phase === 'beforeAndAfter') {
        const extraBeforeInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
        console.log(
          `${componentName} ======> ${lifecycleHookName}${extraBeforeInfo}`
        );
      }
      original.apply(this);
      if (phase === 'after' || phase === 'beforeAndAfter') {
        const extraAfterInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
        console.log(
          `${componentName} ======> ${lifecycleHookName}${extraAfterInfo}`
        );
      }
    };
  } else {
    if (logNonImplemented) {
      prototype[lifecycleHookName] = () =>
        console.log(
          `${componentName} ======> ${lifecycleHookName} (non-implemented)`
        );
    }
  }
};
