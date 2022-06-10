const nodemailer = require("nodemailer")
import { OAuth2Client } from "google-auth-library";


const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const CLIENT_ID = `${process.env.MAIL_CLIENT_ID}`;
const CLIENT_SEC = `${process.env.MAIL_CLIENT_ID}`;
const MAIL_REFRESH_TOKEN = `${process.env.MAIL_REFRESH_TOKEN}`;
const SENDER_MAIL_MESSAGE = `${process.env.SENDER_MAIL_MESSAGE}`;

//send mail
const sendEmail = async (to: string, url: string, txt: string) => {
    const oAuth2Client = new OAuth2Client(
        CLIENT_ID, CLIENT_SEC, OAUTH_PLAYGROUND
    )

    oAuth2Client.setCredentials({ refresh_token: MAIL_REFRESH_TOKEN });

    try {

        const access_token = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport()

    } catch (error) {

    }


}


