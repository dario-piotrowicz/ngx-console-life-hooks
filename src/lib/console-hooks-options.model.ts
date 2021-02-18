export interface ConsoleHooksOptions {
  phase?: Phase;
  logNonImplemented?: boolean;
  colorScheme?: ColorScheme;
}

export type Phase = 'before' | 'after' | 'beforeAndAfter';

export type SpecificPhase = 'before' | 'after' | 'non-implemented';

export type ColorScheme = 'none' | 'allRed';
