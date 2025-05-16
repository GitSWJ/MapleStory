import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserEventStateService } from './user-event-state.service';
import { CreateUserEventStateDto } from './dto/create-user-event-state.dto';

@Controller('user-event-states')
export class UserEventStateController {
  constructor(private readonly userEventStateService: UserEventStateService) {}

  @Post('upsert')
  async upsert(@Body() dto: CreateUserEventStateDto) {
    return this.userEventStateService.upsertUserEventState(dto);
  }

  @Get(':userId/:eventId')
  async getUserEventState(
    @Param('userId') userId: string,
    @Param('eventId') eventId: string,
  ) {
    return this.userEventStateService.getUserEventState(userId, eventId);
  }

  @Get(':userId')
  async getUserEvents(@Param('userId') userId: string) {
    return this.userEventStateService.getUserEvents(userId);
  }
}
