/**
 * Helper library for interacting with WhatsApp Cloud API (Meta Business)
 */

interface WhatsAppMessagePayload {
  to: string;
  templateName: string;
  languageCode?: string;
  components?: any[];
}

/**
 * Sends a template message via WhatsApp Cloud API
 */
export async function sendWhatsAppTemplate({
  to,
  templateName,
  languageCode = 'es',
  components = []
}: WhatsAppMessagePayload) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneNumberId) {
    console.warn('WhatsApp API credentials are not configured. Message not sent.');
    return { success: false, error: 'Credentials missing' };
  }

  // Ensure phone number has only digits (remove + or spaces)
  const cleanPhone = to.replace(/\D/g, '');

  const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;
  
  const payload = {
    messaging_product: "whatsapp",
    to: cleanPhone,
    type: "template",
    template: {
      name: templateName,
      language: {
        code: languageCode
      },
      components: components.length > 0 ? components : undefined
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('WhatsApp API Error:', data);
      return { success: false, error: data.error?.message || 'Unknown error' };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Fetch Error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Example: Sends a rental confirmation message
 */
export async function sendRentalConfirmation(phone: string, clientName: string, date: string, time: string) {
  const templateName = process.env.WHATSAPP_TEMPLATE_CONFIRMATION || 'rental_confirmation';
  
  return sendWhatsAppTemplate({
    to: phone,
    templateName,
    components: [
      {
        type: "body",
        parameters: [
          { type: "text", text: clientName },
          { type: "text", text: date },
          { type: "text", text: time }
        ]
      }
    ]
  });
}

/**
 * Example: Sends a rental reminder (24h before)
 */
export async function sendRentalReminder(phone: string, clientName: string, time: string) {
  const templateName = process.env.WHATSAPP_TEMPLATE_REMINDER || 'rental_reminder';
  
  return sendWhatsAppTemplate({
    to: phone,
    templateName,
    components: [
      {
        type: "body",
        parameters: [
          { type: "text", text: clientName },
          { type: "text", text: time }
        ]
      }
    ]
  });
}
