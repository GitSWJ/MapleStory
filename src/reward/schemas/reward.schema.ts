import { Schema } from 'mongoose';

export const RewardSchema = new Schema({
  No: { type: Number, required:true, unique: true, index: true },
  Name: { type: String, required: true },
  Description: { type: String },
});
