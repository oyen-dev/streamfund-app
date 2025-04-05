/**
 * @file APIResponse.d.ts
 * @description This file contains the TypeScript type definitions for the API response
 *              from the Streamfund API.
 */

export {};

declare global {
  interface Collector {
    id: string;
    address: string;
    chain_id: string;
    usd_total: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  }
  interface Chain {
    id: string;
    name: string;
    chain_id: number;
    block_explorer_url: string;
    image: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    collector: Collector[];
  }

  interface APIBaseResponse {
    success: boolean;
    message: string;
    metadata?: {
      page?: number;
      limit?: number;
      total?: number;
    };
    data?: unknown;
    status_code: number;
  }

  interface APIBaseErrorResponse {
    error: string;
    message: string[];
    statusCode: number;
  }
  interface APIChainQueryResponse extends APIBaseResponse {
    data: {
      chains: Chain[];
    };
  }
}
