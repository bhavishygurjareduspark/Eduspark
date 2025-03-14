const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, username, user_id, email_or_phone } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "edusparkkofficial@gmail.com", 
            pass: "YOUR_EMAIL_PASSWORD" // Use App Password if needed
        }
    });

    const mailOptions = {
        from: "edusparkkofficial@gmail.com",
        to: "edusparkkofficial@gmail.com",
        subject: "New Tournament Registration",
        text: `NAME: ${name}\nUSERNAME: ${username}\nUSER ID: ${user_id}\nEMAIL OR PHONE: ${email_or_phone}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return { statusCode: 200, body: "Email Sent Successfully!" };
    } catch (error) {
        return { statusCode: 500, body: `Error: ${error.message}` };
    }
};
