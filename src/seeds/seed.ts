import { connect, model } from 'mongoose';
import { EventSchema } from '../event/schemas/event.schema';
import { RewardSchema } from '../reward/schemas/reward.schema';

async function seed() {
    // .env 파일에서 DB_URL을 가져옵니다.
  await connect(process.env.MONGO_URI || 'mongodb://localhost/nest',);

  const Event = model('Event', EventSchema);
  const Reward = model('Reward', RewardSchema);

  const reward = await Reward.create({
    type: 'currency',
    value: 'gold',
    displayName: '골드 100',
  });

  await Event.create({
    name: '출석 체크',
    type: 'attendance',
    startAt: new Date(),
    endAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    isActive: true,
  });

  console.log('Seed complete!');
  process.exit();
}

seed();
