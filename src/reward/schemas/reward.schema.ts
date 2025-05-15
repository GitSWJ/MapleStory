import { Schema } from 'mongoose';

export const RewardSchema = new Schema({
  No: { type: Number, unique: true, index: true },
  Name: { type: String, required: true },
  Description: { type: String },
});
