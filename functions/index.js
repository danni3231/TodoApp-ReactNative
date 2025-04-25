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

exports.sendProfileUploadEmail = functions.storage.object().onFinalize(async object => {
	const filePath = object.name || '';

	if (!filePath.startsWith('profile-photo/')) return;

	const uid = filePath.split('/')[1].split('.')[0];
    const bucketName = object.bucket;
    const encodedFilePath = encodeURIComponent(filePath);
    const fileUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedFilePath}?alt=media`;

	try {
		const userInfo = await admin.auth().getUser(uid);
		const userEmail = userInfo.email;

		return sendProfileUploadEmail(userEmail, userInfo.displayName, fileUrl);
	} catch (error) {
		functions.logger.error('Error sending email with uploaded photo:', error);
	}
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
	mailOptions.text = `Hey ${
		displayName || ''
	}!, We confirm that we have deleted your ${APP_NAME} account.`;
	await mailTransport.sendMail(mailOptions);
	functions.logger.log('Account deletion confirmation email sent to:', email);
	return null;
}

async function sendProfileUploadEmail(email, displayName, photoURL) {
	const mailOptions = {
		from: `${APP_NAME} <noreply@gmail.com>`,
		to: email,
	};

	mailOptions.subject = `Profile photo update!`;
	mailOptions.text = `Hey ${ displayName || 'user' }!, Your profile picture has been successfully uploaded. You can see it here.: ${photoURL}`;
	
    await mailTransport.sendMail(mailOptions);
	functions.logger.log('Update profile photo email sent to:', email);
	return null;
}
