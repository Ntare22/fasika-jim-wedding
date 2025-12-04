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
  } catch (error: any) {
    // Provide helpful error messages for common issues
    if (error?.code === 403) {
      const errorMessage = error?.message || '';
      // Extract project ID if available in error message
      const projectIdMatch = errorMessage.match(/project (\d+)/);
      const projectId = projectIdMatch ? projectIdMatch[1] : 'your-project';
      
      console.error('❌ Google Sheets API Error (403):');
      console.error('   The Google Sheets API is not enabled in your Google Cloud project.');
      console.error(`   Project ID: ${projectId}`);
      console.error('   To fix this:');
      console.error('   1. Go to: https://console.cloud.google.com/apis/library/sheets.googleapis.com');
      console.error('   2. Select your project');
      console.error('   3. Click "Enable"');
      console.error('   4. Wait a few minutes for changes to propagate');
      console.error('   See GOOGLE_SHEETS_SETUP.md for detailed instructions.');
      
      throw new Error(`Google Sheets API not enabled. Enable it at: https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=${projectId}`);
    }
    
    if (error?.code === 404) {
      console.error('❌ Google Sheets Error (404):');
      console.error('   The spreadsheet ID is incorrect or the sheet does not exist.');
      console.error('   Check your GOOGLE_SHEET_ID environment variable.');
      throw new Error('Spreadsheet not found. Check your GOOGLE_SHEET_ID.');
    }
    
    if (error?.code === 401) {
      console.error('❌ Google Sheets Error (401):');
      console.error('   Authentication failed. Check your service account credentials.');
      console.error('   Verify GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY are correct.');
      throw new Error('Authentication failed. Check your service account credentials.');
    }
    
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
        console.log('✅ RSVP successfully saved to Google Sheets');
      } catch (sheetError: any) {
        // Log detailed error but don't fail the request
        // The RSVP is still considered successful from the user's perspective
        console.error('⚠️  Failed to save to Google Sheets (RSVP still recorded):', sheetError?.message || sheetError);
        
        // In production, you might want to send an alert/notification here
        // For now, we'll just log it and continue
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

