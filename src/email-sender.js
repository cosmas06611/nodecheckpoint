const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'ogberan@gmail.com',
        pass: 'keresimisi'
    }
});


const mailOptions = {
    from: 'ogberan@gmail.com',
    to: 'ogbeni@gmail.com',
    subject: 'sending Email using Node.js',
    text: 'this is super easy'
};

transporter.sendMail(mailOptions, function(error, infor){
    if (error){
        console.log(error);
    } else {
        console.log('Email sent: ' + infor.response)
    }
});