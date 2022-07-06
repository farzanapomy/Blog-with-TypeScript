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

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: SENDER_MAIL_MESSAGE,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SEC,
                refresh_token: MAIL_REFRESH_TOKEN,
                access_token
            }
        })
        const mailOption = {
            from: SENDER_MAIL_MESSAGE,
            to: to,
            subject: 'BlogDev',
            html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the DevAT channel.</h2>
            <p>Congratulations! You're almost set to start using BlogDEV.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
          `,
        }

        const result = await transport.sendEmail(mailOption)
        return result;
    } catch (error) {
        console.log(error)
    }


}


export default sendEmail;

