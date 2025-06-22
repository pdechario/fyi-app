import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../apps/fyi-app/src/app.module'

describe('MetricsController (e2e)', () => {
    let app:INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

  it('/GET metrics (should return 200)', async () => {
    const res = await request(app.getHttpServer()).get('/metrics');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  
  afterAll(async () => {
    await app.close();
  });
})