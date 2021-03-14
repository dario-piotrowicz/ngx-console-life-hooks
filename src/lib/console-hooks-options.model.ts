import { LifecycleHookName } from './lifecycle-hooks-name';

export interface ConsoleHooksOptions {
  componentName?: string;
  phase?: Phase;
  logNonImplemented?: boolean;
  colorScheme?: ColorScheme;
  include?: LifecycleHookName[];
  exclude?: LifecycleHookName[];
  indent?: Indent;
}

export type Phase = 'before' | 'after' | 'beforeAndAfter';

export type SpecificPhase = 'before' | 'after' | 'non-implemented';

export type ColorScheme =
  | 'none'
  | 'terminal'
  | 'angular'
  | 'react'
  | 'vue'
  | 'default';

export type Indent = 0 | 1 | 2 | 3 | 4 | 5;
