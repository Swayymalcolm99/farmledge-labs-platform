export type CommodityType = 'maize' | 'wheat' | 'rice' | 'sorghum' | 'soybean' | 'cassava';

export type Grade = 'A' | 'B' | 'C';

export type TokenStatus = 'pending' | 'active' | 'redeemed' | 'defaulted' | 'cancelled';

export interface TokenMetadata {
  tokenId: string;
  commodity: CommodityType;
  grade: Grade;
  quantityKg: number;
  warehouseId: string;
  farmerId: string;
  issuedAt: string; // ISO 8601
  expiresAt: string; // ISO 8601
  status: TokenStatus;
  stellarAssetCode: string;
  stellarIssuer: string;
}
