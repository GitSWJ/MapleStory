export class CreateEventDto {
  readonly No: number;
  readonly title: string;
  readonly description?: string;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly reward?: number;
  readonly status: string;
  readonly createdAt: Date;
}
