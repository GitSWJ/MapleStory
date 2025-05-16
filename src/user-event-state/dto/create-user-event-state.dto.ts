import { IsMongoId, IsOptional, IsObject } from 'class-validator';

export class CreateUserEventStateDto {
  @IsMongoId()
  eventId: string;

  @IsOptional()
  @IsObject()
  progress?: Record<string, any>;
}
