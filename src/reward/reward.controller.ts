import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { RewardService } from './reward.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { Roles } from '../auth/roles.decorator';

@Controller('rewards')
export class RewardController {
  constructor(private readonly rewardService: RewardService) {}

  @Roles(0, 1)
  @Post()
  async create(@Body() dto: CreateRewardDto) {
    return this.rewardService.create(dto);
  }

  @Get()
  async findAll() {
    return this.rewardService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.rewardService.findOne(id);
  }
}
