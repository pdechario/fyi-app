import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookTriggersService {
    handleIncomingEvent(payload: any): void{
        console.log('Received webhook: ', payload)
    }
}
