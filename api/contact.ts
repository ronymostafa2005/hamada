import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10)
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const contactData = contactSchema.parse(req.body);
    console.log("Contact form submission:", contactData);
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(400).json({
      success: false,
      message: "Invalid form data"
    });
  }
}
