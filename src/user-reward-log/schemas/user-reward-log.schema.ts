import { Schema, Types } from 'mongoose';

export const UserRewardLogSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    eventId: { type: Types.ObjectId, ref: 'Event', required: true },
    eventRuleId: { type: Types.ObjectId, ref: 'EventRule', required: true },
    rewardId: { type: Types.ObjectId, ref: 'Reward', required: true },
    claimedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
