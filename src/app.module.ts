import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { RewardModule } from './reward/reward.module';
import { EventRuleModule } from './event-rule/event-rule.module';
import { UserEventStateModule } from './user-event-state/user-event-state.module';
import { UserRewardLogModule } from './user-reward-log/user-reward-log.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtRolesGuard } from './auth/jwt-roles.guard';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest',),
    EventModule,
    RewardModule,
    UserModule,
    AuthModule,
    EventRuleModule,
    UserEventStateModule,
    UserRewardLogModule,

  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtRolesGuard,
    }
  ],
})
export class AppModule {}
