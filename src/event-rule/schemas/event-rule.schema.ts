import { Schema, Types } from 'mongoose';

export enum ConditionType {
  ATTENDANCE = 'attendance',
  INVITE = 'invite',
  RANKING = 'ranking',
  ACTION = 'action',
  // 필요한 조건 타입 추가 가능
}

export const EventRuleSchema = new Schema(
  {
    eventId: { type: Types.ObjectId, ref: 'Event', required: true },
    conditionType: { type: String, enum: Object.values(ConditionType), required: true },
    conditionParams: { type: Number, required: true }, // 조건에 필요한 파라미터 (예: 출석일수, 초대인원수 등)
    rewardId: { type: Types.ObjectId, ref: 'Reward', required: true },
  },
  { timestamps: true },
);
