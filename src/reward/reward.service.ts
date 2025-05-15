import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRewardDto } from './dto/create-reward.dto';
import { Reward } from './interfaces/reward.interface';

@Injectable()
export class RewardService {
  constructor(@InjectModel('Reward') private readonly rewardModel: Model<Reward>) {}

  async create(createRewardDto: CreateRewardDto): Promise<Reward> {
    const newReward = new this.rewardModel(createRewardDto);
    return newReward.save();
  }

  async findAll(): Promise<Reward[]> {
    return this.rewardModel.find().exec();
  }
}
