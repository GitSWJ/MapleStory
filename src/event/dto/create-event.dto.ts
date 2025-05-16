import { EventType } from '../schemas/event.schema';

export class CreateEventDto {
  title: string;
  type: EventType;
  startAt: Date;
  endAt: Date;
  isActive?: boolean;
  description?: string;
}