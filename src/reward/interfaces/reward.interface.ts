import { Document } from 'mongoose';

export interface Reward extends Document {
  No: number;
  Name: string;
  Description?: string;
}
