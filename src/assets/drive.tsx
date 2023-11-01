import { google } from 'googleapis';
import 'dotenv';
import React from 'react';


export default function DriveFiles() {

    require('dotenv').config();

    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    console.log(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN)

    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client,
    });


    try {
      const response = drive.files.list();
    } catch (error) {
      console.log(error);
    }

    return (
        <></>
    );
};
