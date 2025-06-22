import { Test, TestingModule } from '@nestjs/testing';
import { FyiDatapipelineService } from './fyi-datapipeline.service';

describe('FyiDatapipelineService', () => {
  let service: FyiDatapipelineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FyiDatapipelineService],
    }).compile();

    service = module.get<FyiDatapipelineService>(FyiDatapipelineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
