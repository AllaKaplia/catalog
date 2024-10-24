const request = require('supertest');
const app = require('../src/app');

describe('GET /car/:carId', () => {
    it('should return car page', async () => {
        const res = await request(app).get('/car/1');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Car 1');
    });
});
