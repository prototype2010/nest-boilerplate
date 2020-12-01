import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { Config } from './config/config';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // const config = app.get(Config);

  // console.log('#####', config);

  await app.listen(3000);
}
bootstrap();
