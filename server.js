const express = require('express');
const cors = require('cors'); // Import the cors middleware
const nodemailer = require('nodemailer');
const app = express();
const port = 5500;

app.use(express.json());
app.use(cors()); // Use the cors middleware



app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // Perform authentication logic here, for example:
  if (username === 'nik' && password === '123') {
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/signup', (req, res) => {
  const { name, userName, email, password } = req.body;
  console.log(req.body);
  res.status(200).json({ success: true, message: 'sign successful' });
});

// it mail for who is the transprter for auth here you can edit your user and pass
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'keegan.kunze34@ethereal.email',
      pass: 'HA4wEcxZRePq2TdZps'
  }
});


app.post('/api/order', async (req, res) => {
  const { username, address, email, pin, totalAmount } = req.body;
  console.log(req.body);

  // Constructing the email text
  const mailText = `
  Hello ${username},

  Thank you for your order! Below are the details of your purchase:

  Order Details:
  -----------------
  Username: ${username}
  Address: ${address}
  Email: ${email}
  Total Amount: ${totalAmount}

  If you have any questions or concerns, feel free to reach out to us.

  Best regards,
  boom booom
  `;

  const mailOptions = {
    from: 'broombroomshkalaka197@gmail.com',
    to: email, // Using the user's email address as the recipient
    subject: 'Your order detail',
    text: mailText
  };

  // Send email
  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
