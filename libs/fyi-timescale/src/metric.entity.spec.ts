import { Metric } from './metric.entity';

describe('Metric Entity', () => {
    it('should create an instance of Metric', () => {
        const metric = new Metric();
        expect(metric).toBeInstanceOf(Metric);
    });            
});
