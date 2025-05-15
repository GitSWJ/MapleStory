import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './event/event.module';
import { RewardModule } from './reward/reward.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),  // 환경 변수 사용
    EventModule,
    RewardModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
