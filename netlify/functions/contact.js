const { createTransport } = require('nodemailer')

const contactEmail = createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_ADDRESS,
		pass: process.env.EMAIL_PASS,
	},
})

function validateInput(body) {
	if (!body.name || !body.email || !body.message) {
		return { code: 400, message: 'Missing required fields' }
	}
	return { code: 200, message: 'OK' }
}

exports.handler = async function (event, context) {
	if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_PASS) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				code: 500,
				message: 'Internal Server Error',
			}),
		}
	}

	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ code: 405, message: 'Method Not Allowed' }),
		}
	}

	let body
	try {
		body = JSON.parse(event.body)
	} catch (error) {
		return {
			statusCode: 400,
			body: JSON.stringify({ code: 400, message: 'Bad Request' }),
		}
	}

	const errors = validateInput(body)
	if (errors.length > 0) {
		return {
			statusCode: 400,
			body: JSON.stringify({ code: 400, status: 'Bad Request', errors }),
		}
	}

	try {
		const name = body.name || 'No name provided'
		const email = body.email || 'No email provided'
		const message = body.message || 'No message provided'

		const mail = {
			from: name,
			to: process.env.EMAIL_ADDRESS,
			subject: 'Contact Form Submission - Ben Hensor Sound',
			html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
		}

		await contactEmail.sendMail(mail)
		return {
			statusCode: 200,
			body: JSON.stringify({ code: 200, status: 'Message Sent' }),
		}
	} catch (error) {
		console.error('Error processing request:', error)
		if (error.code === 'EAUTH') {
			return {
				statusCode: 500,
				body: JSON.stringify({ error: 'Email authentication failed.' }),
			}
		}
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Internal server error.' }),
		}
	}
}
