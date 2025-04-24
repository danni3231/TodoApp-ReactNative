const functions = require('firebase-functions/v1');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const gmailEmail = process.env.GMAIL_EMAIL;
const gmailPassword = process.env.GMAIL_PASSWORD;

const mailTransport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: gmailEmail,
		pass: gmailPassword,
	},
});

const APP_NAME = 'Todo App';

exports.sendWelcomeEmail = functions.auth.user().onCreate(user => {
	const email = user.email;
	const displayName = user.displayName;

	return sendWelcomeEmail(email, displayName);
});

exports.sendByeEmail = functions.auth.user().onDelete(user => {
	const email = user.email;
	const displayName = user.displayName;

	return sendGoodbyeEmail(email, displayName);
});

async function sendWelcomeEmail(email, displayName) {
	const mailOptions = {
		from: `${APP_NAME} <noreply@gmail.com>`,
		to: email,
	};

	mailOptions.subject = `Welcome to ${APP_NAME}!`;
	mailOptions.text = `Hey ${
		displayName || ''
	}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
	await mailTransport.sendMail(mailOptions);
	functions.logger.log('New welcome email sent to:', email);
	return null;
}

async function sendGoodbyeEmail(email, displayName) {
    const mailOptions = {
      from: `${APP_NAME} <noreply@gmail.com>`,
      to: email,
    };
  
    mailOptions.subject = `Bye!`;
    mailOptions.text = `Hey ${displayName || ''}!, We confirm that we have deleted your ${APP_NAME} account.`;
    await mailTransport.sendMail(mailOptions);
    functions.logger.log('Account deletion confirmation email sent to:', email);
    return null;
  }