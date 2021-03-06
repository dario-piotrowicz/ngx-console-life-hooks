import { ConsoleHooksOptions } from './console-hooks-options.model';

export const defaultConsoleHooksOptions: ConsoleHooksOptions = {
  phase: 'before',
  logNonImplemented: false,
  colorScheme: 'default',
  include: null,
  exclude: null,
  indent: 0,
};
