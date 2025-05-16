import { Schema, Types } from 'mongoose';

export const UserEventStateSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    eventId: { type: Types.ObjectId, ref: 'Event', required: true },
    progress: { type: Schema.Types.Mixed, default: {} }, // 예: { attendanceCount: 3, inviteCount: 2 }
    lastUpdatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
