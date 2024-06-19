import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import content from '../../content.json';

const { apiKey: API_KEY, apiUrl: API_URL } = content.subscribe;

interface SubscribeRequest extends NextApiRequest {
  body: {
    email: string;
  };
}

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const handler = async (req: SubscribeRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
      const response = await axios.post(
        API_URL,
        {
          email: email,
          // Additional payload data as required by user's email provider
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        return res.status(200).json({ message: 'Subscription successful' });
      } else {
        return res.status(response.status).json({ error: response.statusText });
      }
    } catch (error) {
      console.error('Subscription failed:', error);
      return res.status(500).json({ error: 'Subscription failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default handler;
