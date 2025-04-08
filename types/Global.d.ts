/**
 * @file Global.d.ts
 * @description This file contains the TypeScript type definitions for the global types used in the Streamfund API.
 */

export {};

declare global {
  interface ServerSidePageProps {
    params: {
      id: string;
    };
  }
}
