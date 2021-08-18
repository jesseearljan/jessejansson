const mail = require('@sendgrid/mail');

const {
  SENDGRID_API_KEY
} = process.env

mail.setApiKey(SENDGRID_API_KEY)

export default (req, res) => {
  const body = JSON.parse(req.body);
  
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: 'jesseearljan@gmail.com',
    from: 'contact@jessejansson.com',
    subject: 'Someone is trying to get in touch with you!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  };


  await mail.send(data)

  res.status(200).json({ status: 'Ok' })
}
