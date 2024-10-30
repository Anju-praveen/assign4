var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anjurm5896@gmail.com',
    pass: 'cgkp moou jixp qkqp'
  }
});

var mailOptions = {
  from: 'anjurm5896@gmail.com',
  to: 'nandhunandana871@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });