import { Types } from 'mongoose';
import { ConditionType } from '../schemas/event-rule.schema';

export class CreateEventRuleDto {
  eventId: string; // ObjectId string
  conditionType: ConditionType;
  conditionParams: any; // JSON 객체, 예: { requiredDays: 3 }
  rewardId: string; // ObjectId string
}
