const PDFDocument = require('pdfkit');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');

// Function to generate PDF
const generatePrescriptionPDF = (prescription) => {
    return new Promise((resolve, reject) => {
        const pdfPath = path.join(__dirname, `prescription_${prescription.patientId}.pdf`);
        const doc = new PDFDocument();
        const stream = fs.createWriteStream(pdfPath);

        doc.pipe(stream);
        doc.fontSize(18).text("Prescription", { align: 'center' }).moveDown();
        doc.fontSize(12).text(`Patient Name: ${prescription.patientName}`);
        doc.text(`Age: ${prescription.age}`);
        doc.text(`Cause: ${prescription.cause}`);
        doc.text(`Medicines: ${prescription.medicines}`);
        doc.text(`Dosages: ${prescription.dosages}`);
        doc.text(`Special Instructions: ${prescription.specialInstructions}`);
        doc.text(`Issued On: ${prescription.issuedOn}`);

        doc.end();

        stream.on('finish', () => resolve(pdfPath));
        stream.on('error', reject);
    });
};

// Function to send email with PDF
const sendPrescriptionEmail = async (recipientEmail, pdfPath) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:'false',
        auth: {
            user: process.env.EMAIL_USER, // Use environment variables
            pass: process.env.EMAIL_PASS, // Never hardcode passwords
          },
    });

    const mailOptions = {
        from: 'process.env.EMAIL_USER',
        to: recipientEmail,
        subject: 'Your Prescription',
        text: 'Please find your prescription attached.',
        attachments: [{ filename: 'prescription.pdf', path: pdfPath }]
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { generatePrescriptionPDF, sendPrescriptionEmail };
