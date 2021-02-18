export interface ConsoleHooksOptions {
  phase?: Phase;
  logNonImplemented?: boolean;
}

export type Phase = 'before' | 'after' | 'beforeAndAfter';

export type SpecificPhase = 'before' | 'after' | 'non-implemented';
