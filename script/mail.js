var nodemailer = require('nodemailer');

var sendMail = function(from, subject, name, phone, text) {
    var transporter = nodemailer.createTransport({
        port: 465,
        host: 'am6.fcomet.com',
        secure: true,
        auth: {
        user: 'info@xcjumpscalmeyn.be',
        pass: 'l&r4?9;W+]~?'
        }
    });
    
    var mailOptions = {
        from: from,
        to: 'pcalmeyn@telenet.be',
        subject: subject,
        text: text + '\n\n' + name + '\n' + phone
    };

    // verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
};

exports.sendMail = sendMail;

