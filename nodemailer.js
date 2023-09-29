var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohit.mohit979@gmail.com',
        pass: 'wordpress@Auth'
    }
});

var mailOption = {
    form: 'mohit.mohit979@gmail.com',
    to: 'mohit.mohit979@gmail.com',
    subject: 'Sending Email usinf Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOption, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log("Email sent: " + info.response);
    }
});