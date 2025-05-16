import { RewardType } from '../schemas/reward.schema';

export class CreateRewardDto {
  type: RewardType;
  value: string;
  displayName: string;
  description?: string;
}
