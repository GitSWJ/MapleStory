import { Controller, Get, Post, Body } from '@nestjs/common';
import { RewardService } from './reward.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { Roles } from '../auth/roles.decorator';

@Controller('rewards')
export class RewardController {
  constructor(private readonly rewardService: RewardService) {}
  
  @Roles(1)
  @Post()
  create(@Body() createRewardDto: CreateRewardDto) {
    return this.rewardService.create(createRewardDto);
  }

  @Get()
  findAll() {
    return this.rewardService.findAll();
  }
}
