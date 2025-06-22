import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimescaleModule, typeOrmConfig } from '@fyi-timescale';
import { MetricsController } from '../metrics.controller';  

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    TimescaleModule,
  ],
  controllers: [MetricsController],
})
export class AppModule {}
