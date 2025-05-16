import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRewardLogSchema } from './schemas/user-reward-log.schema';
import { UserRewardLogService } from './user-reward-log.service';
import { UserRewardLogController } from './user-reward-log.controller';
import { UserEventStateModule } from '../user-event-state/user-event-state.module';
import { EventRuleModule } from '../event-rule/event-rule.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserRewardLog', schema: UserRewardLogSchema }]),
    UserEventStateModule ,
    EventRuleModule,
  ],
  providers: [UserRewardLogService],
  controllers: [UserRewardLogController],
  exports: [UserRewardLogService],
})
export class UserRewardLogModule {}
