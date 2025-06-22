import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimescaleModule, typeOrmConfig } from '@fyi-timescale';
import { MetricsController } from '../metrics.controller';  
import { WebhookTriggersModule } from '@app/webhook-triggers';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    TimescaleModule,
    WebhookTriggersModule,
  ],
  controllers: [MetricsController],
})
export class AppModule {}
