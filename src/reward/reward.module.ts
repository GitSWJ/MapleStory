import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RewardSchema } from './schemas/reward.schema';
import { RewardService } from './reward.service';
import { RewardController } from './reward.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Reward', schema: RewardSchema }])],
  providers: [RewardService],
  controllers: [RewardController],
  exports: [RewardService],
})
export class RewardModule {}
