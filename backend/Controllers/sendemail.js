const nodemailer = require("nodemailer");
require("dotenv").config(); // Corrected dotenv import

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com", // Fixed typo
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // Use environment variables
      pass: process.env.EMAIL_PASS, // Never hardcode passwords
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use environment variable
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
