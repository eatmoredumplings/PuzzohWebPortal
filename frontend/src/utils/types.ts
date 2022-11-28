export interface VoucherTypes {
  id?: number,
  title: string,
  description?: string,
  category: string,
  priceBefore: number,
  priceAfter: number,
  maxRedeem: number
  expireDate: string,
}
