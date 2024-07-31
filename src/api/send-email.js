// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // use your email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New consultation from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
