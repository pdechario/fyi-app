import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Metric } from './metric.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Metric],
    synchronize: true,
    ssl: true,
};