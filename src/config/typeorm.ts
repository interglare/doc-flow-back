import { User } from './../user/entities/user.entity';
import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'postgres',
  username: 'postgres',
  database: 'docflow',
  synchronize: false,
  logging: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  entities: [User],
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
