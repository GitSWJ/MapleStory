import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserRewardLogService } from './user-reward-log.service';
import { CreateUserRewardLogDto } from './dto/create-user-reward-log.dto';

@Controller('user-reward-logs')
export class UserRewardLogController {
  constructor(private readonly userRewardLogService: UserRewardLogService) {}

  @Post('claim')
  async claimReward(@Body() dto: CreateUserRewardLogDto) {
    return this.userRewardLogService.claimReward(dto);
  }

  @Get(':userId')
  async getUserRewards(@Param('userId') userId: string) {
    return this.userRewardLogService.getUserRewards(userId);
  }
}
