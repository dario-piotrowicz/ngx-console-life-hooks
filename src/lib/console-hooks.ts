import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import {
  ColorScheme,
  ConsoleHooksOptions,
  Phase,
} from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';
import { generateConsoleLogForHook } from './generate-console-log-for-hooks';

export function ConsoleHooks({
  phase = defaultConsoleHooksOptions.phase,
  logNonImplemented = defaultConsoleHooksOptions.logNonImplemented,
  colorScheme = defaultConsoleHooksOptions.colorScheme,
  exclude = defaultConsoleHooksOptions.exclude,
  include = defaultConsoleHooksOptions.include,
}: ConsoleHooksOptions = defaultConsoleHooksOptions) {
  return function (target: any) {
    const componentName = target.name;
    if (include && exclude) {
      throw `@ConsoleHook Error: both include and exclude options have been provided for the ${componentName} component, please use only one`;
    }
    if (include === []) {
      include = null;
    }
    if (!exclude) {
      exclude = [];
    }
    const lifeCycleNames: LifecycleHookName[] = [
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentChecked',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'ngOnDestroy',
    ];
    lifeCycleNames
      .filter((lifecycleName) => !exclude.includes(lifecycleName))
      .filter((lifeCycleName) => !include || include.includes(lifeCycleName))
      .forEach((lifecycleName) =>
        handleLifecycleHook(
          lifecycleName,
          componentName,
          target,
          phase,
          logNonImplemented,
          colorScheme
        )
      );
  };
}

const handleLifecycleHook = (
  lifecycleHookName: LifecycleHookName,
  componentName: string,
  target: any,
  phase: Phase,
  logNonImplemented: boolean,
  colorScheme: ColorScheme
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
            lifecycleHookName,
            colorScheme
          )
        : null;
    const consoleLogAfterFn =
      phase === 'after' || phase === 'beforeAndAfter'
        ? generateConsoleLogForHook(
            componentName,
            phase,
            'after',
            lifecycleHookName,
            colorScheme
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
      lifecycleHookName,
      colorScheme
    );
    prototype[lifecycleHookName] = (args: any) => consoleLogFn(args);
  }
};
