export class CreateUserEventStateDto {
  userId: string;
  eventId: string;
  progress?: Record<string, any>;
}
