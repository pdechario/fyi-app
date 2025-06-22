/**
 * Exports from fyi-timescale library
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimescaleService } from './fyi-timescale.service';
import { Metric } from './metric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metric])],
  providers: [TimescaleService],
  exports: [TimescaleService, TypeOrmModule],
})
export class TimescaleModule {}
