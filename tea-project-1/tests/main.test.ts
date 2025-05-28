import { app } from '../src/main'; // Adjust the import based on your actual app export
import request from 'supertest';

describe('Main Application', () => {
  it('should respond with a 200 status code on the root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  // Add more tests as needed
});