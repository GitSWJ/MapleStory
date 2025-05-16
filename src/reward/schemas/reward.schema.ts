import { Schema } from 'mongoose';

export enum RewardType {
  CURRENCY = 'currency',
  ITEM = 'item',
  COUPON = 'coupon',
}

export const RewardSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(RewardType),
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { 
    timestamps: true 
  },
);
