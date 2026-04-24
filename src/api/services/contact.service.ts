/**
 * Service Layer: Handles the actual business logic of the application.
 * This keeps controllers thin and focuses them only on HTTP-related tasks.
 */
export class ContactService {
  /**
   * Processes a new inquiry.
   * In a production app, this would involve sending emails via SES/SendGrid
   * or storing the inquiry in a database like MongoDB.
   */
  public async processInquiry(data: { name: string; email: string; message: string }) {
    // 1. Logic for persistence or notifications would go here.
    console.log(`[Service] Processing inquiry for ${data.name}...`);

    // Simulate an external API call or DB write
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      timestamp: new Date().toISOString()
    };
  }
}

export const contactService = new ContactService();
