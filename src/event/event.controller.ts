import { Controller, Post, Get, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Roles } from '../auth/roles.decorator';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Roles(0, 1)
  @Post()
  async create(@Body() dto: CreateEventDto) {
    return this.eventService.create(dto);
  }

  @Get()
  async findAll() {
    return this.eventService.findAll();
  }

  @Get('/active')
  async findActive() {
    return this.eventService.findActive();
  }
}
