/**
 * Logic for interacting with Timescale DB.
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { Metric } from './metric.entity';


@Injectable()
export class TimescaleService {
    constructor(
        @InjectRepository(Metric)
        private readonly metricRepo: Repository<Metric>,
    ){}

    create(metric: Partial<Metric>){
        return this.metricRepo.save(metric);
    }

    findAll(){
        return this.metricRepo.find();
    }
}
