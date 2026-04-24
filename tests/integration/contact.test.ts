import request from 'supertest';
import app from '../../src/app.js';

describe('Contact API Integration Tests', () => {
  describe('POST /api/contact', () => {
    it('should return 200 and success message for valid data', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'This is a test message',
          acceptPolicies: true
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'success');
      expect(response.body).toHaveProperty('message', 'Inquiry received successfully.');
    });

    it('should return 422 if validation fails', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: '', // Invalid name
          email: 'not-an-email', // Invalid email
          message: 'Short',
          acceptPolicies: false
        });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('status', 'error');
      expect(response.body.message).toContain('Validation Error');
    });

    it('should return 422 if privacy policy is not accepted', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'This is a test message',
          acceptPolicies: false
        });

      expect(response.status).toBe(422);
    });
  });
});
