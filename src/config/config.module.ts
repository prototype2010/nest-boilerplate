import { Module } from '@nestjs/common';

import { Config } from './config';

@Module({
  exports: [Config],
  providers: [
    {
      provide: Config,
      useFactory: () => new Config(process.env),
    },
  ],
})
export class ConfigModule {}
