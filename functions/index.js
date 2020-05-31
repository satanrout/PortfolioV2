const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: 'bucharitesh@gmail.com',
    pass: 'cozoscihyxdvcbmq',
  },
});

admin.initializeApp();

exports.sendEmail = functions.firestore.document('contacts/{id}').onCreate((snapshot,context) => {
  const { name, email, message } = snapshot.data();
  var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
  if (email === 'test@test.test') {
    snapshot.ref.set(null);
  }
    const mailOptions = {
      from: `${email}`,
      to: 'contact@bucharitesh.in',
      subject: `New message from ${name}`,
      text: text,
      html: text,
    };
    
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
          console.log(error)
          return
      }
      console.log("Sent!")
  });
  
});