const nodemailer = require('nodemailer')
const sendEmail =async (to, url, txt) => {
  const smtpTransport = nodemailer.createTransport({
    host: 'mail.genseer.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'isheeka@genseer.com', // generated ethereal user
      pass: 'VEd)YDWJgOP('  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
    })
   

    // send mail with defined transport object
    const mailOptions = {
      from: '"Test Mail"<isheeka@genseer.com>',
      to: to,
      subject: "Welcome Email",
      html: `
          <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
          <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome </h2>
          <p>Congratulations!
              Just click the button below to validate your email address.
          </p>
          
          <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
      
          <p>If the button doesn't work for any reason, you can also click on the link below:</p>
      
          <div>${url}</div>
          <p>Link expires in 5min </p>
          </div>
      `
  }
  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    //console.log(infor);
    return infor
})

}
  
  module.exports = sendEmail
  