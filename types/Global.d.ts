/**
 * @file Global.d.ts
 * @description This file contains the TypeScript type definitions for the global types used in the Streamfund API.
 */

export {};

declare global {
  type StepType = "approve" | "support";
  type ProgressType = "approve" | "confirm";
  type ProgressStatusType = "not-started" | "waiting" | "done";
  type NetworkAvailableChainId =
    | 1
    | 10
    | 56
    | 8453
    | 42161
    | 137
    | 43114
    | 146
    | 80094
    | 11155111
    | 97
    | 84532
    | 421614
    | 80002
    | 43113
    | 11155420
    | 57054
    | 80069
    | undefined;

  interface ProgressState {
    approve: ProgressStatusType;
    confirm: ProgressStatusType;
  }
  interface SupportState {
    to: string;
    amount: number;
    token: Token | undefined;
    message: string;
    from: string;
  }
  interface ServerSidePageProps {
    params: {
      id: string;
    };
  }
}
