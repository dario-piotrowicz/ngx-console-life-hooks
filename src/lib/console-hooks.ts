import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import { ConsoleHooksOptions } from './console-hooks-options.model';

export function ConsoleHooks({
  phase = defaultConsoleHooksOptions.phase,
  logNonImplemented = false,
}: ConsoleHooksOptions = defaultConsoleHooksOptions) {
  const before = phase === 'before' || phase === 'beforeAndAfter';
  const after = phase === 'after' || phase === 'beforeAndAfter';

  return function (target: any) {
    const componentName = target.name;
    const originalNgOnInit = target.prototype.ngOnInit;
    if (typeof originalNgOnInit === 'function') {
      target.prototype.ngOnInit = () => {
        if (before) {
          const extraBeforeInfo = phase === 'beforeAndAfter' ? ' (start)' : '';
          console.log(`${componentName} ======> ngOnInit${extraBeforeInfo}`);
        }
        originalNgOnInit();
        if (after) {
          const extraAfterInfo = phase === 'beforeAndAfter' ? ' (end)' : '';
          console.log(`${componentName} ======> ngOnInit${extraAfterInfo}`);
        }
      };
    } else {
      if (logNonImplemented) {
        target.prototype.ngOnInit = () =>
          console.log(`${componentName} ======> ngOnInit (non-implemented)`);
      }
    }
  };
}
