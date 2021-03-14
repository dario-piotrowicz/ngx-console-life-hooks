import { defaultConsoleHooksOptions } from './default-console-hooks-options';
import {
  ColorScheme,
  ConsoleHooksOptions,
  Indent,
  Phase,
} from './console-hooks-options.model';
import { LifecycleHookName } from './lifecycle-hooks-name';
import { generateConsoleLogForHook } from './generate-console-log-for-hooks';

export function ConsoleHooks({
  componentName = defaultConsoleHooksOptions.componentName,
  phase = defaultConsoleHooksOptions.phase,
  logNonImplemented = defaultConsoleHooksOptions.logNonImplemented,
  colorScheme = defaultConsoleHooksOptions.colorScheme,
  exclude = defaultConsoleHooksOptions.exclude,
  include = defaultConsoleHooksOptions.include,
  indent = defaultConsoleHooksOptions.indent,
}: ConsoleHooksOptions = defaultConsoleHooksOptions) {
  return function (target: any) {
    const componentNameToUse = componentName || target.name;
    if (include && exclude) {
      throw `@ConsoleHook Error: both include and exclude options have been provided for the ${componentNameToUse} component, please use only one`;
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
      .forEach((lifecycleName) => {
        const isInIncludeList = (include || []).includes(lifecycleName);
        handleLifecycleHook(
          lifecycleName,
          componentNameToUse,
          target,
          phase,
          logNonImplemented,
          colorScheme,
          indent,
          isInIncludeList
        );
      });
  };
}

const handleLifecycleHook = (
  lifecycleHookName: LifecycleHookName,
  componentName: string,
  target: any,
  phase: Phase,
  logNonImplemented: boolean,
  colorScheme: ColorScheme,
  indent: Indent,
  isInIncludeList: boolean
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
            colorScheme,
            indent
          )
        : null;
    const consoleLogAfterFn =
      phase === 'after' || phase === 'beforeAndAfter'
        ? generateConsoleLogForHook(
            componentName,
            phase,
            'after',
            lifecycleHookName,
            colorScheme,
            indent
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
      colorScheme,
      indent
    );
    prototype[lifecycleHookName] = (args: any) => consoleLogFn(args);
  } else if (isInIncludeList) {
    const errorPrefix = '@ConsoleHooks-Error: ';
    const errorMessage = `trying to include non-implemented ${lifecycleHookName} for ${componentName} without setting logNonImplemented to true`;
    const helpMessage = `Please either remove ${lifecycleHookName} from the include list or set logNonImplemented to true`;
    console.error(`${errorPrefix}${errorMessage}.\n\n${helpMessage}`);
  }
};
