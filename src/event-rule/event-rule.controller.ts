import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { EventRuleService } from './event-rule.service';
import { CreateEventRuleDto } from './dto/create-event-rule.dto';
import { Roles } from '../auth/roles.decorator';
@Controller('event-rules')
export class EventRuleController {
  constructor(private readonly eventRuleService: EventRuleService) {}

  @Roles(0, 1)
  @Post()
  async create(@Body() dto: CreateEventRuleDto) {
    return this.eventRuleService.create(dto);
  }

  @Get()
  async findAll() {
    return this.eventRuleService.findAll();
  }

  @Get('/event/:eventId')
  async findByEvent(@Param('eventId') eventId: string) {
    return this.eventRuleService.findByEvent(eventId);
  }
}
