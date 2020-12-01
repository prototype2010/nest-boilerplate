import * as path from 'path';

import { Injectable } from '@nestjs/common';

export interface Dictionary {
  [key: string]: string;
}

@Injectable()
export class Config {
  private env = new Map<string, any>();

  constructor(envVars: Dictionary) {
    this.env = new Map<string, any>(Object.entries(envVars));
  }

  public get DBSettings() {
    return {
      type: this.env.get('DB_TYPE'),
      host: this.env.get('DB_HOST'),
      port: Number(this.env.get('DB_PORT')),
      database: this.env.get('DB_NAME'),
      username: this.env.get('DB_USERNAME'),
      password: this.env.get('DB_PASSWORD'),
      logging: Boolean(this.env.get('DB_LOGGING')),
      entities: [path.join(__dirname, this.env.get('DB_ENTITIES'))],
      migrations: [path.join(__dirname, this.env.get('DB_MIGRATIONS'))],
      cli: {
        migrationsDir: path.join(__dirname, this.env.get('DB_MIGRATIONS_DIR')),
      },
    };
  }
}
