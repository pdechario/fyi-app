import { Test, TestingModule } from '@nestjs/testing';
import { WebhookTriggersService } from './webhook-triggers.service';

describe('WebhookTriggersService', () => {
  let service: WebhookTriggersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhookTriggersService],
    }).compile();

    service = module.get<WebhookTriggersService>(WebhookTriggersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
