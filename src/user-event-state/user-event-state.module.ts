import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEventStateSchema } from './schemas/user-event-state.schema';
import { UserEventStateService } from './user-event-state.service';
import { UserEventStateController } from './user-event-state.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'UserEventState', schema: UserEventStateSchema }])],
  providers: [UserEventStateService],
  controllers: [UserEventStateController],
  exports: [UserEventStateService],
})
export class UserEventStateModule {}
