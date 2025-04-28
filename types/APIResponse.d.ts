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
  interface Token {
    id: string;
    address: string;
    decimal: number;
    name: string;
    symbol: string;
    image: string;
    coin_gecko_id: string;
    chain_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    chain: Chain;
    price: number;
  }

  interface Bio {
    id: string;
    username: string;
    bio: string;
    image: string;
    x: string | null;
    tiktok: string | null;
    instagram: string | null;
    youtube: string | null;
    website: string | null;
    streamer_id: string;
    viewer_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  }

  interface Streamer {
    id: string;
    address: string;
    usd_total_support: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    bio: Bio;
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
    message: string[] | string;
    statusCode: number;
  }

  interface APIChainQueryResponse extends APIBaseResponse {
    data: {
      chains: Chain[];
    };
  }

  interface APITokenQueryResponse extends APIBaseResponse {
    data: {
      tokens: Token[];
    };
  }

  interface APIGetStreamerResponse extends APIBaseResponse {
    data: {
      streamer: Streamer;
    };
  }

  interface APISignInResponse extends APIBaseResponse {
    data: {
      domain: string;
      address: string;
      statement: string;
      uri: string;
      version: string;
      nonce: string;
      issuedAt: string;
      expirationTime: string;
      chainId: number;
      token: string;
    };
  }
}
