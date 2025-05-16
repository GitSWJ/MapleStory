import { Schema, Types } from 'mongoose';

export const UserEventStateSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    eventId: { type: Types.ObjectId, ref: 'Event', required: true },
    progress: { type: Number, default: 0 }, // 진행 상태 (예: 출석일수, 초대인원수 등)
    lastUpdatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
