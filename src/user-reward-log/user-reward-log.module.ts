import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRewardLogSchema } from './schemas/user-reward-log.schema';
import { UserRewardLogService } from './user-reward-log.service';
import { UserRewardLogController } from './user-reward-log.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'UserRewardLog', schema: UserRewardLogSchema }])],
  providers: [UserRewardLogService],
  controllers: [UserRewardLogController],
  exports: [UserRewardLogService],
})
export class UserRewardLogModule {}
