import { Schema, Types } from 'mongoose';

export enum ConditionType {
  ATTENDANCE = 'attendance',
  INVITE = 'invite',
  // 필요한 조건 타입 추가 가능
}

export const EventRuleSchema = new Schema(
  {
    eventId: { type: Types.ObjectId, ref: 'Event', required: true },
    conditionType: { type: String, enum: Object.values(ConditionType), required: true },
    conditionParams: { type: Schema.Types.Mixed, required: true }, // 조건 상세값(JSON)
    rewardId: { type: Types.ObjectId, ref: 'Reward', required: true },
  },
  { timestamps: true },
);
