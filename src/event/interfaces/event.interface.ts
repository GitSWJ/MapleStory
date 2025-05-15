import { Document } from 'mongoose';

export interface Event extends Document {
  readonly title: string;
  readonly description?: string;
  readonly date: Date;
  readonly location?: string;
}
