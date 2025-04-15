/**
 * @file Global.d.ts
 * @description This file contains the TypeScript type definitions for the global types used in the Streamfund API.
 */

export {};

declare global {
  type StepType = "approve" | "support";
  type ProgressType = "approve" | "sign" | "confirm";
  type ProgressStatusType = "not-started" | "waiting" | "done";

  interface ProgressState {
    approve: ProgressStatusType;
    sign: ProgressStatusType;
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
