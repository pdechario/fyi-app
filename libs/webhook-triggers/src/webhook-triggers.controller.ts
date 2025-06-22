import { Controller, Get, Post, Body } from '@nestjs/common';
import { WebhookTriggersService } from "./webhook-triggers.service";

@Controller('webhooks')
export class WebhookTriggersController{
    constructor(private readonly webhookTriggersService: WebhookTriggersService) {}

    @Post()
    async create(@Body() body: any) {
        this.webhookTriggersService.handleIncomingEvent(body);
        return { status: 'ok' }
    }
}