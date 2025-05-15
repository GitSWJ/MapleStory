import { Schema } from 'mongoose';

export const EventSchema = new Schema({
  No: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reward: { type: Schema.Types.ObjectId, ref: 'Reward' },
  status: { type: String, required: true, enum: ['active', 'inactive'] },
  createdAt: { type: Date, default: Date.now }
});
