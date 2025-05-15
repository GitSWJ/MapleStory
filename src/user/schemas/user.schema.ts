import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  No: { type: Number, required: true },
  level: { type: Number, required: true },
  user_id: { type: String, required: true },
  user_password: { type: String, required: true },
  user_name: { type: String, required: false },
  user_email: { type: String, required: false },
  user_phone: { type: String, required: false },
  user_address: { type: String, required: false },
  user_birth: { type: String, required: false },
  create_at: { type: String, required: true, default: Date.now },
});
