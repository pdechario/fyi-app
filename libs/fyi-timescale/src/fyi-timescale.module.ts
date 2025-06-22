/**
 * Exports from fyi-timescale library
 */

import { Module } from '@nestjs/common';
import { TimescaleService } from './fyi-timescale.service';

@Module({
  providers: [TimescaleService],
  exports: [TimescaleService],
})
export class TimescaleModule {}
