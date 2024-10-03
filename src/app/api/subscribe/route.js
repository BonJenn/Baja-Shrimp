import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_DC = MAILCHIMP_API_KEY.split('-')[1];

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await axios.post(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      data,
      {
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({ message: 'Successfully subscribed' }, { status: 201 });
  } catch (error) {
    console.error('Error subscribing to Mailchimp', error);
    return NextResponse.json({ error: 'Error subscribing to newsletter' }, { status: 500 });
  }
}