import { Controller, Post, Body } from '@nestjs/common';
import { FyiDatapipelineService } from '@app/fyi-datapipeline';

@Controller('pipeline')
export class AppController {
    constructor(private readonly pipelineService: FyiDatapipelineService) {}

    @Post()
    async ingest(@Body() payload: any) {
        return this.pipelineService.processMetricEvent(payload);
    }
}