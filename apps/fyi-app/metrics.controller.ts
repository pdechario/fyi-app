import { Controller, Get, Post, Body } from '@nestjs/common';
import { TimescaleService, Metric } from '@fyi-timescale';

@Controller('metrics')
export class MetricsController {
    constructor(private readonly timescaleService: TimescaleService) {}

    @Post()
    async create(@Body() body: Partial<Metric>){
        return this.timescaleService.create(body);
    }

    @Get()
    async findAll(){
        return this.timescaleService.findAll();
    }
}