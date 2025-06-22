import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimescaleModule, typeOrmConfig } from '@fyi-timescale';
import { MetricsController } from '../metrics.controller';  
import { WebhookTriggersModule } from '@app/webhook-triggers';
import { FyiDatapipelineModule } from '@app/fyi-datapipeline';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    TimescaleModule,
    WebhookTriggersModule,
    FyiDatapipelineModule,
    TimescaleModule,
  ],
  controllers: [AppController, MetricsController],
})
export class AppModule {}
