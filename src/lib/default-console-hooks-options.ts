import { ConsoleHooksOptions } from './console-hooks-options.model';

export const defaultConsoleHooksOptions: ConsoleHooksOptions = {
  componentName: null,
  phase: 'before',
  logNonImplemented: false,
  logTime: false,
  colorScheme: 'default',
  customColors: null,
  include: null,
  exclude: null,
  indent: 0,
};
