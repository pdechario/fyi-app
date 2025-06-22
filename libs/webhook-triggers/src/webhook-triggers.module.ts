import { Module } from '@nestjs/common';
import { WebhookTriggersService } from './webhook-triggers.service';
import { WebhookTriggersController } from './webhook-triggers.controller';

@Module({
  providers: [
    WebhookTriggersService,
    WebhookTriggersController,
  ],
  exports: [
    WebhookTriggersService,
    WebhookTriggersController,
  ],
})
export class WebhookTriggersModule {}
