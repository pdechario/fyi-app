import { Module } from '@nestjs/common';
import { FyiDatapipelineService } from './fyi-datapipeline.service';
import { TimescaleModule } from '@fyi-timescale';

@Module({
  imports: [TimescaleModule],
  providers: [FyiDatapipelineService],
  exports: [FyiDatapipelineService],
})
export class FyiDatapipelineModule {}
