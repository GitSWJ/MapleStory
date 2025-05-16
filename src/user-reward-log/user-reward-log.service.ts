import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserRewardLogDto } from './dto/create-user-reward-log.dto';

@Injectable()
export class UserRewardLogService {
  constructor(
    @InjectModel('UserRewardLog') private readonly userRewardLogModel: Model<any>,
  ) {}

  async claimReward(dto: CreateUserRewardLogDto) {
    const { userId, eventId, eventRuleId, rewardId } = dto;

    // 중복 수령 체크 (예: 동일 이벤트 룰 보상 중복 지급 방지)
    const alreadyClaimed = await this.userRewardLogModel.findOne({
      userId: new Types.ObjectId(userId),
      eventId: new Types.ObjectId(eventId),
      eventRuleId: new Types.ObjectId(eventRuleId),
    });

    if (alreadyClaimed) {
      throw new BadRequestException('이미 수령한 보상입니다.');
    }

    // TODO: 실제 보상 지급 로직 (ex: 게임 머니 적립, 아이템 지급 등)
    // 지급 로직은 게임 서버나 별도 서비스와 연동 필요

    // 보상 지급 기록 저장
    return await this.userRewardLogModel.create(dto);
  }

  async getUserRewards(userId: string) {
    return await this.userRewardLogModel.find({
      userId: new Types.ObjectId(userId),
    }).populate('rewardId').exec();
  }
}
