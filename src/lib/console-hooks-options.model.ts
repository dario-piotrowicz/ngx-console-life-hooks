import { LifecycleHookName } from './lifecycle-hooks-name';

export interface ConsoleHooksOptions {
  phase?: Phase;
  logNonImplemented?: boolean;
  colorScheme?: ColorScheme;
  include?: LifecycleHookName[];
  exclude?: LifecycleHookName[];
}

export type Phase = 'before' | 'after' | 'beforeAndAfter';

export type SpecificPhase = 'before' | 'after' | 'non-implemented';

export type ColorScheme = 'none' | 'terminal' | 'default';
