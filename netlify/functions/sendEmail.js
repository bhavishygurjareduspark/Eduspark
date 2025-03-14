const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { name, username, userid, email } = JSON.parse(event.body);

        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "edusparkkofficial@gmail.com", 
                pass: "your-email-password", 
            },
        });

        let mailOptions = {
            from: "edusparkkofficial@gmail.com",
            to: "edusparkkofficial@gmail.com",
            subject: "New Free Fire Tournament Registration",
            text: `New Registration:\n\nName: ${name}\nUsername: ${username}\nUser ID: ${userid}\nEmail/Phone: ${email}`,
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Registration Successful" }),
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error sending email", details: error.message }),
        };
    }
};
