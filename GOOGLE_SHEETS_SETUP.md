# Google Sheets Setup Guide

Follow these steps to set up Google Sheets integration for RSVP submissions.

## Quick Reference: Environment Variables

Create a `.env.local` file in your project root with these variables:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "Wedding RSVP")
5. Click "Create"

## Step 2: Enable Google Sheets API ⚠️ IMPORTANT

**This step is critical!** If you skip this, you'll get a 403 error when trying to save RSVPs.

1. In your Google Cloud project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and click **"Enable"**
4. Wait a few minutes for the API to be fully enabled (you may see a loading indicator)

**Quick Link:** [Enable Google Sheets API](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

**Note:** If you see an error like "Google Sheets API has not been used in project X before or it is disabled", you need to complete this step.

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Enter a name (e.g., "rsvp-service")
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Create and Download Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Click "Create" - this will download a JSON file

## Step 5: Extract Credentials from JSON

Open the downloaded JSON file. You'll need:
- `client_email` - This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` - This is your `GOOGLE_PRIVATE_KEY`

## Step 6: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it (e.g., "Wedding RSVPs")
4. In the first row, add headers: `Timestamp`, `Name`, `Email`, `Attending`, `Guests`, `Dietary Restrictions`
5. Copy the Sheet ID from the URL:
   - The URL looks like: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the `SHEET_ID_HERE` part - this is your `GOOGLE_SHEET_ID`

## Step 7: Share the Sheet with Service Account

1. In your Google Sheet, click the "Share" button (top right)
2. Paste the service account email (the `client_email` from Step 5)
3. Give it "Editor" permissions
4. Click "Send" (you can uncheck "Notify people" if you want)

## Step 8: Set Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in the values:
   ```
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_ID=your-google-sheet-id-here
   ```

   **Important for GOOGLE_PRIVATE_KEY:**
   - Keep the quotes around the value
   - Keep the `\n` characters (they represent newlines)
   - Paste the entire private key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`

3. Restart your development server:
   ```bash
   yarn dev
   ```

## Step 9: Test It!

1. Submit an RSVP through your website
2. Check your Google Sheet - you should see a new row with the RSVP data!

## Troubleshooting

- **"Google Sheets API has not been used in project X before or it is disabled" (403 Error)**:
  - This means the Google Sheets API is not enabled in your Google Cloud project
  - Go to [Google Cloud Console APIs Library](https://console.cloud.google.com/apis/library/sheets.googleapis.com)
  - Select your project from the dropdown
  - Click "Enable" and wait a few minutes for it to activate
  - See Step 2 above for detailed instructions

- **"Missing required fields"**: Make sure all environment variables are set correctly in your `.env.local` file

- **"Permission denied" (403 Error)**: Make sure you shared the Google Sheet with the service account email (see Step 7)

- **"Invalid credentials" (401 Error)**: Double-check that the private key includes the `\n` characters and is properly quoted in your `.env.local` file

- **"Spreadsheet not found" (404 Error)**: Verify your `GOOGLE_SHEET_ID` is correct (it's in the URL of your Google Sheet)

## For Production (Vercel/Netlify/etc.)

When deploying, add these same environment variables in your hosting platform's settings:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Environment Variables

Make sure to add them for all environments (Production, Preview, Development).

