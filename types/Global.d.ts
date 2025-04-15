/**
 * @file Global.d.ts
 * @description This file contains the TypeScript type definitions for the global types used in the Streamfund API.
 */

export {};

declare global {
  interface SupportData {
    to: string;
    amount: bigint;
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
