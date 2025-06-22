import { TimescaleService } from '@fyi-timescale';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FyiDatapipelineService {
    constructor(private readonly timescaleService: TimescaleService) {}

    async processMetricEvent(data: {
        workflow_name: string;
        repository_id: number;
        time: string;
        duration: string;
    }) {
        return this.timescaleService.saveMetric(data);
    }
}
