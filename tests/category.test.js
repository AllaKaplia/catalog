const request = require('supertest');
const app = require('../src/app');

describe('GET /category/:categoryId', () => {
    it('should return category page', async () => {
        const res = await request(app).get('/category/1');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Category 1');
    });
});
