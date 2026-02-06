import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, website, email, challenge } = await request.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailContent = `
New Lead - Turf Pro Digital

Name: ${firstName} ${lastName}
Email: ${email}
Website: ${website || 'Not provided'}
Biggest Challenge: ${challenge || 'Not specified'}

---
This lead came from the Turf Pro Digital website free audit form.
    `.trim();

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: ['justin@aryocg.com', 'frank.sturm@greenacelawncare.com'],
      subject: 'New Lead, Turf Pro Digital',
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({
      success: true,
      message: 'Audit request submitted successfully'
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
