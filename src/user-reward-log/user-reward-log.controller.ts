import { Controller, Post, Get, Body, Param, Request } from '@nestjs/common';
import { UserRewardLogService } from './user-reward-log.service';
import { ClaimRewardDto } from './dto/claim-reward.dto';
import { Roles } from '../auth/roles.decorator';


@Controller('user-reward-logs')
export class UserRewardLogController {
  constructor(private readonly userRewardLogService: UserRewardLogService) {}

  @Post('claim')
  async claimReward(
    @Request() req,
    @Body() dto: ClaimRewardDto,
  ) {
    const userId = req.user.sub; // JWT에서 유저 ID 추출
    return this.userRewardLogService.claimReward({ ...dto, userId });
  }

  @Roles(0, 1) // admin, operator
  @Get(':userId')
  async getUserRewards(@Param('userId') userId: string) {
    return this.userRewardLogService.getUserRewards(userId);
  }

  @Roles(0, 1) // admin, operator
  @Get('all')
  async getAllUserRewards() {
    return this.userRewardLogService.getAllUserRewards();
  }
}
