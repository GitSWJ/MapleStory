import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventRuleSchema } from './schemas/event-rule.schema';
import { EventRuleService } from './event-rule.service';
import { EventRuleController } from './event-rule.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'EventRule', schema: EventRuleSchema }])],
  providers: [EventRuleService],
  controllers: [EventRuleController],
  exports: [EventRuleService],
})
export class EventRuleModule {}
