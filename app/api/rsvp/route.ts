import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

async function appendToSheet(data: {
  name: string;
  email: string;
  guests: string;
  attending: string;
  dietary: string;
}) {
  try {
    // Authenticate using service account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not set');
    }

    // Append row to the sheet
    const timestamp = new Date().toLocaleString();
    const row = [
      timestamp,
      data.name,
      data.email,
      data.attending,
      data.guests,
      data.dietary || '',
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F', // Adjust range if needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return true;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, guests, attending, dietary } = body;

    // Validate required fields
    if (!name || !email || !attending) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Google Sheets if configured
    if (
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
    ) {
      try {
        await appendToSheet({ name, email, guests, attending, dietary });
      } catch (sheetError) {
        console.error('Failed to save to Google Sheets:', sheetError);
        // Continue execution - don't fail the request if Sheets fails
        // You might want to log this or send an alert
      }
    } else {
      // Fallback: Log to console if Google Sheets is not configured
      console.log('RSVP Submission (Google Sheets not configured):', {
        name,
        email,
        guests,
        attending,
        dietary,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { message: 'RSVP submitted successfully', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return NextResponse.json(
      { error: 'Failed to process RSVP' },
      { status: 500 }
    );
  }
}

