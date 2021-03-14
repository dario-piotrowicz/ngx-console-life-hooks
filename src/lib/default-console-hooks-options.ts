import { ConsoleHooksOptions } from './console-hooks-options.model';

export const defaultConsoleHooksOptions: ConsoleHooksOptions = {
  componentName: null,
  phase: 'before',
  logNonImplemented: false,
  colorScheme: 'default',
  include: null,
  exclude: null,
  indent: 0,
};
